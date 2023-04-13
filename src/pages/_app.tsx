import '@/styles/globals.css'
// import $ from 'jquery';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Component {...pageProps} />
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

