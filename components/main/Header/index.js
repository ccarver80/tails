import React from "react";
import Image from "next/image";
import logo from "../../../public/imgs/Logo.png";
import { NavBar } from "../NavBar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Image src={logo} className={styles.header__image} />
      </div>
      <NavBar />
    </>
  );
};
