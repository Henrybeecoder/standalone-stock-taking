import brand_logo from "@/public/assets/logos/brand_logo.svg";
import Image from "next/image";

export function BrandLogo() {
  return <Image src={brand_logo} alt="" height={40} />;
}
