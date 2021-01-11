import {useState} from 'react';
import StoreContext from '../Context';
import {IStore, initialStoreData} from "../type";

const StoreProvider = (props: any) => {
    const [store, setStore] = useState<IStore>(initialStoreData);

    const handleSetStore = (data: any) => {
        setStore((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    return (
        <>
            <StoreContext.Provider
                value={{
                    store,
                    setStore: (data: any) => handleSetStore(data),
                }}
            >
                {props.children}
            </StoreContext.Provider>
        </>
    );
};

export default StoreProvider;
