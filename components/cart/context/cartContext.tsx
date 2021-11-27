import {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useMemo,
  useState,
} from "react";
import { cartReducer } from "./reducers/cartReducer";
import type { Action, State } from "./types";

type Dispatch = (action: Action) => void;
type CartProviderProps = { readonly children: React.ReactNode };

export const CartStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State = { products: [], totalPrice: 0, isOpen: false };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
};
