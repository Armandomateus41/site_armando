import React from "react";
import styles from "@/components/HomePrem/HomePrem.module.css";
import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <section className={styles.premium}>
      <div className={styles.maxWidth}>
        <h2 className={styles.title}>Serviço Premium</h2>
        <div className={styles.premiumContent}>
          <div className={`${styles.column} ${styles.left}`}>
            <img
              src="/images/homePrem/premium_v5.jpg"
              alt="Serviço premium"
              className={styles.image}
            />
          </div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
              Alcance o máximo desempenho para sua empresa!
            </div>
            <p className={styles.description}>
              Experimente um serviço premium que combina inovação, criatividade e produtividade. 
              Eleve os padrões da sua empresa com soluções sob medida para atender todas as suas 
              necessidades. Nossa missão é transformar desafios em oportunidades de crescimento.
              <br /><br />
              Aproveite agora para investir no futuro do seu negócio com uma equipe preparada para fazer a diferença. 
              Trabalhamos com dedicação para garantir resultados extraordinários e ajudar sua empresa a se destacar no mercado.
            </p>
            <Link href="contato" className={styles.contactButton}>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
