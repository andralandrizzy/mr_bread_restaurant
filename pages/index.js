import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured';
import CustomersFav from '../components/CustomersFav';
import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import Services from '../components/Services';
import Menu from '../components/Menu';
import BookReservation from '../components/BookReservation';
import Video from '../components/Video';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Mr Bread's Restaurant | Home</title>
        <meta name="description" content="phoenix restaurant" />
        <link rel="stylesheet" type="text/css" 
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" 
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <CustomersFav/>
      <About/>
      <StatsCounter/>
      <Services/>
      <Menu/>
      <BookReservation/>
      {/* <Video/> */}
    </div>
  )
}
