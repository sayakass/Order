import arrow from '../images/arrow.png';
import co2 from '../images/co2.png';
import { Link } from 'react-router-dom';

function AdminOrder() {
  return (
    <>
      <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <span className="center small-header-title">Order</span>
          </div>
          <img className="co" src={co2} alt="" />
          <div className="order-detail-outline">
            <div className="order-detail-header">Order #123456789 - 14:30</div>
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
            <div className="center ten-slip">Slip</div>
            <div>
              <button className="normal" type="submit">
                <Link className="tlink-white" to="/admin-orders">
                  Back to orders
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminOrder;
