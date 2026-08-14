export const runtime = "edge";

export async function GET(request: Request) {
  const source = new URL("/nexusinn-logo-transparent-exact-900.webp.b64", request.url);
  const encoded = await fetch(source, { cache: "force-cache" }).then((response) => {
    if (!response.ok) throw new Error("Logo asset unavailable");
    return response.text();
  });

  const binary = atob(encoded.trim());
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
