import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
}

export default Main;
