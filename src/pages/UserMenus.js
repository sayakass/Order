import menu1 from '../images/1.png';
import menu2 from '../images/2.png';
import menu3 from '../images/3.png';
import menu4 from '../images/4.png';
import menu5 from '../images/5.png';
import menu6 from '../images/6.png';
import menu7 from '../images/7.png';

function UserMenus() {
  return (
    <>
      <div className="menus-desktop-container">
        <div className="menus-container">
          <div className="menus-header">
            <div className="menus-header-left">John Doe</div>
            <div className="menus-header-right">
              <div className="cart">
                <span className="tc-dark">Cart</span>
                <span className="cart-count">3</span>
              </div>
            </div>
          </div>
          <div className="menus-title tb">Order!</div>
          <div className="menus-box-outline">
            <div className="menus-box">
              <div className="menu-box">
                <img src={menu1} alt="" />
                <div className="menu-content">
                  <div className="menu-name tc-dark">American Pancake</div>
                  <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
                  <div className="menu-price-amount">
                    <div className="menu-price tc-dark tr">$12.52</div>
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
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
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
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
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
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
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
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
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
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
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-box">
                <img src={menu7} alt="" />
                <div className="menu-content">
                  <div className="menu-name tc-dark">American Pancake</div>
                  <div className="menu-describe tr">Mindy tries to solve Jaime's best friend problem by pairing up</div>
                  <div className="menu-price-amount">
                    <div className="menu-price tc-dark tr">$12.52</div>
                    <div className="menu-amount tc-dark tr">
                      <span className="tc-dark tm">-</span>
                      <span className="amount-span">2</span>
                      <span className="tc-dark tm">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-space"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMenus;
