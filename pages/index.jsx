import styles from '../styles/Home.module.scss';
import Head from 'next/head';

import Navbar from '../components/navbar/navbar'
import HomeInfo from '../components/home/home-info';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Andres Vargas | Portfolio</title>
        <meta http-equiv="Content-Type" content="text/html; ISO-8859-1" />
        <meta name="DC.Language" scheme="RFC1766" content="English" />
        <meta name="AUTHOR" content="Andres Felipe Vargas Gomez" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/esdran26/image/upload/v1614266954/logo_qwetej.ico" type="image/x-icon"/>
        <meta name="REPLY-TO" content="vargasandres2627@gmail.com" />
        <link rev="made" href="mailto:vargasandres2627@gmail.com" />
        <meta property="og:image" content="https://res.cloudinary.com/esdran26/image/upload/v1614268406/Mockup-Portfolio_q00ya8.png"></meta>
        <meta name="DESCRIPTION" content="This is my personal website, when I show my projects, timeline, who am I and more." />
        <meta name="KEYWORDS" content="Portfolio,Website,Personal,FrontEnd Developer,Web Developer" />
        <meta name="Resource-type" content="Document" />
        <meta name="DateCreated" content="Thu, 25 February 2021 11:30:00 GMT+5" />
        <meta name="Revisit-after" content="3 days" />
        <meta name="robots" content="ALL" />
      </Head>

      <div className={ styles.background }>
        <MobileNavbar section="Home" />

        <Navbar
          transparent="on"
        />

        <HomeInfo />
      </div>
    </div>
  );
}
