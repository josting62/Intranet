import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import user from "/assets/user.svg";

// Componente del botón con la imagen de perfil
interface UserMenuButtonProps {
  onClick: () => void;
}

const UserMenuButton: React.FC<UserMenuButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center bg-gray-200 border-0 py-2 px-2 rounded-full focus:outline-none hover:bg-gray-700 hover:text-gray-200 text-base group hover:-translate-y-2 transform transition-all duration-150"
  >
    <img src={user} alt="User" className="w-8 h-8 group-hover:invert " />
  </button>
);

// Componente del menú desplegable
const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Referencia al menú para manejar clics externos

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Usa el componente del botón */}
      <UserMenuButton onClick={toggleMenu} />

      {/* Menú desplegable */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10"
        >
          <NavLink
            to="/Perfil"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Perfil
          </NavLink>
          <NavLink
            to="/Configuracion"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Configuración
          </NavLink>
          <div
            onClick={() => {
              // Aquí puedes manejar el logout o cualquier otra acción
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
          >
            Cerrar sesión
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
