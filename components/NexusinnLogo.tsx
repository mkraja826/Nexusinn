type NexusinnLogoProps = { className?: string; ariaLabel?: string; variant?: "header" | "footer"; };

export default function NexusinnLogo({ className, ariaLabel = "Nexus — Global Talent On Demand", variant = "header" }: NexusinnLogoProps) {
  return (
    <img
      className={className}
      src="/IMG-20260921-WA0007.jpg"
      alt={ariaLabel}
      style={{
        display: "block",
        width: variant === "footer" ? "min(100%, 154px)" : "clamp(105px, 11.2vw, 144px)",
        height: "auto",
        objectFit: "contain",
      }}
    />
  );
}
