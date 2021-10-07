import arrow from './images/arrow.png';

function AdminProfile() {
  return (
    <>
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

export default AdminProfile;
