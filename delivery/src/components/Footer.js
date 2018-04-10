import React from 'react';
import style from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import vk from './vk.png';
import ig from './ig.png';

const Container = style.div`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;
    }
    @media (max-width: 768px) {
        marggin-top: 30px;
    }
    font-family: "Open Sans", sans-serif;
`;

const Title = style.h4`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #999999;
    margin-top: 40px;
    @media (min-width: 768px) {
        text-align: left;
    }
`;
const Link = style.a`
    display: block;
    font-family: "Open Sans", Regular;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: underline;
    color: #cccccc;
    &:hover {
        color: #a3d200;
    }
    @media (min-width: 768px) {
        text-align: left;
    }
`;
const Social = style.img`
    margin-top: 40px;
    margin-left: 15px;
    
`;
const Copyright = style.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
    text-align: center;
    line-height: 24px;
    margin-top: 40px;
    @media (min-width: 768px) {
        text-align: right;
    }
`;
const Socials = style.div`
    text-align: center;
    @media (min-width: 768px) {
            text-align: right;
        }
`;

const Footer = () => {
    return (
        <Container>
            <Grid>
                <Row between="xs">
                    <Col md={6} xs={12} center="xs" start="md">
                        <Title>Компания</Title>
                        <Link>Для курьеров</Link>
                        <Link>Партнерство для ресторанов</Link>
                        <Link>Условия проведения акций</Link>
                        <Link>Контакты</Link>
                    </Col>
                    <Col md={6} xs={12}>
                        <Socials>
                            <a>
                                <Social src={ig} />
                            </a>
                            <a>
                                <Social src={vk} />
                            </a>
                        </Socials>
                        <Copyright>
                            &copy; 2009-2018 Delivery Club&trade;
                            <br />Все права защищены
                        </Copyright>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
};

export default Footer;
