import React, { useState } from "react";

const Perfil = () => {
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "123-456-7890",
    role: "Admin",
    photo: "https://via.placeholder.com/150", // Imagen temporal
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Datos actualizados con éxito");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col max-w-4xl w-full md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Cuadro con los datos de perfil */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-full md:w-1/2">
          <div className="flex items-center justify-center space-x-6">
            <img
              src={profile.photo}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {profile.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Email: {profile.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Teléfono: {profile.phone}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Rol: {profile.role}
              </p>
            </div>
          </div>
        </div>

        {/* Cuadro con el formulario para editar los datos */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-white">
            Editar Perfil
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Rol
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
