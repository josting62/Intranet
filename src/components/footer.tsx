//IMAGES
import footerIcon from "/assets/footer-icon.svg"
import facebook from "/assets/facebook.svg"
import instagram from "/assets/instagram.svg"
import youtube from "/assets/youtube.svg"

const Footer = () => {
  return (
    <>
      <div className="bg-red-500 dark:bg-indigo-400 h-4"></div>
      <footer className="px-4 divide-y dark:text-gray-800 bg-color dark:bg-gray-900">
        <div className="text-white container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="w-auto">
            <div
              rel="noopener noreferrer"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <img src={footerIcon} alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">
                Nordvital IPS
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-xl tracking-wide uppercase hover:text-gray-900 dark:text-gray-100">
                Product
              </h3>
              <ul className="text-lg space-y-1">
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl tracking-wide uppercase dark:text-gray-100">
                Company
              </h3>
              <ul className="text-lg space-y-1">
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl uppercase dark:text-gray-100">Developers</h3>
              <ul className="text-lg space-y-1">
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="dark:hover:text-indigo-700 hover:text-gray-900 dark:text-gray-100" rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-xl uppercase dark:text-gray-100">Redes Sociales</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://web.facebook.com/Nordvitaloficial/?locale=es_LA&_rdc=1&_rdr"
                  target="_blank"
                  title="Facebook"
                  className="flex items-center p-1"
                > 
                  <img className="w-8 h-8 hover:-translate-y-2 transform transition-all duration-150" src={facebook} alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@NordvitalIPS"
                  target="_blank"
                  title="Youtube"
                  className="flex items-center p-1"
                >
                  <img className="w-8 h-8 hover:-translate-y-2 transform transition-all duration-150" src={youtube} alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/nordvital_ips/"
                  target="_blank"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <img className="w-8 h-8 hover:-translate-y-2 transform transition-all duration-150" src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-xl text-center dark:text-gray-100 text-gray-900">
          © 2024 Nordvital IPS, todos los derechos reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
