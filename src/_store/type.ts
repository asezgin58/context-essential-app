import {IUser} from "../pages/User/type";
import {IAuthor} from "../pages/Author/type";

export interface IStore {
    author: IAuthor;
    users: IUser[];
}

export type IStoreValue = {
    store: IStore;
    setStore: (data: any) => void
}

export const initialStoreData: IStore = {
    author: {
        name: 'Aykut',
        surname: 'Sezgin',
        age: 26,
        job: 'Front-End Developer'
    },
    users: []
};