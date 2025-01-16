import React from "react";
import styles from "@/components/HomeTop/HomeTop.module.css";

const HomeTop = (): React.ReactElement => {
  return (
    <section
      className={`${styles.top}`}
      style={{
        backgroundImage: `url('/images/homeTop/tech_01.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.maxWidth}>
        <div className={styles.topContent}>
          <div className={styles.text1}>Temos a solução</div>
          <div className={styles.text2}>que a sua empresa precisa</div>
          <div className={styles.text3}>Podemos ajudar a sua empresa!</div>
          <a href="#" className={styles.contactButton}>
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
