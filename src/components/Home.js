import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Paper } from '@material-ui/core';
import photo from './picture.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { motion } from 'framer-motion';

function Home() {

    const downloadCSV = (e) => {
        e.preventDefault();
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
        <motion.div style={{ maxWidth: '1280px', margin: '175px auto 0 auto' }}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Container>
                <Paper elevation={15}
                    style={{
                        width: '1280px',
                        height: '700px',
                        backgroundColor: 'white',
                        zIndex: '99999',
                        padding: '0 25px 0 25px',
                        display: 'flex',
                        alignItems: 'center'

                    }}
                >
                    <Layout>
                        <Content>
                            <Typography color='inherit' variant='h3'>Hey there,</Typography>
                            <Typography color='inherit' variant='h2'>I'm Jay Wilder</Typography>
                            <Typography color='inherit' variant='h4'>I specialize in creating beautifully crafted, minimalistic, & interactive experiences using <strong>React, Styled Components, Material-UI, Adobe XD,</strong> and much more.</Typography>

                            <SocialMedia>
                                <Button size='large' variant='contained' id='csv-button' onClick={downloadCSV} >
                                    Download CSV
                                </Button>

                                <a href="https://github.com/jayswilder?tab=repositories" target='_blank' rel="noreferrer">
                                    <GitHubIcon id='github-icon' />
                                </a>
                                <a href="https://www.linkedin.com/in/jay-wilder-80a1b41a6/" target='_blank' rel="noreferrer">
                                    <LinkedInIcon id='github-icon' />
                                </a>
                                <a href="https://www.youtube.com/channel/UCPXU7yKRocvAen1--rftawA" target='_blank' rel="noreferrer">
                                    <YouTubeIcon id='github-icon' />
                                </a>
                            </SocialMedia>
                        </Content>
                        <img src={photo} alt='iMac computer' />
                    </Layout>
                </Paper>
            </Container>
        </motion.div>
    )
}

export default Home;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 37px auto;
    color: var(--primary);

    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-family: 'Montserrat';
    }

    h4 {
        color: var(--dark);
        text-align: left;
        margin-top: 30px;
        strong {
            color: var(--textSecondary);
        }
    }

    h5 {
        text-shadow: 1px 0.5px black;
    }
`;

const Layout = styled.div`
    display: flex;

    img {
        width: 48%;
        z-index: 999;
    }
`;

const Content = styled.div`
    z-index: 1;
    width: 50%;
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
`;