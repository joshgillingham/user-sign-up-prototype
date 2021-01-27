import * as React from "react";
import RootStore from "@app/stores/RootStore";

export interface IStoresContext {
  stores: RootStore;
}

export const storesContext = React.createContext({
  stores: new RootStore(),
});
