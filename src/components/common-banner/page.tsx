"use client";
import { usePathname } from "next/navigation";
import styles from "./common-banner.module.css";
import SmallBanner from "./small-banner/page";
import LargeBanner from "./large-banner/page";

export default function CommonBanner() {
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];

  // small banner

  // large banner

  return (
    <>
      <SmallBanner />
    </>
  );
}
