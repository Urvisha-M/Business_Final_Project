import Header from '../components/Header1';
import CookieConsent from '../components/cookieconsent';
import CoffeeAndSweets from '../components/CoffeeAndSweets';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
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
        <CookieConsent/>
        <Footer/>
       </div>
    </>
  );
}
