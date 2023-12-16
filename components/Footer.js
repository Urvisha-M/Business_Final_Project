import {Flex, Box, Text} from"@chakra-ui/react";
import { BsFillHouseHeartFill} from "react-icons/bs";
import { FaSearchLocation, FaCoffee, FaTwitterSquare, FaInstagramSquare, FaPhoneAlt} from "react-icons/fa";
import { MdPrivacyTip, MdFacebook, MdEmail} from "react-icons/md";
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";

export default function Footer(){
    return (
        <Flex alignItems="center" justifyContent="center" h={420} w={1065} mx="auto" mt={60}>
      
        <Box h={420} w={525} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" ml={100} lineHeight={0.2}>
            <Text fontSize="18" fontWeight="600" fontFamily='Outfit, sans-serif' >Epic Café</Text>  
          
                <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                    <BsFillHouseHeartFill color="#541189" />
                    <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}  color="black">Home</Text> 
                </Box>
         

          

            <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <FaSearchLocation color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Testimonials</Text>  
            </Box> 

            
                <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                    <FaCoffee color="#541189" />
                    <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10} color="black">Loyalty Program</Text>  
                </Box> 
          
        </Box>


        <Box h={420} w={525} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" lineHeight={0.2} >
            <Text fontSize="18" fontWeight="600" fontFamily='Outfit, sans-serif' >Privacy Policy</Text>  
           
            <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <MdPrivacyTip color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Privacy Policy</Text>  
            </Box>  

             <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <TbAlignBoxLeftMiddleFilled color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Terms of Use</Text>  
            </Box> 
        </Box>

        <Box h={420} w={525} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" lineHeight={0.2}>
            <Text fontSize="18" fontWeight="600" fontFamily='Outfit, sans-serif' >Follow Us</Text>  
           
            <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <MdFacebook color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Facebook</Text>  
            </Box>  

             <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <FaInstagramSquare color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Instagram</Text>  
            </Box> 

            <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <FaTwitterSquare color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Twitter</Text>  
            </Box> 
        </Box>

        <Box h={420} w={525} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" lineHeight={0.2}>
            <Text fontSize="18" fontWeight="600" fontFamily='Outfit, sans-serif' >Contact</Text>  
           
            <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <FaPhoneAlt color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Phone</Text>  
            </Box>  

             <Box display="flex" flexDirection="row"alignItems="center" justifyContent="flex-start" >
                <MdEmail color="#541189" />
                <Text fontSize="16" fontWeight="400" fontFamily='Roboto, sans-serif' ml={10}>Email</Text>  
            </Box> 
        </Box>

       
    </Flex>
    )
}