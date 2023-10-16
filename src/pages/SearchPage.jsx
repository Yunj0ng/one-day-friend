import styles from "@styles/page.module.scss";
import { Link } from "react-router-dom";
import Layout from "@components/Layout/Layout.jsx";
import Loading from "@components/Loading/Loading.jsx";
import { useLoadingContext } from "@context/LoadingContext.jsx";
import { useSearchContext } from "@context/SearchContext";
import CardContainer from "@components/CardContainer/CardContainer";
import { useSletedContext } from "@context/SeletedContext";

const SearchPage = () => {
  const { isLoading } = useLoadingContext();
  const { searchResults } = useSearchContext();
  const { handleMemberClick } = useSletedContext();
  return (
    <>
      <Layout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.searchContent}>
              <h1>搜尋結果</h1>
              {searchResults.length === 0 ? (
                <div className={styles.content}>
                  <h3>無相符的資料</h3>
                  <Link to="/" className={styles.backToHome}>
                    返回首頁
                  </Link>
                </div>
              ) : (
                <CardContainer
                  member={searchResults}
                  style="show"
                  onClick={handleMemberClick}
                />
              )}
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default SearchPage;
