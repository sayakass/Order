import { Link } from 'react-router-dom';

function UserRegister() {
  return (
    <>
      <div className="desktop-container">
        <div className="box-container">
          <div className="box-title">
            <div className="t48 tb tc-red">
              {' '}
              <Link className="tlink-red" to="/">
                Order!
              </Link>
            </div>
            <div className="t24 tm tc-dark">Sign up</div>
            <div>
              <span className="tr tc-ligh-grey t12">Already have an account?</span>
              <Link className="tlink-blue" to="/sign-in">
                &nbsp; Sign in
              </Link>
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
      </div>
    </>
  );
}

export default UserRegister;
