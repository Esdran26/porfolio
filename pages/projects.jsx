import Head from 'next/head';
import Footer from '../components/footer/footer';
import MobileNavbar from '../components/mobile-navbar/mobile-navbar';
import Navbar from '../components/navbar/navbar';
import ProjectsInfo from '../components/projects/projects-info';

const Projects = () => {
  return(
    <>
      <Head>
        <title>Andres Vargas | Projects</title>
        <meta http-equiv="Content-Type" content="text/html; ISO-8859-1" />
        <meta name="DC.Language" scheme="RFC1766" content="English" />
        <meta name="AUTHOR" content="Andres Felipe Vargas Gomez" />
        <link style={{ borderRadius: '50%' }} rel="shortcut icon" href="https://res.cloudinary.com/esdran26/image/upload/v1614266954/logo_qwetej.ico" type="image/x-icon"/>
        <meta name="REPLY-TO" content="vargasandres2627@gmail.com" />
        <link rev="made" href="mailto:vargasandres2627@gmail.com" />
        <meta name="DESCRIPTION" content="This is my personal website, when I show my projects, timeline, who am I and more." />
        <meta name="KEYWORDS" content="Portfolio,Website,Personal,FrontEnd Developer,Web Developer" />
        <meta name="Resource-type" content="Document" />
        <meta name="DateCreated" content="Thu, 25 February 2021 11:30:00 GMT+5" />
        <meta name="Revisit-after" content="3 days" />
        <meta name="robots" content="ALL" />
      </Head>

      <MobileNavbar section="Projects" />
      <Navbar />

      <ProjectsInfo />

      <Footer />
    </>
  );
}

export default Projects;