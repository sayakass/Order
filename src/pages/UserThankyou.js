import thankyou from './images/thankyou.png';

function UserThankyou() {
  return (
    <>
      <div className="desktop-container">
        <div className="box-container">
          <img className="img-thankyou" src={thankyou} alt="" />
          <div className="thankyou-box">
            <span className="tm t15 center tc-dark">Thank you! we've received your order</span>
            <span className="t13 tr center orderno">Order #123456789</span>
          </div>
          <div className="centerbox">
            <button className="center normal">Order again</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserThankyou;
