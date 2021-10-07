import './App.css';
import menu1 from './images/1.png';
import menu2 from './images/2.png';
import menu3 from './images/3.png';
import menu4 from './images/4.png';
import menu5 from './images/5.png';
import menu6 from './images/6.png';
import menu7 from './images/7.png';
import cart from './images/cart.png';
import arrow from './images/arrow.png';
import co2 from './images/co2.png';
import thankyou from './images/thankyou.png';

function App() {
  return (
    <>
      {/* 01-landign */}
      {/* <div className="desktop-container bg-red">
        <div className="mobile-container-space-around">
          <div className="tb t72 tc-white">Order!</div>
          <div className="tm t15 tc-white">
            <a href="#">
              <span>Sign in</span>
            </a>
            <span>&nbsp; | &nbsp;</span>
            <a href="#">
              <span>Sign up</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* 02-sign-in */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="box-title">
            <div className="t48 tb tc-red">Order!</div>
            <div className="t24 tm tc-dark">Sign in</div>
            <div>
              <span className="tr tc-ligh-grey t12">New user?</span>
              <a href="#">
                <span className="tr tc-blue t12">&nbsp; Create an account</span>
              </a>
            </div>
          </div>
          <form action="" className="form-first f-column">
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
            <button className="normal" type="submit">
              Submit
            </button>
          </form>
          <div className="center">
            <a href="">
              <span className="tc-blue t12 tr center">Reset your password</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* 03-reset-password */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="box-title">
            <div className="t48 tb tc-red">Order!</div>
            <div className="t24 tm tc-dark">Reset new password</div>
          </div>
          <form action="" className="form-first f-column">
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="New password" />
            <input type="password" placeholder="Confirm new password" />
            <button className="normal" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div> */}

      {/* 04-u-register */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="box-title">
            <div className="t48 tb tc-red">Order!</div>
            <div className="t24 tm tc-dark">Sign up</div>
            <div>
              <span className="tr tc-ligh-grey t12">Already have an account?</span>
              <a href="#">
                <span className="tr tc-blue t12">&nbsp; Sign in</span>
              </a>
            </div>
          </div>
          <form action="" className="form-first f-column">
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <input type="password" placeholder="First name" />
            <input type="password" placeholder="Last name" />
            <input type="password" placeholder="Email" />
            <input type="password" placeholder="Address" />
            <button className="normal" type="submit">
              Create an account
            </button>
          </form>
          <div className="add-space"></div>
        </div>
      </div> */}

      {/* 05-u-menus */}
      {/* <div className="menus-desktop-container">
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
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
                      <a href="">
                        <span className="tc-dark tm">-</span>
                      </a>
                      <span className="amount-span">2</span>
                      <a href="">
                        <span className="tc-dark tm">+</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-space"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 06-u-check-out */}
      {/* <div className="desktop-container">
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
      </div> */}

      {/* 07 */}
      {/* <div className="desktop-container">
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
      </div> */}

      {/* 08 */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <img className="arrow" src={arrow} alt="" />
            <span className="center small-header-title">Profile setting</span>
          </div>
          <div className="add-space-30"></div>
          <form action="" className="form-first f-column">
            <label htmlFor="">First name</label>
            <input className="pad" type="text" />
            <label htmlFor="">Last name</label>
            <input className="pad" type="text" />
            <label htmlFor="">Phone number</label>
            <input className="pad" type="text" />
            <label htmlFor="">Email</label>
            <input className="pad" type="text" />
            <label htmlFor="">Address</label>
            <input className="pad" type="text" />
            <button className="normal" type="submit">
              Save change
            </button>
          </form>
        </div>
      </div> */}

      {/* 09 */}
      {/* <div className="desktop-container">
        <div className="nine">
          <div className="nine-button-container">
            <button className="nine-button active">view Orders</button>
            <button className="nine-button not-active">manage Menus</button>
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
      </div> */}

      {/* 10 */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <img className="arrow" src={arrow} alt="" />
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
                Back to orders
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* 11 */}
      {/* <div className="desktop-container">
        <div className="nine">
          <div className="nine-button-container">
            <button className="nine-button active">view Orders</button>
            <button className="nine-button not-active">manage Menus</button>
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
      </div> */}

      {/* 12 */}
      {/* <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <img className="arrow" src={arrow} alt="" />
            <span className="center small-header-title">Add menu</span>
          </div>
          <div className="add-space-30"></div>
          <form action="" className="form-first f-column">
            <label htmlFor="">Menu's name</label>
            <input className="pad" type="text" />
            <label htmlFor="">Detail</label>
            <input className="pad" type="text" />
            <label htmlFor="">Price</label>
            <input className="pad" type="text" />

            <div className="center">
              <input type="file" placeholder="upload slip" />
              <label class="custom-file-upload">
                <input type="file" />
                <i class="fa fa-cloud-upload"></i> Upload image
              </label>
            </div>

            <button className="normal" type="submit">
              Add menu
            </button>
          </form>
        </div>
      </div> */}

      {/* 13 */}
      <div className="desktop-container">
        <div className="box-container">
          <div className="small-header">
            <img className="arrow" src={arrow} alt="" />
            <span className="center small-header-title">User profile</span>
          </div>
          <div className="add-space-30"></div>
          <form action="" className="form-first f-column">
            <label htmlFor="">First name</label>
            <input className="pad" type="text" />
            <label htmlFor="">Last name</label>
            <input className="pad" type="text" />
            <label htmlFor="">Phone number</label>
            <input className="pad" type="text" />
            <label htmlFor="">Email</label>
            <input className="pad" type="text" />
            <label htmlFor="">Address</label>
            <input className="pad" type="text" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
