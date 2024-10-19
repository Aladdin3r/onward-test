import '../styles/globals.css';
import { dm_sans, jakarta } from './layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --dm-sans: ${dm_sans.style.fontFamily};
                    --prompt: ${jakarta.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
