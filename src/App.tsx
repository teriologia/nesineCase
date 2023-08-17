import React, { useEffect, useState } from "react";
import "./App.css";
import betDataHelper from "./helpers/betDataHelper";
import { betDataType } from "./types";
import Loading from "./components/loading/loading";
import Table from "./components/table/tableRenderer";

function App() {
  const [betData, setBetData] = useState<[betDataType] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (betData.length > 0) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const data = await betDataHelper.getDataFromServer();
        setBetData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  });
  return (
    <>
      {loading ? <Loading /> : null}
      {betData && <Table data={betData} />}
    </>
  );
}

export default App;
