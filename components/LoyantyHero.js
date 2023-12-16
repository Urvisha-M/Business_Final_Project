import {Flex, Box, Text, Image, Button, Heading} from "@chakra-ui/react";
import NextLink from 'next/link'

export default function JoinHero(){
    return (
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
            <Box display="flex" alignItems="center" justifyContent="center">
                <Heading as='h3' fontFamily='Open Sans' fontSize='40' fontWeight={700} color="#540B81" mb={30} mt={20}>Join Our Loyalty Program</Heading>
            </Box>

            <Flex alignItems="center" justifyContent="center" h={277} w={1065} backgroundColor='#FFF3F3' borderColor="#837A7A" mx="auto" mb={20}>

                <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Heading as='h4' fontFamily='Open Sans' fontSize='30' fontWeight={600} mb={10} mt={0}>Choco Caramel Iced Latte</Heading>
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} mr={30}> Unlock exclusive delights by joining our free loyalty program! As a member, you'll discover a special offer for the "Choco Caramel Iced Latte" – any size for just $4, highlighting a rich and bold flavor profile. Plus, enjoy an exciting buy one get one promotion on select pastry items. </Text>   
                </Box>

                <Box  h={243} w={243} backgroundColor='#E2DCEF' borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                    <Image h="209" w={189} borderRadius="100%" src="/images/Latte.jpg" alt="Image"/>
                </Box>
            </Flex>

            <Flex alignItems="center" justifyContent="center" h={277} w={1065} backgroundColor='#E9E5F1' borderColor="#837A7A" mx="auto" mb={20}>

                 <Box  h={243} w={243} backgroundColor='#FFEBEB' borderRadius="50%" display="flex" alignItems="center" justifyContent="center" mr={50}>
                    <Image h="198" w={205} borderRadius="100%" src="/images/sweet.jpg" alt="Image"/>
                </Box>

                <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Heading as='h4' fontFamily='Open Sans' fontSize='30' fontWeight={600} mb={10} mt={0}>Sweets</Heading>
                    <Text fontSize="20"width={600} fontFamily='Open Sans, sans-serif' fontWeight={500} mr={30}> Bring a friend and enjoy the sweetness together! Both of you get a complimentary "Cinnamon Roll." Plus, spread the joy by sharing our "Choco Caramel Iced Latte" special offer on social media, tag us, and unlock a fantastic buy one get one 50% off deal on this featured beverage.  </Text>   
                </Box>
            </Flex>

            <Flex alignItems="center" justifyContent="center" h={277} w={1065} backgroundColor='#FFF3F3' borderColor="#837A7A" mx="auto" mb={20}>

                <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Heading as='h4' fontFamily='Open Sans' fontSize='30' fontWeight={600} mb={10} mt={0}>Community</Heading>
                    <Text fontSize="21"width={700} fontFamily='Open Sans, sans-serif' fontWeight={500} mr={30}> Join our loyalty program and make a difference! For every new sign-up, we’ll donate $1 to our charity fund. At the end of each month, all contributions will be given to a chosen charity. Join us in making a positive impact _ sip coffee, earn rewards, and support a cause!</Text>   
                </Box>

                <Box  h={243} w={243} backgroundColor='#E2DCEF' borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                    <Image h="209" w={189} borderRadius="100%" src="/images/community.jpg" alt="Image"/>
                </Box>
            </Flex>
            
            <Box display="flex" alignItems="center" justifyContent="center">
                <Text fontFamily='Open Sans' fontSize='32' fontWeight={500} mb={70} mt={60} mr={40}>Join now to unlock all these perks!</Text>
                <NextLink href="/join" passHref>
                    <Button borderRadius={40} px={28} h={45} w={200} fontSize={25} fontWeight={600} color={'white'} mr={8} bg='#A426F1' borderColor='#A426F1' focusBorderColor="transparent">Join Now</Button>
                </NextLink>
            </Box>


        </Flex>
    )
}