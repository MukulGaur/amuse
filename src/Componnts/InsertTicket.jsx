import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import BaseUrl from './BaseUrl';
import axios from 'axios';

const InsertTicket = () => {

    // const [ticket, setTicket] = useState({});

    const [bill, setBill] = useState();
    const [dateTime, setDateTime] = useState();
    const [activity, setActivity] = useState({});
    const [customer, setCustomer] = useState({});

    const data = {bill, dateTime, activity, customer};
    const formHandler = (e) => {
        
        // insertTicketDetails(ticket);
        insertTicketDetails(data);
        console.log(data);
        e.preventDefault();
    };

    const insertTicketDetails = (data) => {
        axios.post(`${BaseUrl}/insertTicket`, data).then(
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
                        setBill(e.target.value)
                    }}
                />
                <TextField
                    label=''
                    type='datetime-local'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setDateTime(e.target.value)
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
