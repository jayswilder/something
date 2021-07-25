import React from 'react'
import styled from 'styled-components';
import { Paper } from '@material-ui/core';


function About() {
    return (
        <Container>
            <Paper elevation={15}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    zIndex: '99999'
                }}
            >
                About Page
            </Paper>
        </Container>
    )
}

export default About

const Container = styled.div`
    width: 1280px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 175px auto;
    z-index: 9999 !important;
`;