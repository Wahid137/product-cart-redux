const Navbar = () => {
  return (
    <div>
      <nav class="bg-[#171C2A] py-4">
        <div class="navBar">
          <a href="index.html">
            <img src="./images/logo.png" alt="LWS" class="max-w-[140px]" />
          </a>

          <div class="flex gap-4">
            <a href="#home" class="navHome" id="lws-home">
              {" "}
              Home{" "}
            </a>
            <a href="cart.html" class="navCart" id="lws-cart">
              <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
