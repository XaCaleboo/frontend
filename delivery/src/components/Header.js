import React from 'react';
import Logo from './Logo';
import logo from './logowhite.png';
import Button from './Button';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import bg from './bg.jpg';

const Container = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
    font-family: 'Open Sans', sans-serif;
`;
const LeadHeader = styled.span`
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 96px;
    margin-left: 200px;
    font-family: 'Pacifico', cursive;
    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 60px;
    }
`;
const Prize = styled.p`
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;
    margin-top: 0px;
    font-family: 'Pacifico', cursive;
    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 100px;
    }
`;

const Header = () => {
    return (
        <Container>
            <Grid>
                <Row>
                    <Col lg={3} center="md">
                        <Logo img={logo} />
                    </Col>
                    <Col lgOffset={5} />
                    <Col lg={3} center="xs, sm, md">
                        <Button
                            style={{
                                marginTop: 63 + 'px',
                                marginLeft: 45 + 'px'
                            }}
                        >
                            Вход / Регистрация
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <LeadHeader>Меняйте баллы</LeadHeader>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Prize>на призы</Prize>
                    </Col>
                </Row>
                <Row center="xs" top="xs">
                    <Col xs={12}>
                        <Button>Подробнее</Button>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
};

export default Header;
