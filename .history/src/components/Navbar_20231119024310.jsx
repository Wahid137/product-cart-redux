import logo from "../assets/images/logo.png";
const Navbar = ({ toggle }) => {
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <Link href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </Link>

          <div className="flex gap-4">
            <link href="#home" className="navHome" id="lws-home">
              Home
            </link>
            <link
              onClick={toggle}
              href="cart.html"
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
