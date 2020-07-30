import Document, { Head, Main, NextScript } from 'next/document'
import React from "react";

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <html lang='en' dir='ltr'>
                <Head>
                    <link rel='apple-touch-icon' sizes='180x180' href='/assets/images/icons/logo-icon.png'/>
                    <link rel='icon' type='image/png' sizes='32x32' href='/assets/images/icons/logo-icon.png'/>
                    <link rel='icon' type='image/png' sizes='16x16' href='/assets/images/icons/logo-icon.png'/>
                    <link rel='manifest' href='/manifest.json'/>
                    <link rel='mask-icon' href='/assets/images/icons/logo-icon.png' color='#5bbad5'/>
                    <link rel='shortcut icon' href='/assets/images/icons/logo-icon.png'/>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'/>
                    <link rel="stylesheet" href="/assets/styles/style.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
