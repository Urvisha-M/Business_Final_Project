import {Flex, Box, Text, Image, Button, Heading } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function CoffeeAndSweets(){
    return (
        <Flex alignItems="center" justifyContent="center" h={414} w={1065} mt={40} mb={40} mx="auto">
        
            <Box h={414} w={349} backgroundColor='#FFE7E7' borderWidth={3} borderStyle='solid' borderColor='#B3A4A4' display="flex" flexDirection="column" alignItems="center" justifyContent="center" mr={9}>
                <Heading as='h5' fontFamily='Open Sans' fontSize='25px' mb={10} mt={0}>Choco Caramel Iced Latte</Heading>
                <Image h="209px" w={153}  src="/images/Latte.jpg" alt="Image"/>
                <Text width={300} fontSize="20" fontFamily='Open Sans, sans-serif' fontWeight={400} mt={10} mb={10}>New! Choco Caramel Iced Latte  Try it now!</Text>
                <NextLink href="/loyalty" passHref> <Button borderRadius={35} px={28} h={49} w={159} fontSize={23} mr={8}  backgroundColor='#FFE7E7' borderColor='#A19797' borderWidth={2} borderStyle='solid' focusBorderColor="transparent">Learn More</Button>
                </NextLink> 
            </Box>

            <Box h={414} w={349} backgroundColor='#FFE7E7' borderWidth={3} borderStyle='solid' borderColor='#B3A4A4' display="flex" flexDirection="column" alignItems="center" justifyContent="center" mr={9}>
                <Heading as='h5' fontFamily='Open Sans' fontSize='25px' mb={10} mt={0}>Cinnamon Rolls</Heading>
                <Image h="209px" w={153}  src="/images/rolls.jpg" alt="Image"/>
                <Text width={300} fontSize="20" fontFamily='Open Sans, sans-serif' fontWeight={400} mt={10} mb={10}>Taste our delicious sweets, full of different flavors! </Text>
                <NextLink href="/loyalty" passHref> <Button borderRadius={35} px={28} h={49} w={159} fontSize={23} mr={8}  backgroundColor='#FFE7E7' borderColor='#A19797' borderWidth={2} borderStyle='solid' focusBorderColor="transparent">Learn More</Button>
                </NextLink> 
            </Box>


            <Box h={414} w={349} backgroundColor='#FFE7E7' borderWidth={3} borderStyle='solid' borderColor='#B3A4A4' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading as='h5' fontFamily='Open Sans' fontSize='25px' mb={10} mt={0}>Sweets</Heading>
                <Image h="209px" w={153}  src="/images/sweets.jpg" alt="Image"/>
                <Text width={300} fontSize="20" fontFamily='Open Sans, sans-serif' fontWeight={400} mt={10} mb={10}>New! Choco Caramel Iced Latte  Try it now!</Text>
                <NextLink href="/loyalty" passHref><Button borderRadius={35} px={28} h={49} w={159} fontSize={23} mr={8}  backgroundColor='#FFE7E7' borderColor='#A19797' borderWidth={2} borderStyle='solid' focusBorderColor="transparent">Learn More</Button>
                </NextLink> 
            </Box>      

    </Flex>
    )
}
