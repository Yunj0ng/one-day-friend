import styles from "./SnsContainer.module.scss";
import fbIcon from "@assets/icons/fb.svg";
import twitterIcon from "@assets/icons/twitter.svg";
import insIcon from "@assets/icons/ins.svg";
import lineIcon from "@assets/icons/line.svg";

const SnsItem = ({ sns, img }) => {
  return (
    <div className={styles.media}>
      <a href="https://Yunj0ng.github.io/one-day-friend">
        <img src={img} alt={sns} />
      </a>
    </div>
  );
};

const SnsContainer = ({ show }) => {
  return (
    <>
      {show === "global" ? (
        <div className={styles.gSnsList}>
          <SnsItem img={fbIcon} sns="fb" />
          <SnsItem img={twitterIcon} sns="twitter" />
          <SnsItem img={insIcon} sns="instagram" />
          <SnsItem img={lineIcon} sns="line" />
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.title}>追蹤我們</div>
          <div className={styles.snsList}>
            <SnsItem img={fbIcon} sns="fb" />
            <SnsItem img={twitterIcon} sns="twitter" />
            <SnsItem img={insIcon} sns="instagram" />
            <SnsItem img={lineIcon} sns="line" />
          </div>
        </div>
      )}
    </>
  );
};

export default SnsContainer;
