import { createContext, useContext } from "react";
import dayjs from "dayjs";

const SettingContext = createContext();
const useSettingContext = () => useContext(SettingContext);

const SettingContextProvider = ({ children }) => {
  const dateStart = dayjs().add(1, "day");
  const dateLine = dayjs().add(30, "day");
  const startTime = dayjs().set("hour", 10).startOf("hour");
  const endTime = dayjs().set("hour", 20).startOf("hour");
  const basicFee = 500;

  return (
    <SettingContext.Provider
      value={{ dateStart, dateLine, startTime, endTime, basicFee }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export { useSettingContext, SettingContextProvider };
