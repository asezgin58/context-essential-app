import {FC, useContext, useEffect} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {IUser} from "./type";
import {useHistory} from "react-router-dom";
import useAxios from "axios-hooks";
import {IStoreContext} from "../../_store";
import StoreContext from "../../_store/Context";

/**
 * Component File Description
 */
const List: FC<any> = () => {
    const {push} = useHistory();
    const {store: {users}, setStore}: IStoreContext = useContext<IStoreContext>(StoreContext);
    const [, usersRequest] = useAxios({
        url: 'https://reqres.in/api/users?per_page=12',
        method: 'get'
    }, {manual: true});

    const getUser = async () => {
        const {data, status} = await usersRequest();
        if (status === 200) setStore({users: data?.data});
    };

    useEffect(() => {
        if (!users.length) {
            getUser();
        }
        // eslint-disable-next-line
    }, []);

    const deleteUser = (userId: number) => {
        const filterList: IUser[] = [...users];
        filterList.splice(filterList.findIndex((item: IUser) => item.id === userId), 1);
        setStore({users: filterList});
    };

    return (
        <>
            <h1>User List</h1>
            <div className="row">
                <div className="col">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((row: IUser, index: number) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>{row.first_name}</TableCell>
                                        <TableCell>{row.last_name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => push(`/user/detail/${row.id}`)}
                                            >Detail</Button>
                                        </TableCell>
                                        <TableCell align="right" style={{width: 100}}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => deleteUser(row.id)}
                                            >Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default List;