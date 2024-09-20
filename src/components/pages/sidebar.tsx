//*Function and Hooks
import { useState } from "react";
import { NavLink } from "react-router-dom";
//*Icons
import flag from "/assets/flag.svg";
import home from "/assets/home.svg";
import cups from "/assets/cups.svg";
import table from "/assets/table.svg";
import arrow from "/assets/arrow.svg";
import clinic from "/assets/clinic.svg";
import report from "/assets/report.svg";
import config from "/assets/config.svg";
import guides from "/assets/guides.svg";
import tablet from "/assets/tablet.svg";
import idCard from "/assets/id-card.svg";
import patient from "/assets/patient.svg";
import surgery from "/assets/surgery.svg";
import userAdd from "/assets/user-add.svg";
import location from "/assets/location.svg";
import userList from "/assets/user-list.svg";
import radicator from "/assets/radicator.svg";
import checklist from "/assets/checklist.svg";
import agreement from "/assets/agreement.svg";
import arrowDown from "/assets/arrow-down.svg";
import permission from "/assets/permission.svg";
import performance from "/assets/performance.svg";
import userProfile from "/assets/user-profile.svg";
import departaments from "/assets/departaments.svg";
import registration from "/assets/registration.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [openConfigAccordion, setOpenConfigAccordion] = useState<string | null>(
    null
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const toggleConfigAccordion = (section: string) => {
    setOpenConfigAccordion(openConfigAccordion === section ? null : section);
  };

  return (
    <aside
      className={`${
        isOpen ? "w-72" : "w-16"
      } relative transition-all duration-300 h-screen px-5 py-8 overflow-y-auto bg-color border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}
    >
      {/* Arrow Icon */}
      <div
        className="absolute top-4 right-2 transform cursor-pointer z-10"
        onClick={toggleSidebar}
      >
        <div className="flex justify-center items-center bg-white p-2 rounded-full shadow-md border border-gray-300">
          <img
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
            src={arrow}
            alt="Toggle Sidebar"
          />
        </div>
      </div>

      {/* Content of the Sidebar */}
      <div className="flex flex-col justify-between flex-1 mt-10">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            {isOpen && (
              <label className="px-3 text-xl font-semibold text-gray-200 uppercase dark:text-gray-100">
                Sistema
              </label>
            )}
            <NavLink to="/">
              <div className="flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer">
                <img className="w-5 h-5 dark:invert" src={home} alt="" />
                <span
                  className={`px-3 text-base font-medium dark:text-gray-200 ${
                    !isOpen && "hidden"
                  }`}
                >
                  Inicio
                </span>
              </div>
            </NavLink>

            <div>
              <div
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer ${
                  openAccordion === "dashboard"
                    ? "bg-blue-600 text-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleAccordion("dashboard")}
              >
                <img className="w-5 h-5 dark:invert" src={table} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Gestion de Calidad
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openAccordion === "dashboard" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </div>

              {isOpen && openAccordion === "dashboard" && (
                <NavLink to="/tabla-radicacion">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                      <img src={flag} alt="" className="w-5 h-5 dark:invert" />
                      <p className="text-gray-900 dark:text-gray-100 font-medium px-2">
                        Norte de Santander
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>

            <div>
              <div
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-100 cursor-pointer ${
                  openAccordion === "performance"
                    ? "bg-blue-600 text-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleAccordion("performance")}
              >
                <img className="w-5 h-5 dark:invert" src={performance} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Gestion de Servicios
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openAccordion === "performance" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </div>

              {isOpen && openAccordion === "performance" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        src={registration}
                        alt=""
                        className="w-5 h-5 dark:invert"
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Tabla Radicacion
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "performance" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        src={surgery}
                        alt=""
                        className="w-5 h-5 dark:invert"
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Tabla Cirugías
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "performance" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        src={permission}
                        alt=""
                        className="w-5 h-5 dark:invert"
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Tabla Autorización
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>

            <div>
              <a
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-100 cursor-pointer ${
                  openAccordion === "guides"
                    ? "bg-blue-600 text-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleAccordion("guides")}
              >
                <img className="w-5 h-5 dark:invert" src={guides} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Gestion de Reportes
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openAccordion === "guides" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </a>

              {isOpen && openAccordion === "guides" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        src={report}
                        alt=""
                        className="w-5 h-5 dark:invert"
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Reportes
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>

            <div>
              <a
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-100 cursor-pointer ${
                  openAccordion === "hotspots"
                    ? "bg-blue-600 text-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleAccordion("hotspots")}
              >
                <img className="w-5 h-5 dark:invert" src={tablet} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Tablas
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openAccordion === "hotspots" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </a>

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={cups} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Cups
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={patient} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Pacientes
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={radicator} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Radicadores
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={departaments} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Municipios
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={agreement} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Convenios
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={idCard} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Tipo Documento
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={clinic} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        IPS Primaria
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}

              {isOpen && openAccordion === "hotspots" && (
                <NavLink to="/">
                  <div className="ml-3 mt-2 space-y-2">
                    <div className="flex flex-row p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img src={location} alt="" className="w-5 h-5" />
                      <p className="text-gray-900 dark:text-gray-300 font-medium px-2">
                        Lugar Radicacion
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>

            <div>
              <a
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-100 cursor-pointer ${
                  openAccordion === "checklist"
                    ? "bg-blue-600 text-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleAccordion("checklist")}
              >
                <img className="w-5 h-5 dark:invert" src={checklist} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Checklists
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openAccordion === "checklist" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </a>

              {isOpen && openAccordion === "checklist" && (
                <NavLink to="/">
                  <div className="ml-6 mt-2 space-y-2">
                    <div className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <p className="text-gray-900 dark:text-gray-300 font-medium">
                        Checklists Content
                      </p>
                    </div>
                  </div>
                </NavLink>
              )}
            </div>
          </div>

          {/* Configuration Section */}
          <div className="space-y-3">
            {isOpen && (
              <label className="px-3 text-xl font-semibold text-gray-200 uppercase dark:text-gray-100">
                Configuración
              </label>
            )}

            <div>
              <a
                className={`flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 cursor-pointer ${
                  openConfigAccordion === "config"
                    ? "bg-gray-100 dark:bg-gray-800"
                    : ""
                }`}
                onClick={() => toggleConfigAccordion("config")}
              >
                <img className="w-5 h-5 dark:invert" src={config} />
                <span
                  className={`flex-grow mx-2 text-base font-medium ${
                    !isOpen && "hidden"
                  }`}
                >
                  Administrador
                </span>
                {isOpen && (
                  <img
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      openConfigAccordion === "config" ? "rotate-180" : ""
                    }`}
                    src={arrowDown}
                    alt="Expand"
                  />
                )}
              </a>

              {isOpen && openConfigAccordion === "config" && (
                <div className="ml-6 mt-2 space-y-2">
                  <NavLink to="/Perfil">
                    <div className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        className="w-5 h-5 mr-4 dark:invert"
                        src={userProfile}
                        alt=""
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium">
                        Perfil
                      </p>
                    </div>
                  </NavLink>
                  <div></div>
                  <NavLink to="/Usuarios">
                    <div className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        className="w-5 h-5 mr-4 dark:invert"
                        src={userList}
                        alt=""
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium">
                        usuarios
                      </p>
                    </div>
                  </NavLink>
                  <div></div>
                  <NavLink to="/Registrar-usuarios">
                    <div className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
                      <img
                        className="w-5 h-5 mr-4 dark:invert"
                        src={userAdd}
                        alt=""
                      />
                      <p className="text-gray-900 dark:text-gray-300 font-medium">
                        Registrar usuarios
                      </p>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
