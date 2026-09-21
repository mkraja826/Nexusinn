type NexusinnLogoProps = { className?: string; ariaLabel?: string; variant?: "header" | "footer"; };

export default function NexusinnLogo({ className, ariaLabel = "Nexus", variant = "header" }: NexusinnLogoProps) {
  const dark = variant === "footer";
  const word = dark ? "#f4f4f4" : "#4b4b4b";
  const tag = dark ? "#d7d7d7" : "#555555";
  return (
    <svg className={className} viewBox="0 0 760 310" role="img" aria-label={ariaLabel} xmlns="http://www.w3.org/2000/svg"
      style={{display:"block",width:variant==="footer"?"min(100%,220px)":"clamp(150px,16vw,205px)",height:"auto"}}>
      <text x="5" y="190" fill={word} fontFamily="Arial, Helvetica, sans-serif" fontSize="205" fontWeight="300" letterSpacing="-13">ne</text>
      <g transform="translate(303 34)" strokeLinecap="round" strokeWidth="24">
        <path d="M0 0 L66 91" stroke="#45c6e7"/>
        <path d="M132 0 L67 91" stroke="#d21659"/>
        <path d="M0 174 L67 91" stroke="#f2cf45"/>
        <path d="M132 174 L67 91" stroke="#58b878"/>
      </g>
      <text x="438" y="190" fill={word} fontFamily="Arial, Helvetica, sans-serif" fontSize="205" fontWeight="300" letterSpacing="-13">us</text>
      <text x="105" y="280" fill={tag} fontFamily="Arial, Helvetica, sans-serif" fontSize="44" fontWeight="600" letterSpacing="-2">Global Talent On Demand</text>
    </svg>
  );
}
