type NexusinnLogoProps = { className?: string; ariaLabel?: string; variant?: "header" | "footer"; };

export default function NexusinnLogo({ className, ariaLabel = "Nexus — Global Talent On Demand", variant = "header" }: NexusinnLogoProps) {
  return (
    <img
      className={className}
      src="/IMG-20260921-WA0007.jpg"
      alt={ariaLabel}
      style={{
        display: "block",
        width: variant === "footer" ? "min(100%, 220px)" : "clamp(150px, 16vw, 205px)",
        height: "auto",
        objectFit: "contain",
      }}
    />
  );
}
