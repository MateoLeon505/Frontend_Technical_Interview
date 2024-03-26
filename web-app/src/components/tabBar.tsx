import React from "react";
import Link from "next/link";
import homeIcon from "@/assets/images/homeIcon.svg";
import searchIcon from "@/assets/images/SearchIcon.svg";
import Image from "next/image";
import styles from "@/styles/tabBar.module.css";

const TabBar = () => {
  return (
    <div className={styles.tabBarContainer}>
      {/* <div>
        <Link href="/">Inicio</Link>
        <Image src={homeIcon} alt="Icono inicio" />
      </div>
      <div>
        <Link href="/search">Buscar</Link>
        <Image src={searchIcon} alt="Icono buscar" />
      </div> */}
    </div>
  );
};

export default TabBar;
