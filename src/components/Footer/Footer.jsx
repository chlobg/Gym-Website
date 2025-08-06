const Footer = () => {
  return (
    <footer className="bg-brown text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Left section */}
          <div className="flex-1">
            {/* Logo */}
            <h2 className="mb-6">
              <img
                src="https://gym-store.axiomthemes.com/wp-content/uploads/2023/10/logo-2.png"
                alt="Gym"
              />
            </h2>

            {/* Newsletter */}
            <h3 className="footer-relative mb-4">Newsletter Signup</h3>
            <form className="space-y-4">
              {/* Email input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-500 pb-2 pr-10 outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 text-xl text-gray-300 hover:text-white"
                >
                  →
                </button>
              </div>

              {/* Checkbox */}
              <label className="flex items-center space-x-2 text-gray-400 text-sm">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="underline hover:text-white">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </form>
          </div>

          {/* Right section */}
          <div className="flex-1">
            {/* Slogan en haut */}
            <div className="mb-8">
              <h3 className="footer-h3">
                Transform your body, <br /> transform your life
              </h3>
            </div>

            {/* Liens organisés en 3 colonnes */}
            <div className="grid grid-cols-3 gap-8">
              {/* Socials */}
              <div>
                <h4 className="footer-relative mb-4">Socials</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Dribble</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>

              {/* Menu */}
              <div>
                <h4 className="footer-relative mb-4">Menu</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="footer-relative mb-4">Say Hello</h4>
                <p className="text-gray-400">info@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-gray-500 text-sm">
          AxiomThemes © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
