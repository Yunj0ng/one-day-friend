import styles from "./CardContainer.module.scss";
import { Link } from "react-router-dom";
import Card from "@components/Card/Card.jsx";

const CardContainer = ({ member, show, onClick }) => {
  // 篩選7.3以上的member 並依rating高低排序
  const top = member
    .filter((m) => Number(m.rating > 7.3))
    .sort((a, b) => b.rating - a.rating);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {show === "rating" && (
            <>
              <div id="ranking-list" className={styles.title}>
                人氣朋友
              </div>
              <div className={styles.list}>
                {top.map((m) => (
                  <Card
                    key={m.id}
                    id={m.id}
                    name={m.name}
                    img={m.image}
                    location={m.location}
                    rating={m.rating}
                    show={show}
                    onClick={(id) => onClick?.(id)}
                  />
                ))}
              </div>
            </>
          )}
          {show === "normal" && (
            <>
              <div className={styles.title}>找朋友</div>
              <div id="friend-list" className={styles.list}>
                {member.map((m) => (
                  <Card
                    key={m.id}
                    id={m.id}
                    name={m.name}
                    img={m.image}
                    location={m.location}
                    onClick={(id) => onClick?.(id)}
                  />
                ))}
              </div>
              <div className={styles.moreBtn}>
                <Link to="/show">
                  <p>MORE</p>
                </Link>
              </div>
            </>
          )}
          {show === "show" && (
            <>
              <h2 className={styles.showTitle}>朋友們</h2>
              <div id="FriendList" className={styles.showList}>
                {member.map((m) => (
                  <Card
                    key={m.id}
                    id={m.id}
                    name={m.name}
                    img={m.image}
                    location={m.location}
                    onClick={(id) => onClick?.(id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
