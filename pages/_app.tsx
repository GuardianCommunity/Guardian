import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import Nav from '../components/layouts/nav/nav.component';

function MyApp({Component, pageProps}: AppProps)
{
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
