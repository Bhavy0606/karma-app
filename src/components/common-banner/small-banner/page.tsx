import { usePathname } from "next/navigation";
import styles from "../common-banner.module.css";

const ArrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
  >
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704" />
      <path d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064" />
      <path d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5" />
    </g>
  </svg>
);

export default function SmallBanner() {
  const pathName = usePathname();
  const pageName = pathName.split("/")[1];

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.fluidContainer}>
          <div className={styles.pageInfo}>
            <h1>{pageName ? pageName : "Home"}</h1>
            <div className={styles.pageRoutes}>
              <label>Home</label>
              <label>{ArrowRight}</label>
              <label>{pageName ? pageName : "Home"}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
