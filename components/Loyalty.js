import {Flex, Box, Text, Image, Button, Heading, Link } from "@chakra-ui/react";
import NextLink from 'next/link'


export default function Loyalty(){
    return (
        <Flex id="lo" alignItems="center" justifyContent="center" h={528} >
      
            <Box h={528} w={540} backgroundColor='#997DC6' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Image h="377" w={513} mt="20" borderRadius="10%" src="/images/loyalty-min.jpg" alt="Image"  />
                <Text fontSize="24"width={510} ml={0} mr={0} fontFamily='Outfit, sans-serif' textAlign="center" fontWeight={500}>Join now for our loyalty program —— for every new member, we donate $1 to charity. Join us in making a difference!.</Text>
            </Box>

            <Box  h={528} w={525} backgroundColor='#C4B7DF' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading as='h3' fontFamily='Open Sans' fontSize='40px' color="#540B81" mb={2} mt={0} ml={0} mr={0}>Loyalty Program</Heading>
                <Text fontSize="23"width={487} fontFamily='Outfit, sans-serif' textAlign="center" fontWeight={400} mb={0}> Join our loyalty program for sweet perks below!</Text>
                <Text fontSize="23"width={487} fontFamily='Outfit, sans-serif' fontWeight={400} textAlign="center" mb={0}> Buy one select sweet, get one free. Satisfy your craving with every visit!</Text>
                <Text fontSize="23"width={487} ml={0} mr={0} mb={0} fontFamily='Outfit, sans-serif' textAlign="center" fontWeight={400}>Try our new drink! Choco Caramel Iced Latte
Just $3, any size </Text>
               
                <NextLink href="/loyalty" passHref> 
                 <Button borderRadius={35} borderColor="#A426F1" borderWidth="2" borderStyle='solid' px={28} h={49} w={280} fontSize={30} color={'white'} mr={8} bg='#A426F1'  focusBorderColor="transparent" mt="40">Learn More</Button>
                 </NextLink> 
            </Box>

        </Flex>
    )
}
