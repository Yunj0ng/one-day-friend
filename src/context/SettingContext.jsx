import { createContext, useContext } from "react";
import dayjs from "dayjs";
import slideImg1 from "@assets/imgs/slide1.jpg";
import slideImg2 from "@assets/imgs/slide2.jpg";
import slideImg3 from "@assets/imgs/slide3.jpg";
import slideImg4 from "@assets/imgs/slide4.jpg";

const SettingContext = createContext();
const useSettingContext = () => useContext(SettingContext);

const SettingContextProvider = ({ children }) => {
  const dateStart = dayjs().add(1, "day");
  const dateLine = dayjs().add(30, "day");
  const startTime = dayjs().set("hour", 10).startOf("hour");
  const endTime = dayjs().set("hour", 20).startOf("hour");
  const basicFee = 500;
  const slidesData = [
    { path: "*", img: slideImg1 },
    { path: "*", img: slideImg2 },
    { path: "*", img: slideImg3 },
    { path: "*", img: slideImg4 },
  ];

  return (
    <SettingContext.Provider
      value={{ dateStart, dateLine, startTime, endTime, basicFee, slidesData }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export { useSettingContext, SettingContextProvider };
