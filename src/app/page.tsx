import Banner from "@/components/home/banner/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}
