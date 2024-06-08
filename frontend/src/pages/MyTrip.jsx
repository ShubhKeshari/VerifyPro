
import React from "react";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

const trips = [
  
  {
    image: "https://images.wanderon.in/new-homepage-data/Explore%20India/meghalaya",
    title: "Kashmir",
    duration: "5 days",
    date: "July 5 - July 10, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", 
    title: "Paris",
    duration: "4 days",
    date: "August 20 - August 24, 2024",
  },
  {
    image: "https://images.wanderon.in/new-homepage-data/International/Malaysia", 
    title: "Malaysia",
    duration: "6 days",
    date: "September 10 - September 16, 2024",
  },
 
  {
    image: "https://images.wanderon.in/new-homepage-data/International/thailand",
    title: "Thailand",
    duration: "5 days",
    date: "November 5 - November 10, 2024",
  },
  {
    image: "https://images.wanderon.in/new-homepage-data/International/baku",
    title: "Baku",
    duration: "7 days",
    date: "December 1 - December 8, 2024",
  },
  {
    image: "https://images.wanderon.in/new-homepage-data/International/vietnam", 
    title: "Vietnam",
    duration: "4 days",
    date: "January 10 - January 14, 2025",
  },
  {
    image: "https://images.wanderon.in/new-homepage-data/International/dubai", 
    title: "London",
    duration: "6 days",
    date: "February 20 - February 26, 2025",
  },
  {
    image: "https://images.wanderon.in/new-homepage-data/International/sri%20lanka",
    title: "Sri Lanka",
    duration: "5 days",
    date: "March 10 - March 15, 2025",
  },
];


const TripCard = ({ image, title, duration, date }) => (
  <Box
    position="relative"
    borderRadius="md"
    overflow="hidden"
    height="250px"
    boxShadow="lg"
  >
    <Image
      src={image}
      alt={title}
      objectFit="cover"
      width="100%"
      height="100%"
    />
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0, 0, 0, 0.6)"
      color="white"
      padding="10px"
    >
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text>{duration}</Text>
      <Text>{date}</Text>
    </Box>
  </Box>
);

const MyTrip = () => (
  <>
  <Grid
    templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    }}
    gap={6}
    padding={4}
  >
    {trips.map((trip, index) => (
      <GridItem key={index}>
        <TripCard {...trip} />
      </GridItem>
    ))}
  </Grid>
  <Footer/>
  </>
);

export { MyTrip };
