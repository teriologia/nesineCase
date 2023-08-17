import * as React from "react";
import { betDataType } from "../../types";
import "./tablestyles.css";

interface CellsProps {
  index: number;
  data: [betDataType] | [];
}

const renderRows = (indexData: betDataType) => {
  return (
    <>
      <div className="titleContainer">
        <div className="title">{`${indexData.D} ${indexData.DAY} ${indexData.LN}`}</div>
        <div className="innerTitle">{`${indexData.C} ${indexData.T} ${indexData.N}`}</div>
      </div>
      <div className="midCellsContainer">
        <div className="title">{`Yorumlar`}</div>
        <div>{`Yorumlar`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title no-border">{``}</div>
        <div>{`${indexData.OCG["1"].MBS}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1`}</div>
        <div>{`${indexData.OCG["1"].OC["0"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`x`}</div>
        <div>{`${indexData.OCG["1"].OC["1"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`2`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Alt`}</div>
        <div>{`${indexData.OCG["5"].OC["26"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Üst`}</div>
        <div>{`${indexData.OCG["5"].OC["25"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`H1`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`x`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`2`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`H2`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1-x`}</div>
        <div>{`${indexData.OCG["2"].OC["3"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1-2`}</div>
        <div>{`${indexData.OCG["2"].OC["4"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`X-2`}</div>
        <div>{`${indexData.OCG["2"].OC["5"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Var`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Yok`}</div>
        <div>{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`+99`}</div>
        <div>{`3`}</div>
      </div>
    </>
  );
};

const Cells = (props: CellsProps) => {
  const { index, data } = props;
  const indexData = data[index];
  return <div className="contentContainer">{renderRows(indexData)}</div>;
};

export default Cells;
