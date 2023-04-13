import '@/styles/globals.css'
// import $ from 'jquery';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Router, { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return (
      <div className="page-wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer year={new Date().getFullYear()} />
      </div>
  )
}

