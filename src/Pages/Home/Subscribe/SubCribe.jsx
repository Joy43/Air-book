import mail from "../../../assets/image/mail/SUBSCRIBE.png";
const SubCribe = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <img className="w-80 h-72" src={mail} alt="" />
        </nav>

        <form>
          <h6 className="footer-title">Subscribe to our Newsletter!</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-[#006CE4]">
                Subscribe to our newsletter and stay updated.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default SubCribe;
