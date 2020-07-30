import React from "react";
import Head from "next/head";
import SiteLayout from "../src/Layout/SiteLayout";
import {Link} from '../routes';

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
                    <title> Next.js - when work starts</title>
                </Head>

                <h1 className="text-danger">Welcome to Next.js, a react framework for nerds.</h1>
                <Link route={"/blog"}> Blog</Link>
                <style jsx>{`

                `}</style>
            </SiteLayout>
        );
    }
}
