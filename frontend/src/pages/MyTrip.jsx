
import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

const MyTrip = () => {
  const trips = [
    { title: "Trip to Paris", description: "A wonderful trip to Paris in the spring." },
    { title: "Safari Adventure", description: "Explore the wild in an African safari." },
    { title: "Beach Getaway", description: "Relax at the beautiful beaches of Maldives." }
  ];

  return (
    <Box p={4}>
      <Text  mb={4} fontSize={"24px"} fontWeight={700} textAlign={"center"}>
        My Trips
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {trips.map((trip, index) => (
          <TripCard key={index} title={trip.title} description={trip.description} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const TripCard = ({ title, description }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    boxShadow="md"
    _hover={{ boxShadow: 'lg' }}
  >
    <Text fontWeight="bold" fontSize="xl" mb={2}>
      {title}
    </Text>
    <Text>{description}</Text>
  </Box>
);

export{ MyTrip};
