import StoreContext from './Context';
import StoreProvider from './Provider';
import {initialStoreData} from "./type";

export {
    StoreContext,
    StoreProvider
};

export type IStore = typeof initialStoreData;

export type IStoreContext = {
    store: IStore;
    setStore: (data: any) => void
};

