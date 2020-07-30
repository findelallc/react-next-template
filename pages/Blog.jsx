import React from "react";
import Head from "next/head";
import SiteLayout from "../src/Layout/SiteLayout";
import {Link} from "../routes";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SiteLayout>
                <Head>
                    <title> Next.js - Blog</title>
                </Head>

                <h1>Welcome to Next.js blog, a react blog framework for nerds.</h1>
                <Link route={"/"}>Back to Home</Link>
                <style jsx>{`

                `}</style>
            </SiteLayout>
        );
    }
}
