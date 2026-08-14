type NexusinnLogoProps = {
  className?: string;
  ariaLabel?: string;
};

export default function NexusinnLogo({ className, ariaLabel = "Nexusinn — Innovation, Talent, Impact" }: NexusinnLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1536 512"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="nexusinn-remove-black" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    5 5 5 0 0"
          />
        </filter>
      </defs>
      <image
        href="/nexusinn-logo-exact.webp"
        x="0"
        y="0"
        width="1536"
        height="512"
        preserveAspectRatio="xMidYMid meet"
        filter="url(#nexusinn-remove-black)"
      />
    </svg>
  );
}
