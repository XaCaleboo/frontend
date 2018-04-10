import React from 'react';
import style from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pizza from './pizza.jpg';
import H1 from './H1';

const Text = style.p`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`;
const Image = style.img`
    width: 100%;
`;

const About = () => {
    return (
        <Grid>
            <Row>
                <Col lg={6} md={12}>
                    <H1>Что мы делаем?</H1>
                    <Text>
                        Delivery Club - это независимый клубный проект,
                        объединивший сотни служб доставки еды и продуктов в
                        Единую Систему Заказов.
                    </Text>
                    <Text>
                        Цель проекта - обеспечить своим пользователям наилучшие
                        условия для быстрого, удобного и выгодного осуществления
                        заказов. Услуги сайта абсолютно бесплатны, а условия
                        доставки очень простые
                    </Text>
                </Col>
                <Col lg={6}>
                    <Image src={pizza} />
                </Col>
            </Row>
        </Grid>
    );
};

export default About;
