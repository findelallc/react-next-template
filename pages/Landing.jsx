import React from "react";
import Head from "next/head";
import SiteLayout from "../src/Layout/SiteLayout";
import {Link} from '../routes';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SiteLayout>
                <Head>
                    <title>Sale Quick Serve Platform</title>
                </Head>
                <Container fluid>
                    <Row>
                        <Col className="text-center">1 of 1</Col>
                    </Row>
                </Container>
            </SiteLayout>
        );
    }
}
