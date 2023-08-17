import { basketType } from "../types/basketTypes";

class BasketHelper {
  basket: Map<string, basketType>;
  constructor() {
    this.basket = new Map();
  }

  updateBasket(index: string, value: basketType) {
    const isExist = this.basket.get(index);
    if (isExist && isExist.selected == value.selected) {
      this.basket.delete(index);
      return this.basket;
    } else {
      this.basket.set(index, value);
      return this.basket;
    }
  }
}

const BasketController = new BasketHelper();

export default BasketController;
