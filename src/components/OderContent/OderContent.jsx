import styles from "./OderContent.module.scss";
import { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const tomorrow = dayjs().add(1, "day");
const dateLine = dayjs().add(30, "day");
const tenAm = dayjs().set("hour", 10).startOf("hour");
const eightPm = dayjs().set("hour", 20).startOf("hour");

// 依選擇的見面時間生成可見面時數的選項
const generateMenuItems = (startTime, endTime)=>{
	const hoursBetween = endTime.diff(startTime,"hour") + 1
	// 最後轉換為字串 確保正確顯示在畫面上
	const menuItems = Array.from({length: hoursBetween},(_,index)=> (index + 1).toString());
	return  menuItems
}

const OderContent = () => {
  const [selectedTime, serSelectedTime] = useState(tenAm);
	const [startTime, setStartTime] = useState(tenAm)
	
  const handleChange = (event) => {
    serSelectedTime(event.target.value);
  };

	const avilableTimes = generateMenuItems(startTime, eightPm);

  return (
    <div className={styles.wrapper}>
      <div className={styles.pickerWrapper}>
        <DatePicker
          label="請選擇欲見面日期"
          desktopModeMediaQuery="(min-width:1024px)"
          defaultValue={tomorrow}
          minDate={tomorrow}
          maxDate={dateLine}
        />
        <div className={styles.space}></div>
        <TimePicker
          label="請選擇欲見面時間"
          desktopModeMediaQuery="(min-width:1024px)"
          defaultValue={tenAm}
          value={startTime}
          minTime={tenAm}
          maxTime={eightPm}
          // 設置最小時間單位為5分鐘
          minutesStep={5}
          onChange={(newStartTime) => setStartTime(newStartTime)}
        />
      </div>
      <div className={styles.selectContainer}>
        <FormControl fullWidth>
          <InputLabel id="select-helper-label">請選擇欲見面時數</InputLabel>
          <Select
            labelId="select-heaper-label"
            id="select-helper"
            label="請選擇欲見面時數"
            value={selectedTime}
            onChange={handleChange}
          >
            {avilableTimes.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>＊可見面時間為晚上9點以前，如未滿 1小時均以 1小時計算</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default OderContent;
