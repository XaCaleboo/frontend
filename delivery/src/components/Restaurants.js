import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StoreCard from './StoreCard';
import H1 from './H1';
import Button from './Button';

class Restaurants extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <H1>Рестораны</H1>
                    </Col>
                </Row>
                <Row around="xs">
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                </Row>
                <Row around="xs">
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                    <Col lg={3} md={6} sm={3}>
                        <StoreCard
                            name="Il Patio"
                            img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                            minPrice="900"
                            deliveryTime="90"
                        />
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xs={2}>
                        <Button>Все рестораны</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Restaurants;
