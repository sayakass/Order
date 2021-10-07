import arrow from './images/arrow.png';

function AdminAddMenu() {
  return (
    <>
      <div className="desktop-container">
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
      </div>
    </>
  );
}

export default AdminAddMenu;
