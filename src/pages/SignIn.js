function SignIn() {
  return (
    <>
      <div className="desktop-container">
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
      </div>
    </>
  );
}

export default SignIn;
