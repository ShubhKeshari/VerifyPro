import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import AboutUs from "../assets/AboutUs.jpg"
import { Footer } from '../components/Footer';
  export const About=()=> {
    return (
        <>
      <Flex 
        w={'full'}
        h={`calc(70vh - 64px)`}
        backgroundImage={
            AboutUs
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
              About US
            </Text>
          </Stack>
        </VStack>
        
      </Flex>
      <Flex p={{ base: 4, md: 16 }} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10} bg={"gray.100"}>
        <Text fontSize={"24px"} fontWeight={700} textAlign={"justify"}>What do we stand for and how did we reach to it?</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis repudiandae obcaecati sint earum, voluptate explicabo blanditiis quos tempore quasi ipsum, assumenda magnam, libero sequi enim iste nostrum tenetur ducimus quis quisquam ea facere harum! Eligendi, eveniet dignissimos fuga quasi saepe sequi est ex nesciunt error tempora numquam soluta ipsum assumenda facilis magnam corporis fugiat nobis temporibus. Dolores pariatur temporibus itaque unde at, sequi iusto est a eaque quos! Eaque sed aperiam ex atque ducimus, odio quia eveniet laboriosam natus consequatur est, consectetur temporibus eos unde modi illo dolorum iusto repellat. Dignissimos repellendus iure asperiores quo nobis laborum corporis nam.</Text>
  </Flex>
  <Footer/>
  </>
    );
  }