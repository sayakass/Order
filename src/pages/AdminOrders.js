import { Link } from 'react-router-dom';
import '../App.css';

function AdminOrders() {
  return (
    <>
      <div className="desktop-container">
        <div className="nine">
          <div className="nine-button-container">
            <button className="nine-button active">view Orders</button>
            <button className="nine-button not-active">
              <Link className="tlink-black" to="/admin-menus">
                manage Menus
              </Link>
            </button>
          </div>
          <div className="nine-orders tc-dark">Orders</div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="nine-order">
            <div className="nine-order-name">John Doe</div>
            <div className="nine-order-number">
              <span>order #123456789</span>
              <span>14:30</span>
            </div>
          </div>
          <div className="add-space"></div>
        </div>
      </div>
    </>
  );
}

export default AdminOrders;
