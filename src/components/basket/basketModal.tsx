import * as React from "react";
import "./basketstyles.css";
import { BasketContext } from "../../context/basketContext";

const BasketModal = () => {
  const [total, setTotal] = React.useState(0);
  const { basketDetails } = React.useContext(BasketContext);
  React.useEffect(() => {
    if(basketDetails.length == 0){
      return
    }
    setTotal(0);
    const tempBasket = basketDetails;
    //@ts-ignore
    const tempTotal: any = tempBasket.reduce<string[]>((acc:any, obj:any) => acc * obj.value.rate, 1);
    setTotal(tempTotal)
  }, [basketDetails]);
  return (
    <div className="basketContainer">
      {basketDetails &&
        basketDetails.map((element) => (
          <span className="item">
            {`${element.value.comments} kod: ${element.key} Maç: ${element.value.event} `}
            <span className="bold">{`Oran ${element.value.rate}`}</span>
          </span>
        ))}
      <span>{`Toplam Tutar: ${total.toFixed(2)} TL`}</span>
    </div>
  );
};

export default BasketModal;
