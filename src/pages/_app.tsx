import '@/styles/globals.css';
import { PrivyProvider } from '@privy-io/react-auth';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PrivyProvider
            appId="clvr2m6en06r9cs7z1ck8took"
            config={{
                // Customize Privy's appearance in your app
                appearance: {
                    theme: 'dark',
                    accentColor: '#676FFF',
                    logo: 'https://bitbadges.io/images/bitbadgeslogotext.png',
                },
                // Create embedded wallets for users who don't have a wallet
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                },
            }}
        >
            <Component {...pageProps} />
        </PrivyProvider>
    );
}
