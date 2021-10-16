import menu1 from '../images/1.png';
import menu2 from '../images/2.png';
import menu3 from '../images/3.png';
import menu4 from '../images/4.png';
import menu5 from '../images/5.png';
import menu6 from '../images/6.png';
import { Link } from 'react-router-dom';
function AdminMenus() {
  return (
    <>
      <div className="desktop-container">
        <div className="nine">
          <div className="nine-button-container">
            <button className="nine-button not-active">
              <Link className="tlink-black" to="/admin-orders">
                view Orders
              </Link>
            </button>
            <button className="nine-button active">manage Menus</button>
          </div>
          <div className="menu-box">
            <img src={menu1} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="eleven-button">-</button>
              </div>
            </div>
          </div>
          <div className="menu-box">
            <img src={menu2} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="eleven-button">-</button>
              </div>
            </div>
          </div>
          <div className="menu-box">
            <img src={menu3} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="eleven-button">-</button>
              </div>
            </div>
          </div>
          <div className="menu-box">
            <img src={menu4} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="eleven-button">-</button>
              </div>
            </div>
          </div>
          <div className="menu-box">
            <img src={menu5} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="eleven-button">-</button>
              </div>
            </div>
          </div>
          <div className="menu-box">
            <img src={menu6} alt="" />
            <div className="menu-content">
              <div className="menu-name tc-dark">American Pancake</div>
              <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
              <div className="menu-price-amount">
                <div className="menu-price tc-dark tr">$12.52</div>
                <button className="active eleven-button">-</button>
              </div>
            </div>
          </div>
          <div>
            <button className="eleven-button-submit tc-dark" type="submit">
              Add menu
            </button>
          </div>
          <div className="add-space-30"></div>
        </div>
      </div>
    </>
  );
}

export default AdminMenus;
