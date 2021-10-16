import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="desktop-container bg-red">
        <div className="mobile-container-space-around">
          <div className="tb t72 tc-white">Order!</div>
          <div>
            <Link className="tlink-white" to="/sign-in">
              <span>Sign in</span>
            </Link>
            <span className="tm t15 tc-white">&nbsp; | &nbsp;</span>
            <Link className="tlink-white" to="/user-register">
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
