"use client";
import { useEffect, useState } from "react";
import styles from "./register.module.css";
import { useRouter } from "next/navigation";

export default function UserRegister() {
  const [isUserMale, setIsUserMale] = useState<boolean>(true);
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Already registered?</h2>
          <p>
            There are advances being made in science and technology everyday,
            and a good example of this is the
          </p>
          <button onClick={() => router.push("/login")}>
            Login to Account
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.formContainer}>
            <h2>Register here</h2>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input type="text" placeholder="Enter username here..." />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter username here..." />
            </div>
            <div className={styles.formGroup}>
              <label>Date of Birthd</label>
              <input type="date" />
            </div>
            <div className={styles.doubleFormGroup}>
              <label>Gender</label>
              <div className={styles.formGroup}>
                <input
                  type="radio"
                  id="genderMale"
                  name="gender"
                  value={"Male"}
                  checked={isUserMale}
                  onChange={(e) => {}}
                />
                <label
                  onClick={() => {
                    setIsUserMale(!isUserMale);
                  }}
                >
                  Male
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="radio"
                  id="genderFemale"
                  name="gender"
                  value={"Female"}
                  checked={!isUserMale}
                  onChange={(e) => {}}
                />
                <label
                  onClick={() => {
                    setIsUserMale(!isUserMale);
                  }}
                >
                  Female
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" placeholder="Enter password here..." />
            </div>
            <button>Log In</button>
          </div>
        </div>
      </div>
    </>
  );
}
