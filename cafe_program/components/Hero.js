import {Flex, Box, Text, Image, Button, Heading, Link} from"@chakra-ui/react";
import NextLink from 'next/link'


export default function Hero(){
    return (
        <Flex alignItems="center" justifyContent="center" h={420} mt="40">
      
        <Box h={420} w={525} backgroundColor='#C4B7DF' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading as='h1' fontFamily='Open Sans' fontSize='70px' color="#540B81" fontWeight="600" mb={2} mt={0} ml={0} mr={0}>Epic Café</Heading>
            <Text fontSize="24"width={400} ml={0} mr={0} fontFamily='Outfit, sans-serif' textAlign="center" fontWeight={400}>Sip, relax, feel cozy. Welcome to your remarkable coffee journey and join our loyalty program.</Text>
                <Flex>
                <NextLink href="/join" passHref> <Button borderRadius={35} borderColor="#A426F1" borderWidth="2" borderStyle='solid' px={28} h={49} w={280} fontSize={30} color={'white'} mr={8} bg='#A426F1'  focusBorderColor="transparent" mt="10">Join Now</Button></NextLink>
                   
                </Flex>
        </Box>

        <Box h={420} w={540} backgroundColor='#997DC6' display="flex" alignItems="center" justifyContent="center">
        <Image h="390px" w={510} borderRadius="10%" src="/images/hero.jpg" alt="Image"/>
        </Box>
    </Flex>
    )
}

