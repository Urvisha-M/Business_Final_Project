import {Flex, Box, Text, InputGroup, InputRightElement, Image, Button, Heading, Stack, Input, Divider, AbsoluteCenter, FormLabel} from "@chakra-ui/react";

export default function AccountTable(){
    return (
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
            
            <Box display="flex" alignItems="center" justifyContent="center" >
                <Heading as='h3' fontFamily='Open Sans' fontSize='40' fontWeight={700} color="#540B81" mb={30} mt={10}>Join Us</Heading>
            </Box>

            <Flex alignItems="center" justifyContent="center"  flexDirection="column" h={687} w={1000} backgroundColor='#FFF3F3' borderColor="#837A7A" mx="auto" mb={20}>

                <Box  w={900} display="flex" flexDirection="column" alignItems="center" justifyContent="center">              
                    <Text fontSize="24" fontFamily='Open Sans, sans-serif' fontWeight={400} mr={30} mt={10} mb={20}> Welcome to our community! By joining our loyalty program, you are not just getting perks for yourself, but you are also helping us give back to the community. </Text>   
                </Box>

                <Box  display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" >              
                    <Heading as='h4' fontFamily='Open Sans' fontSize='30' fontWeight={600} color="#540B81" mb={10} mt={0}>Why Join?</Heading>
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} lineHeight="0"> 1. Exclusive perks and discounts </Text>  
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} lineHeight="0"> 2. Early access to promotions and events </Text> 
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} lineHeight="0"> 3. Special rewards for members </Text> 
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} lineHeight="0"> 4. Your participation helps us contribute to the community </Text>  
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} lineHeight="0"> 5. We believe in making a positive impact </Text> 
                </Box>

                <Box  display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">              
                    <Heading as='h4' fontFamily='Open Sans' fontSize='30' fontWeight={600} color="#540B81" mb={10} mt={20}>How to Join:</Heading>
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} mr={30}lineHeight="0"> 1. Enter your email below. </Text>  
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} mr={30} lineHeight="0"> 2. Click “Join Now” to become a part of our loyalty program. </Text> 
                </Box>

                <Box display="flex" alignItems="flex-start" justifyContent="center" mt={40}>
                    <Input type="email"  placeholder="Email Address"  fontSize={20}  w={351} h={56}  variant="outline"/>
                     <Button  h={60} w={133} fontSize={25} fontWeight={600} color={'white'} mr={8} bg='#A426F1' borderColor='#A426F1' focusBorderColor="transparent">Join Now</Button>
                     
                </Box>



            </Flex>

        </Flex>
        
                
        
    )
}