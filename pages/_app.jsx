// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='application-name' content='PWA App' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='PWA App' />
                <meta name='description' content='Best PWA App in the world' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://yourdomain.com' />
                <meta name='twitter:title' content='PWA App' />
                <meta name='twitter:description' content='Best PWA App in the world' />
                <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
                <meta name='twitter:creator' content='@DavidWShadow' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='PWA App' />
                <meta property='og:description' content='Best PWA App in the world' />
                <meta property='og:site_name' content='PWA App' />
                <meta property='og:url' content='https://yourdomain.com' />
                <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
