import Header from '../components/Header1';
import Hero from '../components/Hero';
import CoffeeAndSweets from '../components/CoffeeAndSweets';
import { Box } from '@chakra-ui/react'
import Loyalty from '../components/Loyalty';
import Test from '../components/Test';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/cookiebanner';
import Head from "next/head";


export default function home(){
  return(
    <>
      <Head>
        <meta name="description" content="Come sip our best-selling coffee and make your day epic. Enjoy a cup of our signature brew and take the most of the buy one, get one 50% off deal on any of your favorite sweet."/> 
        <title>Epic Café</title>
      </Head>

      <GoogleAnalytics GA_MEASUREMENT_ID='G-RE2446VCYH' />
       
       <div>
        <Header/>
        <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={0}/>
        <Hero/>
        <CoffeeAndSweets/>
        <Loyalty/>
        <Test/>
        <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={0}/>
        <Footer/>
        <CookieBanner/>
       </div>
    </>
  );
}
