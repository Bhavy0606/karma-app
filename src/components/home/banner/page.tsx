"use client";
import styles from "./banner.module.css";

export default function Banner() {
  const AddIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
        />
      </svg>
    </>
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderItem}>
            <div className={styles.sliderItemLeft}>
              <h1>
                Nike New <br />
                Collection!
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident quo, exercitationem soluta minima a sapiente sequi
                dolore incidunt cumque laboriosam in illo! Exercitationem
                distinctio harum eius totam quas. Nam, atque.
              </p>
              <button>
                <span>{AddIcon}</span>
                <span>Add To bag</span>
              </button>
            </div>
            <div className={styles.sliderItemRight}>
              <img src="/img/banner/banner-img.png" alt="Logo" />
            </div>
          </div>
        </div>
        {/* <div className={styles.sliderControlls}>
          <SliderActionButton iconImage={"/img/banner/prev.png"} />
          <SliderActionButton iconImage={"/img/banner/next.png"} />
        </div> */}
      </div>
    </>
  );
}
