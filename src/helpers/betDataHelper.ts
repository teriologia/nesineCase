import { betDataType } from "../types";

class BetDataHelper {
  data: [betDataType] | [];
  constructor() {
    this.data = [];
  }

  getDataFromServer = async () => {
    if (this.data.length > 0){
        return this.data
    }
      const response = await fetch(
        "https://nesine-case-study.onrender.com/bets"
      );
    this.data = await response.json();
    return this.data;
  };
}

const betDataHelper = new BetDataHelper();

export default betDataHelper;
