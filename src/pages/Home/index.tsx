import {FC, useContext} from "react";
import {IStoreContext, StoreContext} from "../../_store";

/**
 * Component File Description
 */
const Home: FC<any> = () => {

    const {store: {author}}: IStoreContext = useContext<IStoreContext>(StoreContext);
    
    return (
        <>
            <h1>Welcome, {author.name} {author.surname}</h1>
        </>
    );
};

export default Home;