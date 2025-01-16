import React from "react";
import styles from "@/components/HomeServ/HomeServ.module.css";

const HomeServ = (): React.ReactElement => {
  return (
    <section className={styles.services}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Serviços</h2>
        <div className={styles.servContent}>
          {/* Serviço 1 */}
          <div className={styles.card}>
            <i className="fas fa-wifi"></i>
            <div className={styles.text}>Conexão Rápida</div>
            <p>Internet confiável para sua empresa estar sempre conectada.</p>
          </div>

          {/* Serviço 2 */}
          <div className={styles.card}>
            <i className="fas fa-code"></i>
            <div className={styles.text}>Desenvolvimento Web</div>
            <p>Sites modernos, responsivos e otimizados para o seu negócio.</p>
          </div>

          {/* Serviço 3 */}
          <div className={styles.card}>
            <i className="fas fa-headset"></i>
            <div className={styles.text}>Suporte Técnico</div>
            <p>Assistência especializada para resolver problemas técnicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServ;
