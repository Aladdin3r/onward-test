import '../styles/globals.css';
import { dm_sans, jakarta } from './layout';
import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --dm-sans: ${dm_sans.style.fontFamily};
                    --prompt: ${jakarta.style.fontFamily};
                }
            `}</style>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
