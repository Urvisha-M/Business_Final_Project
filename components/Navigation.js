import {Box, HStack, Link} from"@chakra-ui/react";


export default function Navigation(){
    return ( <Box h={85}>
       <HStack h={75} spacing={60} justifyContent='center' alignItems='center' >
        <Link href="#" color='black' fontSize='25px' fontWeight='500' textDecoration='inherit' fontFamily='Outfit, sans-serif'>Home</Link>
        <Link href="/menu" color='black' fontSize='25px' fontWeight='500' textDecoration='none' fontFamily='Outfit, sans-serif'> Menu</Link>
        <Link href="#visit our location" color='black' fontSize='25px' fontWeight='500' textDecoration='none' fontFamily='Outfit, sans-serif'>Locations</Link>
        <Link href="/join" color='black' fontSize='25px' fontWeight='500' textDecoration='none' fontFamily='Outfit, sans-serif'>Loyalty Program</Link>
        </HStack> 
    </Box>
    )
}
