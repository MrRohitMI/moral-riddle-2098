import {Box,Image,Button} from "@chakra-ui/react"
export default function Navbar(){
    return(
        <>
        <Box className="Navdiv">
           <Image src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg" alt="..." height="83%"/>
           <Button color="white" backgroundColor="orange" padding="0px 37px 0px 37px">Login</Button>
        </Box>
        </>
    )
}