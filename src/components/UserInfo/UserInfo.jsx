import styles from "./UserInfo.module.scss";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const UserInfo = ({ user, card, onUserInfoChange, onCardInfoChange }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <h3>申請者資訊</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="username"
              name="username"
              label="請輸入姓名"
              value={user.username}
              onChange={(e) => onUserInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
            <TextField
              required
              id="phone"
              name="phone"
              label="請輸入電話"
              value={user.phone}
              onChange={(e) => onUserInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
            <TextField
              required
              id="email"
              name="email"
              label="請輸入Email"
              value={user.email}
              onChange={(e) => onUserInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
          </div>
        </Box>
      </div>
      <div className={styles.paymentInfo}>
        <h3>付款資訊</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="name"
              name="name"
              label="持卡人姓名"
              value={card.name}
              onChange={(e) => onCardInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
            <TextField
              required
              id="card-num"
              name="cardNum"
              label="卡號"
              value={card.cardNum}
              onChange={(e) => onCardInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
            <TextField
              required
              id="good-thru"
              name="goodThru"
              label="有效期限"
              value={card.goodThru}
              onChange={(e) => onCardInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
            <TextField
              required
              id="cvc"
              name="cvc"
              label="CVC / CCV"
              value={card.cvc}
              onChange={(e) => onCardInfoChange?.(e)}
              variant="standard"
              margin="normal"
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default UserInfo;
