import React from 'react'
import P1 from '../images/P1.svg'
import P2 from '../images/P2.svg'
import P3 from '../images/P3.svg'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
const Packages = () => {
    return (
        <>
            <div className="flex flex-row w-[100vw] px-12" >
                <div className=" flex-1  hidden md:block">
                    <img src={P1} alt="" />
                </div>

                <div className="flex flex-col flex-1 space-y-4 items-center md:items-start justify-center pl-12">
                    <img  src={P2} alt="" className=''/>
                    <ul className='list-disc'>
                        <li><h1>Logo Designing</h1></li>
                        <li><h1>Website deisgning & development</h1></li>
                        <li><h1>Social media marketing & management</h1></li>
                        <li><h1>Planning and execution of campaigns & promotions</h1></li>
                        <li><h1>PPC strategy for google ads</h1></li>
                        <li><h1>Google My Business Listing</h1></li>
                        <li><h1>Lead generation campaigns with social media & Google Ads</h1></li>
                        <li><h1>Email management & marketing</h1></li>
                    </ul>
                    <Button
                        // ml={{ base: '0', md: '8', lg: '8' }}
                        rounded={0}
                        px={10}
                        py={6}
                        bg={"#FF4E4E"}
                        color={'white'}
                        _hover={{
                            bg: 'red.300',
                        }}>
                        Book Now
                    </Button>
                </div>
            </div>

            <div className="flex flex-row w-[100vw] px-12" >
                <div className=" flex-1  hidden md:block">
                    <img src={P3} alt="" />
                </div>
                <br /><br />
                <div className="flex flex-col flex-1 space-y-4 items-center md:items-start justify-center pl-12 mt-[5rem]">
                    <img  src={P2} alt="" className=''/>
                    <ul className='list-disc'>
                        <li><h2>Logo Designing</h2></li>
                        <li><h2>Website deisgning & development</h2></li>
                        <li><h2>Social media marketing & management</h2></li>
                        <li><h2>Planning and execution of campaigns & promotions</h2></li>
                        <li><h2>PPC strategy for google ads</h2></li>
                        <li><h2>Google My Business Listing</h2></li>
                        <li><h2>Lead generation campaigns with social media & Google Ads</h2></li>
                        <li><h2>Email management & marketing</h2></li>
                    </ul>
                    <Button
                        // ml={{ base: '0', md: '8', lg: '8' }}
                        rounded={0}
                        px={10}
                        py={6}
                        bg={"#FF4E4E"}
                        color={'white'}
                        _hover={{
                            bg: 'red.300',
                        }}>
                        Book Now
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Packages