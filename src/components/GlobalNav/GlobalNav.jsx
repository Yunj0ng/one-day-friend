import styles from "./GlobalNav.module.scss";
import searchIcon from "@assets/icons/search.svg";
import SnsContainer from "@components/SnsContainer/SnsContainer.jsx";
import { useSearchContext } from "@context/SearchContext";

const NavItem = ({ block, text }) => {
  return (
    <div className={styles.navItem}>
      <a href={`#${block}`}>{text}</a>
    </div>
  );
};

const GlobalNav = () => {
  const { setSearched, handleSearch, handleKeyDown } = useSearchContext();
  return (
    <div className={styles.homeContents}>
      <div className={styles.globalNav}>
        <div className={styles.menuItem}>
          <NavItem block="info" text="公告" />
          <NavItem block="ranking-list" text="人氣朋友" />
          <NavItem block="friend-list" text="找朋友" />
        </div>
        <div className={styles.snsList}>
          <SnsContainer style="global" />
        </div>
        <div className={styles.gSearch}>
          <input
            type="text"
            className={styles.search}
            placeholder="請輸入關鍵字"
            onChange={(e) => setSearched(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit">
            <img
              src={searchIcon}
              alt="search-icon"
              className={styles.searchBtn}
              onClick={handleSearch}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
