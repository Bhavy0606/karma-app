"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

const BagImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="currentColor"
      d="M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99c-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5c35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z"
    />
  </svg>
);

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 21 21"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8.5" cy="8.5" r="5" />
      <path d="M17.571 17.5L12 12" />
    </g>
  </svg>
);
const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="m7 7l10 10M7 17L17 7"
    />
  </svg>
);
export default function Header() {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <div className={styles.stickyHeaderContainer}>
        <div className={styles.searchBoxWrapper}>
          <div className={styles.fluidHeader}>
            <div className={styles.headerLogo}>
              <img src="/img/logo.png" alt="Logo" width={50} height={50} />
            </div>

            <nav>
              <ul>
                <li
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Home
                </li>
                <li>
                  Shop
                  <ul>
                    <li>Shop Category</li>
                    <li>Product Details</li>
                    <li>Product Checkout</li>
                    <li>Shopping Cart</li>
                    <li>Confirmation</li>
                  </ul>
                </li>
                <li>
                  Blog
                  <ul>
                    <li>Blog</li>
                    <li>Blog Details</li>
                  </ul>
                </li>
                <li>
                  Pages
                  <ul>
                    <li
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Login
                    </li>
                    <li
                      onClick={() => {
                        router.push("/register");
                      }}
                    >
                      Register
                    </li>
                    <li>Tracking</li>
                    <li>Tracking</li>
                  </ul>
                </li>
                <li>Contact</li>
                <li>{BagImage}</li>
                <li
                  onClick={() => {
                    setIsSearchBoxVisible(!isSearchBoxVisible);
                  }}
                >
                  {SearchIcon}
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={
              isSearchBoxVisible
                ? styles.visibleSearchBoxContainer
                : styles.searchBoxContainer
            }
          >
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search here..."
            />
            <a
              onClick={(e) => {
                e.preventDefault();
                setIsSearchBoxVisible(!isSearchBoxVisible);
              }}
              className={styles.closeBtnIcon}
            >
              {CloseIcon}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
