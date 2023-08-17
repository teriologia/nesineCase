import * as React from "react";
import { betDataType, selectedItem } from "../../types";
import "./tablestyles.css";
import { BasketContext } from "../../context/basketContext";
import BasketController from "../../helpers/basketHelper";
import { basketType } from "../../types/basketTypes";

interface CellsProps {
  index: number;
  data: [betDataType] | [];
}

const renderRows = (
  indexData: betDataType,
  selected: { code: string; type: string } | null,
  onclick: (type: string, value: number) => void
) => {
  return (
    <>
      <div className="titleContainer">
        <div className="title">{`${indexData.D} ${indexData.DAY} ${indexData.LN}`}</div>
        <div className="innerTitle">{`${indexData.C} ${indexData.T} ${indexData.N}`}</div>
      </div>
      <div className="midCellsContainer">
        <div className="title">{`Yorumlar`}</div>
        <div className="valueBox">{`Yorumlar`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title no-border">{``}</div>
        <div className="valueBox ">{`${indexData.OCG["1"].MBS}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1`}</div>
        <div
          onClick={() => onclick("1", Number(indexData.OCG["1"].OC["0"].O))}
          className={`valueBox clickable ${selected?.type == "1" && "active"}`}
        >{`${indexData.OCG["1"].OC["0"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`x`}</div>
        <div
          onClick={() => onclick("x", Number(indexData.OCG["1"].OC["1"].O))}
          className={`valueBox clickable ${selected?.type == "x" && "active"}`}
        >{`${indexData.OCG["1"].OC["1"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`2`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer ">
        <div className="title">{`Alt`}</div>
        <div
          onClick={() => onclick("alt", Number(indexData.OCG["5"].OC["26"].O))}
          className={`valueBox clickable ${
            selected?.type == "alt" && "active"
          }`}
        >{`${indexData.OCG["5"].OC["26"].O}`}</div>
      </div>
      <div className="smallCellsContainer ">
        <div className="title">{`Üst`}</div>
        <div
          onClick={() => onclick("ust", Number(indexData.OCG["5"].OC["25"].O))}
          className={`valueBox clickable ${
            selected?.type == "ust" && "active"
          }`}
        >{`${indexData.OCG["5"].OC["25"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`H1`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`1`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`x`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`2`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`H2`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer ">
        <div className="title">{`1-x`}</div>
        <div
          onClick={() => onclick("1x", Number(indexData.OCG["2"].OC["3"].O))}
          className={`valueBox clickable ${selected?.type == "1x" && "active"}`}
        >{`${indexData.OCG["2"].OC["3"].O}`}</div>
      </div>
      <div className="smallCellsContainer ">
        <div className="title">{`1-2`}</div>
        <div
          onClick={() => onclick("1-2", Number(indexData.OCG["2"].OC["4"].O))}
          className={`valueBox clickable ${
            selected?.type == "1-2" && "active"
          }`}
        >{`${indexData.OCG["2"].OC["4"].O}`}</div>
      </div>
      <div className="smallCellsContainer ">
        <div className="title">{`X-2`}</div>
        <div
          onClick={() => onclick("x2", Number(indexData.OCG["2"].OC["5"].O))}
          className={`valueBox clickable ${selected?.type == "x2" && "active"}`}
        >{`${indexData.OCG["2"].OC["5"].O}`}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Var`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`Yok`}</div>
        <div className="valueBox ">{``}</div>
      </div>
      <div className="smallCellsContainer">
        <div className="title">{`+99`}</div>
        <div
          onClick={() => onclick("99", 3)}
          className={`valueBox clickable ${selected?.type == "99" && "active"}`}
        >{`3`}</div>
      </div>
    </>
  );
};

const Cells = (props: CellsProps) => {
  const { index, data } = props;
  const indexData = data[index];
  const [selected, setSelected] = React.useState<{
    code: string;
    type: string;
  } | null>(null);
  const { basketDetails, setBasketDetails } = React.useContext(BasketContext);

  React.useEffect(() => {
    const isExist = BasketController.basket.get(data[index].C);
    if (isExist) {
      setSelected({ code: isExist.code, type: isExist.selected });
    }
  }, []);

  const basketFunc = (type: string, value: number) => {
    const toUpdatedate: basketType = {
      comments: data[index].OCG['1'].MBS,
      code: data[index].C,
      event: data[index].N,
      rate: value,
      selected: type,
    };
    const updatedBasket = BasketController.updateBasket(
      data[index].C,
      toUpdatedate
    );
    const isExist = updatedBasket.get(data[index].C);
    if (isExist) {
      setSelected({ code: isExist.code, type: isExist.selected });
    } else {
      setSelected(null);
    }
    const array = Array.from(updatedBasket, ([key, value]) => ({ key, value }))
    setBasketDetails(array);
  };

  return (
    <div className="contentContainer">
      {renderRows(indexData, selected, basketFunc)}
    </div>
  );
};

export default Cells;
