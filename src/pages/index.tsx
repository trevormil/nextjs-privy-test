import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const router = useRouter();
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1 className="text-xl">Current Location: Home page</h1>
            <button onClick={() => router.push('/page2')}>Go to Page 2</button>
        </main>
    );
}
