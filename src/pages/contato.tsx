import Head from "next/head";
import styles from "@/styles/contact.module.css";
import ContactContent from "@/components/ContactContent";
import ContactForm from "@/components/ContactForm";

const Contato = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Contato - Armando Mateus</title>
        <meta
          name="description"
          content="Entre em contato para saber mais sobre nossos serviços e soluções personalizadas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
            <h2 className={styles.title}>Entre em Contato</h2>
            <div className={styles.contactContent}>
              <ContactContent />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;
