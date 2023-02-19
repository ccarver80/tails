import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__mobile}>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="m-1 btn btn-secondary">
            Menu
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link href="/apply">
                <button>Foster or Adopt</button>
              </Link>
            </li>
            <li>
              <Link href="/adopt">
                <button>Adoptable Animals</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Surrender Form</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Donations</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Swag</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Events</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Partners</button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button>Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navBar__desktop}>
        <Link href="/">
          <button>About</button>
        </Link>
        <Link href="/apply">
          <button>Foster or Adopt</button>
        </Link>
        <Link href="/adopt">
          <button>Adoptable Animals</button>
        </Link>
        <Link href="">
          <button>Surrender Form</button>
        </Link>
        <Link href="">
          <button>Donations</button>
        </Link>
        <Link href="">
          <button>Swag</button>
        </Link>
        <Link href="">
          <button>Events</button>
        </Link>
        <Link href="">
          <button>Partners</button>
        </Link>
        <Link href="">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
