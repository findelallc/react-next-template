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
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap"/>
                    <link rel="stylesheet" href="/assets/styles/utility.css"/>
                    <link rel="stylesheet" href="/assets/styles/theme.css"/>
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
