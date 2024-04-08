"use client";

import { useRouter } from "next/navigation";
import styles from "./login.module.css";
export default function UserLogin() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>New to our website?</h2>
          <p>
            There are advances being made in science and technology everyday,
            and a good example of this is the
          </p>
          <button onClick={() => router.push("/register")}>
            Create An Account
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.formContainer}>
            <h2>Login here</h2>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input type="text" placeholder="Enter username here..." />
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
