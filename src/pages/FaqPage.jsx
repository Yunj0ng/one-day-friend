import styles from "@styles/page.module.scss";
import Layout from "@components/Layout/Layout.jsx";
import Loading from "@components/Loading/Loading.jsx";
import { useLoadingContext } from "@context/LoadingContext.jsx";

const FaqPage = () => {
  const { isLoading } = useLoadingContext();
  return (
    <>
      <Layout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.wrapper}>
              <h1>FAQ</h1>
              <div className={styles.faqContent}> </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default FaqPage;
