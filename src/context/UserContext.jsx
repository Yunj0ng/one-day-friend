import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    phone: "",
    email: "",
  });
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNum: "",
    goodThru: "",
    cvc: "",
  });

  function handleUserInfoChange(e) {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleCardInfoChange(e) {
    const { name, value } = e.target;
    setCardInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <UserContext.Provider
      value={{ userInfo, cardInfo, handleUserInfoChange, handleCardInfoChange }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserContextProvider };
