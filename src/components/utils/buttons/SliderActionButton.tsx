import styles from "./buttons.module.css";

export default function SliderActionButton(props: { iconImage: string }) {
  return (
    <button className={styles.Button}>
      <img src={props.iconImage} />
    </button>
  );
}
