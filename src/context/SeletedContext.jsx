import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import dummyMember from "@dummyData/member.js";

const SeletedContext = createContext();
const useSletedContext = ()=> useContext(SeletedContext)

const SeletedContextProvider = ({ children }) => {
  const [seletedId, setSeletedId] = useState("");
  const [seletedMemberData, setSeletedMemberData] = useState(null);
  const navigate = useNavigate();

  // 根據被點擊的id取該筆資料
  const getMemberData = (id) => {
    return dummyMember.find((m) => m.id === id);
  };

  // 追蹤哪個member被點擊 導向相應的個人頁面
  const handleMemberClick = (id) => {
    const memberData = getMemberData(id);
    setSeletedMemberData(memberData);
    setSeletedId(id);
    navigate(`/detail/${id}`);
  };

  // 追蹤被點擊的member 並導向結帳頁面
  const handleToCartClick = (id) => {
    // localStorage.setItem("memberId:", id);
    // setSeletedId(id);
    navigate("/cart");
  };

  return (
    <SeletedContext.Provider
      value={{
        seletedId,
        seletedMemberData,
        handleMemberClick,
        handleToCartClick,
      }}
    >
      {children}
    </SeletedContext.Provider>
  );
};

export { useSletedContext, SeletedContextProvider };
