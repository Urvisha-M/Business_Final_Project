import {Flex, Box, Text, Image, Button, Heading } from "@chakra-ui/react";


export default function Test(){
    return (

        <Flex id="value" w={1064} h={495} mt={40} mb={40} mx="auto" backgroundColor="#FFE7E7" flexDirection="column">
          <Box>
            <Text fontSize="50" fontFamily='Outfit, sans-serif' color="#541189" fontWeight={700} letterSpacing="2.8" display="flex" justifyContent="center" alignItems="center" textAlign="center">TESTIMONIALS</Text>
          </Box>
      
          <Flex alignItems="center" justifyContent="space-between" flexDirection="row" w={1065} mx="auto" mt={40}>
            <Flex alignItems="center" justifyContent="center" position="relative" ml={10}>
              <Box w={340} h={265} backgroundColor="#FFF" display="flex" borderRadius={30} flexDirection="column" alignItems="center" justifyContent="flex-end" position="relative">    
                <Image h="140" w={135} borderRadius={1000} borderColor="white" position="absolute" top={-70} src="/images/1.jpg" alt="Image" />
                <Text color="#ffcc00" textAlign="center">&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
                <Text w={315} h={52} fontSize="20" fontFamily='Open Sans' color="black" fontWeight={400} display="flex" justifyContent="center" alignItems="center" mb={40}>
                Love Epic Café! Best coffee in town, friendly staff, and cozy vibes. Gives back to the community.
                </Text>
              </Box>
            </Flex>
      
            <Flex alignItems="center" justifyContent="center" position="relative" >
              <Box w={340} h={265} backgroundColor="#FFF" display="flex" borderRadius={30} flexDirection="column" alignItems="center" justifyContent="flex-end" position="relative">
                <Image h="140" w={135} borderRadius={1000} borderColor="white"  position="absolute" top={-70} src="/images/3.jpg" alt="Image" />
                <Text color="#ffcc00" textAlign="center">&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
                 <Text w={315} h={52} fontSize="20" fontFamily='Open Sans' color="black" fontWeight={400} display="flex" justifyContent="center" alignItems="center" mb={40}>
                Great coffee, great people. Epic Café is our happy place.
                </Text>
              </Box>
            </Flex>
      
            <Flex alignItems="center" justifyContent="center" position="relative" mr={10}>
              <Box w={340} h={265} backgroundColor="#FFF" display="flex" borderRadius={30} flexDirection="column" alignItems="center" justifyContent="flex-end" position="relative">
                <Image h="140" w={135} borderRadius={1000} borderColor="white"  position="absolute" top={-70} src="/images/2.jpg" alt="Image" />
                <Text color="#ffcc00" textAlign="center">&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
                <Text w={315} h={52} fontSize="20" fontFamily='Open Sans' color="black" fontWeight={400} display="flex" justifyContent="center" alignItems="center" mb={40}>
                Every sip at this place is a burst of joy. Love the coffee, love the vibe.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
       
    )
}
