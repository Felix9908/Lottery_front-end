import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";

function Main() {
  const { offerData } = useContext(DataContext);
  console.log(offerData)

  return (
    <main className="relative p-8">
      <div className="relative z-10">
        <h1 className="text-2xl font-semibold mb-4">Productos</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offerData.map((product) => (
            <div key={product.id} className="p-4 rounded-lg shadow-lg bg-white">
              <div className="h-40 overflow-hidden">
                <img
                  src={`http://localhost:4000/${product.imagePath.replace(/\\/g, "/")}`}
                  alt={product.nameImg}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
                <p className="text-gray-700">{product.description}</p>
                <Link
                  to="/boletLot"
                  className="bg-orange-500 text-white mt-4 px-4 py-2 rounded-full block text-center hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                >
                  Comprar Boleto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
