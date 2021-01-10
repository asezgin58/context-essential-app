import {FC, useEffect, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {IUser} from "./type";
import {useHistory} from "react-router-dom";
import useAxios from "axios-hooks";

/**
 * Component File Description
 */
const List: FC<any> = () => {
    const {push} = useHistory();
    const [userList, setUserList] = useState<IUser[]>([]);
    const [, userListRequest] = useAxios({
        url: 'https://reqres.in/api/users?per_page=12',
        method: 'get'
    }, {manual: true});

    const getUser = async () => {
        const {data, status} = await userListRequest();
        if (status === 200) setUserList(data?.data);
    };

    useEffect(() => {
        if (!userList.length) {
            getUser();
        }
        // eslint-disable-next-line
    }, []);

    const deleteUser = (userId: number) => {
        const filterList: IUser[] = [...userList];
        filterList.splice(filterList.findIndex((item: IUser) => item.id === userId), 1);
        setUserList(filterList);
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
                                    <TableCell>Id</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userList.map((row: IUser, index: number) => (
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