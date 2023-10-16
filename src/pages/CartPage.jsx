import Layout from "@components/Layout/Layout.jsx";
import Cart from "@components/Cart/Cart.jsx";
import OderContent from "@components/OderContent/OderContent";
import ShowBill from "@components/ShowBill/ShowBill";
import { useSletedContext } from "@context/SeletedContext.jsx";
import UserInfo from "@components/UserInfo/UserInfo.jsx";
import { useUserContext } from "@context/UserContext.jsx";
import { useSettingContext } from "@context/SettingContext";
import { useOderContext } from "@context/OderContext";
import Swal from "sweetalert2";
import Loading from "@components/Loading/Loading.jsx";
import { useLoadingContext } from "@context/LoadingContext.jsx";

const CartPage = () => {
  const { seletedMemberData } = useSletedContext();
  const { userInfo, cardInfo, handleUserInfoChange, handleCardInfoChange } =
    useUserContext();
  const { basicFee } = useSettingContext();
  const { totalFee, seletedHours } = useOderContext();
  const { isLoading } = useLoadingContext();

  // 提交測試
  const handleSubmit = () => {
    // 判斷有無空值 Object.values(obj)將物件值轉為陣列
    function isEmpty(obj) {
      return (
        Object.values(obj).every((value) => value === "") ||
        Object.values(obj).some((value) => value === "")
      );
    }
    if (!seletedMemberData) {
      Swal.fire({
        position: "top",
        title: "請選擇朋友",
        color: "#868faf",
        background: "#faf9f5",
        width: 394,
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    if (isEmpty(userInfo) || isEmpty(cardInfo)) {
      Swal.fire({
        position: "top",
        title: "請填寫完整資料",
        color: "#868faf",
        background: "#faf9f5",
        width: 394,
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      Swal.fire({
        position: "top",
        title: "結帳成功",
        color: "#868faf",
        background: "#faf9f5",
        width: 394,
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      <Layout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Cart title="申請表" member={seletedMemberData} />
            <OderContent />
            <UserInfo
              user={userInfo}
              card={cardInfo}
              onUserInfoChange={handleUserInfoChange}
              onCardInfoChange={handleCardInfoChange}
            />
            <ShowBill
              basicFee={basicFee}
              hours={seletedHours}
              totalFee={totalFee}
              onClick={handleSubmit}
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default CartPage;
