import {Button, TableCell, TableRow} from '@material-ui/core';
import React from 'react';
import {Employee} from './EmployeesPage';

type UserItemPropsType = {
    user: Employee
    callback: (id: number) => void
}
export const EmployeeItem: React.FC<UserItemPropsType> = ({user, callback}) => {

    const deleteUser = () => {
        callback(user.id)
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">{user.first_name}</TableCell>
            <TableCell component="th" scope="row">{user.last_name}</TableCell>
            <TableCell component="th" scope="row">{user.email}</TableCell>
            <TableCell component="th" scope="row">{user.id}</TableCell>
            <Button color="secondary" variant="contained"
                    onClick={deleteUser}>Delete</Button>
        </TableRow>
    )
}