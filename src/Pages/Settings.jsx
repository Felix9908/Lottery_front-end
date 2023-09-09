import React, { useState } from "react";
import Createoffer from "../Components/Createoffer";

const Settings = () => {
  const [showSettings, setShowSettings] = useState(""); // Corrige el nombre de la función para setShowSettings

  const renderSettingsContent = () => {
    if (showSettings === "Add_product") {
      // Asegúrate de que las cadenas coincidan con los botones
      return <Createoffer />;
    } else if (showSettings === "UsersList") {
      return <UsersList />;
    } else if (showSettings === "CreateUser") {
      return <CreateUser />;
    } else if (showSettings === "ContactUsList") {
      return <ContactUsList />;
    } else {
      return null;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <a className="text-white text-2xl font-semibold" href="#">
            Configuración
          </a>
          <div className="flex items-center space-x-4 mt-4">
            <button
              className="text-white border p-[5px] hover:text-gray-300"
              onClick={() => setShowSettings("Usuarios")} // Utiliza una función de flecha para evitar bucles infinitos
            >
              Usuarios
            </button>
            <button
              className="text-white border p-[5px] hover:text-gray-300"
              onClick={() => setShowSettings("Boletos_pendientes")} // Utiliza una función de flecha para evitar bucles infinitos
            >
              Boletos Pendientes
            </button>
            <button
              className="text-white border p-[5px] hover:text-gray-300"
              onClick={() => setShowSettings("Add_product")} // Utiliza una función de flecha para evitar bucles infinitos
            >
              Add product
            </button>
            <button
              className="text-white border p-[5px] hover:text-gray-300"
              onClick={() => setShowSettings("Create_user")} // Utiliza una función de flecha para evitar bucles infinitos
            >
              Create User
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido de la configuración */}
      <div className="container mx-auto mt-8">{renderSettingsContent()}</div>
    </div>
  );
};

export default Settings;
