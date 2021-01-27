import * as React from "react";
import { storesContext, IStoresContext } from "@app/contexts";

export const useStores = (): IStoresContext => React.useContext<IStoresContext>(storesContext);
