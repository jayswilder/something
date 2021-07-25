import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_zdn5fcn',
            'template_88fl779',
            e.target,
            'user_Oe6I1GernflHvkz3V5dsw'
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))

        setName('')
        setEmail('')
        setMessage('')

    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', delay: 0.25 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div
            style={{ zIndex: '999999', maxWidth: '1280px', margin: '175px auto 0 auto' }}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Container>
                <Paper elevation={15}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        zIndex: '99999',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        padding: '25px',
                    }}
                >

                    <Typography variant='h3' style={{ color: 'var(--primary)' }}>
                        Contact Me
                    </Typography>
                    <form onSubmit={sendEmail}>
                        <TextField required variant='outlined' type='text' name='name' label='Name' value={name} fullWidth onChange={nameChange} />
                        <TextField required variant='outlined' type='email' name='email' label='Email' value={email} fullWidth onChange={emailChange} />
                        <TextField required variant='outlined' name='message' label='Message' onChange={messageChange} value={message} placeholder='Please include any relevant details with your request.' fullWidth multiline
                            rows={15} />
                        <Button variant='contained'
                            type='submit'
                            style={{
                                backgroundColor: 'var(--primary', color: '#ffffff'
                            }}
                            size='large'
                            fullWidth
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Container>
        </motion.div>
    )
}

export default Contact

const Container = styled.div`
    width: 1280px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 175px auto;
    z-index: 9999 !important;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;

    }
`;