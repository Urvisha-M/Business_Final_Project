import Header from '../components/Header1';
import Hero from '../components/Hero';
import CoffeeAndSweets from '../components/CoffeeAndSweets';
import { Box } from '@chakra-ui/react'
import Loyalty from '../components/Loyalty';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Head from "next/head"
import Script from "next/script"


export default function home(){
  return(
    <>
      <Head>
        <meta name="description" content="Come sip our best-selling coffee and make your day epic. Enjoy a cup of our signature brew and take the most of the buy one, get one 50% off deal on any of your favorite sweet."/> 
        <title>Epic Café</title>
      </Head>

      <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-RE2446VCYH" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-RE2446VCYH');
            `}
          </Script>
        </div>
       
       <div>
        <Header/>
        <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={0}/>
        <Hero/>
        <CoffeeAndSweets/>
        <Loyalty/>
        <Test/>
        <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={0}/>
        <Footer/>
       </div>

    </>
  );
}
