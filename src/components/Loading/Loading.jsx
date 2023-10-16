import styles from "./Loading.module.scss";
import LinerProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        LOAD<span>ING</span>
      </h1>
      <LinerProgress />
    </div>
  );
};

export default Loading;
