import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import BaseUrl from './BaseUrl';
import axios from 'axios';

const InsertTicket = () => {

    const [ticket, setTicket] = useState({});

    const [activity, setActivity] = useState({
        activityId: 1,
        activityName: "act-1",
        charges: 10,
        description: "testing-1"
    });
    const [customer, setCustomer] = useState({
        email: "user1@gmail.com",
        firstName: "user",
        lastName: "test",
        mobileNumber: "1234",
        password: "pass",
        userId: 2,
        username: "usertest"
    });

    

    const formHandler = (e) => {
        insertTicketDetails(ticket, activity, customer);
        e.preventDefault();
    };

    const insertTicketDetails = (data, activity1, customer1) => {
        axios.post(`${BaseUrl}/insertTicket`, data, activity1, customer1).then(
            (response) => {
                console.log(response);
                console.log("Success");
            },
            (error) => {
                console.log(error);
                console.log("Error");
            }
        )
    }

    return (
        <Container maxWidth='sm mt-5'>
            <form onSubmit={formHandler}>
                <TextField
                    label='Bill'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setTicket({...ticket, bill:e.target.value})
                    }}
                />
                <TextField
                    label=''
                    type='datetime-local'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setTicket({...ticket, dateTime:e.target.value})
                    }}
                />
                <TextField
                    label='Activity ID'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setActivity({...activity, activityId:e.target.value})
                    }}
                />
                <TextField
                    label='User Id'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setCustomer({...customer, userId:e.target.value})
                    }}
                />
                <Button type='submit' variant='primary' >SUBMIT</Button>
            </form>
        </Container>
    )
}

export default InsertTicket
