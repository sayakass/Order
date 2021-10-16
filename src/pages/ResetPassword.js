import { Link } from 'react-router-dom';

function ResetPassword() {
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
      </div>
    </>
  );
}

export default ResetPassword;
