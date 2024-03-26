import React from "react";
import { motion } from "framer-motion";
import successIcon from "@/assets/images/successIcon.svg";
import styles from "@/styles/success.module.css";

const Success = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={styles.succesContiner}

    >
      <motion.img
        src={successIcon.src}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.congratulationsText}
      >
        ¡Felicitaciones!
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.welcomeText}
      >
        Bienvenido a WIN
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className={styles.paragraph}
      >
        Ya puedes ser parte del mundo del deporte
      </motion.p>
    </motion.div>
  );
};

export default Success;
