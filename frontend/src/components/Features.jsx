
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcClearFilters, FcDonate, FcInTransit, FcSearch } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export function Features() {
  return (
    <Box p={16}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'No Third Party Mess'}
          text={
            '100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!'
          }
        />
        <Feature
          icon={<Icon as={FcSearch} w={10} h={10} />}
          title={'Transparency & Security'}
          text={
            'Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!'
          }
        />
        <Feature
          icon={<Icon as={FcClearFilters} w={10} h={10} />}
          title={'Co-Travelers Filtering'}
          text={
            'Multi-step filtering to bring only like-minded people together! That’s our key to have fuss-free trips!'
          }
        />
      </SimpleGrid>
    </Box>
  );
}