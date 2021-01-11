import {createContext} from "react";
import {initialStoreData, IStore} from "../type";

const StoreContext: any = createContext<IStore>(initialStoreData);
export default StoreContext;