"use client";
import { usePathname } from "next/navigation";
import SmallBanner from "./small-banner/page";
import { AppRoutes } from "@/shared/models/common.enum";

export default function CommonBanner() {
  const pathName = usePathname();

  if (pathName !== AppRoutes.HOME) {
    return (
      <>
        <SmallBanner />
      </>
    );
  }

  return <></>;
}
