import React, { useState, useContext } from "react";
import axios from "axios";
import DataContext from "../Context/DataContext";

const CreateOffer = () => {
  const { addOffer } = useContext(DataContext);
  const [offerName, setOffername] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "offerName":
        setOffername(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "image":
        setImage(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        offerName,
      description,
      image,
    };

    try {
      addOffer({ formData });
      setOffername("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[450px] flex-col">
      <h3 className="text-white text-5xl mb-10">Add product to page</h3>
      <form
        className="flex flex-col w-[300px]"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="offerName"
          placeholder="Offer Name"
          className="m-[5px]"
          value={offerName}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="m-[5px]"
          value={description}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          className="m-[5px]"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save product
        </button>
      </form>
    </div>
  );
};

export default CreateOffer;
