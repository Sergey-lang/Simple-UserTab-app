import {Button, Input, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {EmployeeItem} from './EmployeeItem';
import axios from 'axios';

export type Employee = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export const EmployeesPage: React.FC = () => {

    const [employees, setEmployees] = useState<Employee[]>([])
    const [name, setName] = useState<string>('')

    const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.currentTarget.value)
    }
    const removeEmployee = (id: number) => {
        const newUsers = employees && employees.filter(u => u.id !== id)
        setEmployees(newUsers)
    }

    const addEmployee = () => {
        const employee = {
            first_name: name? name: 'Name',
            last_name: 'Test',
            id: 5,
            email: 'testMail',
            avatar: 'avatar'
        };

        const newUsers = [employee, ...employees]
        setEmployees(newUsers)
        setName('')
    }

    const mappedEmployees = employees && employees.map((user, i) =>
        <EmployeeItem key={i}
                      user={user}
                      callback={removeEmployee}/>
    )

    useEffect(() => {
        axios.get('https://reqres.in/api/users?per_page=12')
            .then(res => setEmployees(res.data.data))
    }, [])

    return (
        <>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Employees page
            </Typography>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '50%',
                margin: '0 auto'
            }}>
                <Input onChange={inputHandler} value={name} placeholder='enter employee name'/>
                <Button variant="contained"
                        style={{margin:'10px 0'}}
                        color="primary"
                        onClick={() => {
                            addEmployee()
                        }}>Add Employee</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        mappedEmployees
                    }
                </TableBody>
            </Table>
        </>
    )
}