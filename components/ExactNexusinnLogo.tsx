export const exactNexusinnLogo = "/nexusinn-logo-exact.webp";

export default function ExactNexusinnLogo({ className = "", alt = "Nexusinn — Innovation, Talent, Impact" }: { className?: string; alt?: string }) {
  return <img className={className} src={exactNexusinnLogo} alt={alt} />;
}
