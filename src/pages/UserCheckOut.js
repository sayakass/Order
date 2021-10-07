import arrow from './images/arrow.png';
import co2 from './images/co2.png';

function UserCheckOut() {
  return (
    <>
      <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <img className="arrow" src={arrow} alt="" />
            <span className="center small-header-title">Check out</span>
          </div>
          <img className="co" src={co2} alt="" />
          <div className="order-detail-outline">
            <div className="order-detail-header">Order detail</div>
            <div className="order-detail tc-dark tm">
              <span>1 x Shaking Beef Tri-Tip</span>
              <span className="tr">$ 5.99</span>
            </div>
            <div className="order-detail tc-dark tm">
              <span>1 x Shaking Beef Tri-Tip</span>
              <span className="tr">$ 5.99</span>
            </div>
            <div className="order-detail tc-dark tm">
              <span>1 x Shaking Beef Tri-Tip</span>
              <span className="tr">$ 5.99</span>
            </div>
            <div className="add-space-30"></div>
            <div className="sub-total tc-dark tm">
              <span className="tl">Sub total (4 items)</span>
              <span className="tl">$ 5.99</span>
            </div>
            <div className="sub-total tc-dark tm">
              <span className="tl">Service charge</span>
              <span className="tl">$ 5.99</span>
            </div>
            <div className="sub-total tc-dark tm">
              <span className="tl">Vat</span>
              <span className="tl">$ 5.99</span>
            </div>
            <div className="sub-total tc-dark tm">
              <span className="tm">Total:</span>
              <span className="tm">$ 5.99</span>
            </div>
            <div className="add-space-30"></div>
            <form action="">
              <div className="center">
                <input type="file" placeholder="upload slip" />
                <label class="custom-file-upload">
                  <input type="file" />
                  <i class="fa fa-cloud-upload"></i> Upload Slip
                </label>
              </div>
              <div>
                <button className="normal" type="submit">
                  Place Order!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCheckOut;
