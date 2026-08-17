type NexusinnLogoProps = {
  className?: string;
  ariaLabel?: string;
  variant?: "header" | "footer";
};

export default function NexusinnLogo({
  className,
  ariaLabel = "Nexusinn",
  variant = "header",
}: NexusinnLogoProps) {
  const dark = variant === "footer";
  const wordmark = dark ? "#ffffff" : "#071629";
  const muted = dark ? "#9fb2c8" : "#627087";
  const accent = "#176bff";

  const style = dark
    ? { display: "block", width: "min(100%, 220px)", height: "auto" }
    : { display: "block", width: "clamp(160px, 17vw, 215px)", height: "auto" };

  return (
    <svg
      className={className}
      viewBox="0 0 330 72"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g transform="translate(2 6)">
        <path
          d="M6 54V10h12l25 30V10h11v44H42L17 24v30H6z"
          fill={wordmark}
        />
        <path
          d="M50 10h12v12"
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M62 10L47 25"
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="square"
        />
      </g>

      <text
        x="82"
        y="43"
        fill={wordmark}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="1.2"
      >
        NEXUSINN
      </text>
      <text
        x="84"
        y="58"
        fill={muted}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8.8"
        fontWeight="600"
        letterSpacing="2.6"
      >
        GLOBAL TECHNOLOGY & TRANSFORMATION
      </text>
    </svg>
  );
}
