import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import heroImg from '../images/heroimg.svg'
export default function SplitScreen() {
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={10} flex={1} align={'center'} justify={'center'} mt={-5}>
        <Stack spacing={8} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
             >
              Increase your Business
            </Text>
            <br />{' '}
            <Text  as={'span'}>
              revenue with our
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Increase the revenue of your company by 3X to 4X using our services.
           We have various digital presence packages and social media packages which will help you grow your business faster in the digital zone.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
            rounded={0}
              px={10}
              py={6}
              bg={"#FFF84E"}
              color={'black'}
              _hover={{
                bg: 'yellow.500',
              }}>
              Get started
            </Button>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} >
        <Image
          alt={'Image'}
          objectFit={'cover'}
          src={heroImg}
        />
      </Flex>
    </Stack>
  );
}