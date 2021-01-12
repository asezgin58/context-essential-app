import {FC} from 'react';
import {Header, Sidebar} from "./components";

/**
 * Page layout Description
 */
const Layout: FC<any> = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header
                logo={'/images/logo.svg'}
                title={'Context State Essential App'}
            />
            <Sidebar/>
            <div className="content p-3">
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Layout;