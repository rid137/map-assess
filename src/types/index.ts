export interface IQuoteItem {
    itemName: {
        name: string,
        color: string,
    };
    variant: "Blue" | "Nil";
    quantity: string;
    price: number;
    amount: number;
    expectedDeliveryDate: string;
  }