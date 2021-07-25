import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';

function Navbar() {
    return (
        <Paper elevation={20} style={{
            width: '1280px',
            height: '65px',
            margin: '0 auto',
            backgroundColor: 'var(--primary)',
            zIndex: '999999999999',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginTop: '20px',
        }}>

            <NavLayout>
                <Typography variant='h5' component={Link}>Full Stack Developer</Typography>
                <NavLinks>
                    <Button component={Link} to='/' >Home</Button>
                    <Button component={Link} to='/about' >About</Button>
                    <Button component={Link} to='/projects' >Projects</Button>
                    <Button component={Link} to='/contact' >Contact</Button>
                </NavLinks>
            </NavLayout>
        </Paper>
    )
}

export default Navbar

const NavLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 25px;

    a {
        text-decoration: none;
        color: var(--textPrimary);
    }
`;

const NavLinks = styled.div``;