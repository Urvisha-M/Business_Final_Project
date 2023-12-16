import { Box} from '@chakra-ui/react';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import Head from "next/head"
import JoinTable from '../components/JoinTable';


export default function account(){
    return(
      <>
        <Head>
          < meta name="description" content="Welcome to our community!"/> 
          <title>Join Epic Café</title>
        </Head>   
        
        <div>
          <Header/>
          <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={20}/>
          <JoinTable/>
          <Box borderTop="2px solid" my={10} borderColor="#C7C0C0" w={1065} mx="auto" mt={0} mb={0}/>
          <Footer/>
         </div>
      </>
    );
  }