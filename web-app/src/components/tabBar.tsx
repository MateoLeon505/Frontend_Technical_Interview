import React from "react";
import Link from "next/link";
import homeIcon from "@/assets/images/homeIcon.svg";
import searchIcon from "@/assets/images/SearchIcon.svg";
import Image from "next/image";
import styles from "@/styles/tabBar.module.css";

const TabBar = () => {
  return (
    <div className={styles.tabBarContainer}>
      <div>
        <Link href="/">
          <div className={styles.sectionContainer}>
            <div className={styles.iconContainer}>
              <Image src={homeIcon} alt="Icono inicio" fill />
            </div>
            <div>
              <h6 className={styles.iconText}>Inicio</h6>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="/search">
          <div className={styles.sectionContainer}>
            <div className={styles.iconContainer}>
              <Image src={searchIcon} alt="Icono buscar" fill />
            </div>
            <div>
              <h6 className={styles.iconText}>Buscar</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
