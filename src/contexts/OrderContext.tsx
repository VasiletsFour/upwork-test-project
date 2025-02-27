import React from "react";
import OrderDefinition, {OrderTypes} from "../types/order";

interface IOrderContext {
    orderBy: OrderDefinition;
    toggleOrder: (newOrder: string) => void;
}

const defaultState = {
    orderBy: OrderTypes.Random,
    toggleOrder: () => {
    }
};

const OrderContext = React.createContext<IOrderContext>(defaultState);

export default OrderContext;
