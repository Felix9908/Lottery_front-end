import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [offerData, setOfferData] = useState("")

  useEffect(() => {
    const loadData = async () => {
      try {
        await axios.get("http://localhost:4000/getOffers").then((res) => {
          setOfferData(res.data)
        });
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  const addOffer = async ({ formData }) => {
    try {
      await axios
        .post("http://localhost:4000/addOffer", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        addOffer,
        offerData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
