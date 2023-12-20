import '../styles/global.css'

export default function EpicCafe({ Component, pageProps }) {
  return(

   <Component {...pageProps} />  
   )
}


import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Head } from 'next/document';

// export default function EpicCafe({ Component, pageProps }) {
//   return (
//     <ChakraProvider>
//       <CSSReset />
//       <Head>
      
//         <html lang="en" /> 
//       </Head>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }