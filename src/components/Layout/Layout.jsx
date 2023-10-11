import styles from "./Layout.module.scss"
import {Link} from "react-router-dom"
import searchIcon from "@assets/icons/search.svg"
import cartFullIcon from "@assets/icons/cart-full.svg"
import cartIcon from "@assets/icons/cart.svg";
import barsIcon from "@assets/icons/bars.svg";
import homeIcon from "@assets/icons/home.svg";
import showIcon from "@assets/icons/show.svg";
import faqIcon from "@assets/icons/faq.svg";

const NavItem =({path, icon, text})=>{
	return(
		<Link to={path} className={styles.navItem}>
			<img src={icon} alt="icon" className={styles.itemIcon} />
			<p>{text}</p>
		</Link>
	)
}
const Policy =({path,text})=>{
	return (
		<Link to={path} className={styles.policy}>
      <p>{text}</p>
   </Link>
	)
}
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logoBlock}>
          <div className={styles.hdLogo}>
            <p>一日朋友</p>
          </div>
          <div className={styles.hdSearch}>
            <input
              type="text"
              className={styles.search}
              placeholder="請輸入關鍵字"
            />
            <button type="submit" className={styles.searchBtn}>
              <img src={searchIcon} alt="search-icon" />
            </button>
          </div>
        </div>
        <div className={styles.cart}>
          <NavItem path="/cart" icon={cartFullIcon} text="" />
        </div>
        <label htmlFor="toggle" className={styles.toggleLabel}>
          <img src={barsIcon} alt="bars-icon" />
        </label>
        <input type="checkbox" className={styles.toggle} id="toggle" />
        <div className={styles.hdNav}>
          <div className={styles.hdNavItems}>
            <NavItem path="/home" icon={homeIcon} text="首頁" />
            <NavItem path="/show" icon={showIcon} text="朋友們" />
            <NavItem path="/cart" icon={cartIcon} text="交友申請單" />
            <NavItem path="/faq" icon={faqIcon} text="FAQ" />
          </div>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
      <footer>
        <p className={styles.footerLogo}>一日朋友</p>
        <ul className={styles.footerPolicy}>
          <Policy path="*" text="網站使用條款" />
          <Policy path="*" text="隱私權政策" />
          <Policy path="*" text="網路購物條款" />
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
