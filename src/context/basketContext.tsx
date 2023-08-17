import React, { createContext, useEffect, useState } from "react";
import { basketType } from "../types/basketTypes";

interface basketProviderTypes {
  basketDetails: [{key: string, value: basketType}] | [];
  setBasketDetails: any;
}

export const BasketContext = createContext<basketProviderTypes>({
  basketDetails: [],
  setBasketDetails: [],
});

export const BasketProvider = ({ children }: any) => {
  const [basketDetails, setBasketDetails] = useState<[{key: string, value: basketType}] | []>([]);

  useEffect(() => {
    console.log(basketDetails);
  }, [basketDetails]);

  return (
    <BasketContext.Provider value={{ basketDetails, setBasketDetails }}>
      {children}
    </BasketContext.Provider>
  );
};
