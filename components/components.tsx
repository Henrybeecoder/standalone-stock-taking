import brand_logo from "@/public/assets/logos/brand_logo.svg";
import Image from "next/image";

export function BrandLogo({ className }: { className: string }) {
  return <Image className={className} src={brand_logo} alt="" height={40} />;
}
