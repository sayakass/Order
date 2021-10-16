import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <div className="desktop-container">
        <div className="box-container">
          <div className="box-title">
            <div className="t48 tb tc-red">
              <Link className="tlink-red" to="/">
                Order!
              </Link>
            </div>
            <div className="t24 tm tc-dark">Sign in</div>
            <div>
              <span className="tr tc-ligh-grey t12">New user?</span>
              <a href="#">
                <span>
                  <Link className="tlink-blue" to="/user-register">
                    &nbsp; Create an account
                  </Link>
                </span>
              </a>
            </div>
          </div>
          <form action="" className="form-first f-column">
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
            <button className="normal" type="submit">
              <Link className="tlink-button" to="/user-menus">
                Submit
              </Link>
            </button>
          </form>
          <div className="center">
            <Link className="tlink-blue" to="/reset-password">
              <span>Reset your password</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
