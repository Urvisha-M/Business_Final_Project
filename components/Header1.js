import { Box, Flex, Text, Image, Link, HStack } from '@chakra-ui/react';


export default function Header(){
    return(
        <Flex alignItems='center' justifyContent='space-between'  h={85} w={1065} mx="auto">

            <Box display="flex" flexDirection="row"  alignItems="center" justifyContent="center" >
            <Image h={43} w={47}  src="/images/logo.jpg" alt="Image"/>
              <Text fontSize={30} fontFamily="Open Sans" fontWeight="600" ml={5}>Epic Café</Text>
            </Box>

            <HStack h={75} spacing={60} justifyContent='center' alignItems='center' >
                <Link href="/" color='black' fontSize='25px' fontWeight='500' textDecoration='inherit' fontFamily='Outfit, sans-serif'>Home</Link>
                <Link href="#value" color='black' fontSize='25px' fontWeight='500' textDecoration='none' fontFamily='Outfit, sans-serif'>Testimonials</Link>
                <Link href="#lo" color='black' fontSize='25px' fontWeight='500' textDecoration='none' fontFamily='Outfit, sans-serif'>Loyalty Program</Link>
            </HStack> 

        </Flex>
     
    )
}


