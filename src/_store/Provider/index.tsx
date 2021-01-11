import {useState} from 'react';
import StoreContext from '../Context';
import {IStore, initialStoreData, IStoreValue} from "../type";

const StoreProvider = (props: any) => {
    const [store, setStore] = useState<IStore>(initialStoreData);

    const handleSetStore = (data: any) => {
        setStore((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    const storeValue: IStoreValue = {
        store,
        setStore: (data: any) => handleSetStore(data)
    };

    return (
        <>
            <StoreContext.Provider value={storeValue}>
                {props.children}
            </StoreContext.Provider>
        </>
    );
};

export default StoreProvider;
