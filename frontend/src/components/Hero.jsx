import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import KashmirImg from "../assets/Kashmir.jpg"
  export const Hero=()=> {
    return (
      <Flex
        w={'full'}
        h={`calc(100vh - 64px)`}
        backgroundImage={
            KashmirImg
          }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              The journey is the destination. Embrace the adventure, every step of the way.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }