function Home() {
  return (
    <>
      <div className="desktop-container bg-red">
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
      </div>
    </>
  );
}

export default Home;
