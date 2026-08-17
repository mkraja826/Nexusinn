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
  const secondary = dark ? "#c8d6e8" : "#627087";
  const accent = "#176bff";

  const style = dark
    ? { display: "block", width: "min(100%, 238px)", height: "auto" }
    : { display: "block", width: "clamp(170px, 18vw, 230px)", height: "auto" };

  return (
    <svg
      className={className}
      viewBox="0 0 360 96"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g transform="translate(2 10)">
        <rect x="0" y="0" width="72" height="72" rx="16" fill={dark ? "#0b2038" : "#eef4ff"} />
        <path d="M18 52V20h9l18 23V20h9v32h-9L27 29v23z" fill={wordmark} />
        <path d="M52 18h12v12" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
        <path d="M64 18L49 33" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="square" />
      </g>

      <text
        x="92"
        y="50"
        fill={wordmark}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="35"
        fontWeight="700"
        letterSpacing="0.4"
      >
        NEXUSINN
      </text>
      <rect x="93" y="62" width="32" height="3" rx="1.5" fill={accent} />
      <text
        x="93"
        y="80"
        fill={secondary}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="2.2"
      >
        INNOVATION • TALENT • IMPACT
      </text>
    </svg>
  );
}
