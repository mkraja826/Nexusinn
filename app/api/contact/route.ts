import { NextResponse } from "next/server";

const allowedInterests = new Set([
  "GCC Strategy & Setup",
  "Build-Operate-Transfer",
  "Hybrid Captive / Joint Venture",
  "AI Strategy & Readiness",
  "ML Engineering",
  "Intelligent Automation",
  "Generative AI",
  "Responsible AI & Governance",
  "Claims Automation",
  "Underwriting AI",
  "InsurTech Platforms",
  "Insurance Compliance / RegTech",
  "Other",
]);

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json({ error: "Unsupported request format." }, { status: 415 });
    }

    const contentLength = Number(request.headers.get("content-length") || "0");
    if (Number.isFinite(contentLength) && contentLength > 16_384) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    const configuredSite = process.env.NEXT_PUBLIC_SITE_URL;
    const origin = request.headers.get("origin");
    if (configuredSite && origin) {
      const expectedOrigin = new URL(configuredSite).origin;
      if (origin !== expectedOrigin) {
        return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
      }
    }

    const body = await request.json();
    if (text(body.website, 200)) return NextResponse.json({ message: "Enquiry received." });

    const lead = {
      name: text(body.name, 100),
      email: text(body.email, 160).toLowerCase(),
      company: text(body.company, 140),
      role: text(body.role, 120),
      phone: text(body.phone, 40),
      country: text(body.country, 100),
      interest: text(body.interest, 100),
      details: text(body.details, 3000),
      consent: body.consent === "yes",
      submittedAt: new Date().toISOString(),
      source: "nexusinn-website",
    };

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
    if (!lead.name || !emailOk || !lead.company || !allowedInterests.has(lead.interest) || lead.details.length < 20 || !lead.consent) {
      return NextResponse.json({ error: "Please complete all required fields with valid information." }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ error: "Online enquiries are not active yet. Please try again after the contact channel is configured." }, { status: 503 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.CONTACT_WEBHOOK_SECRET) {
      headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}`;
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify(lead),
      signal: controller.signal,
      cache: "no-store",
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      return NextResponse.json({ error: "We could not deliver your enquiry. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been submitted to Nexusinn." });
  } catch {
    return NextResponse.json({ error: "Unable to process this enquiry." }, { status: 400 });
  }
}
