import styles from "@styles/page.module.scss"
import Layout from "@components/Layout/Layout.jsx";

const FaqPage = () => {
  return (
    <>
      <Layout>
        <div className={styles.wrapper}>
          <h1>FAQ</h1>
          <div className={styles.faqContent}> </div>
        </div>
      </Layout>
    </>
  );
};

export default FaqPage;
