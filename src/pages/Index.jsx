import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Rally",
    description: "Stocks around the world have surged as economic data shows signs of recovery.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations 2023",
    description: "The latest advancements in technology are set to revolutionize industries.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Political Shifts",
    description: "New policies are being introduced as governments respond to global challenges.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market Rally Continues",
  "New Tech Innovations",
  "Political Shifts in Europe",
  "Economic Data Shows Recovery",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3">
          <Heading size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px">
                <Image src={article.image} alt={article.title} mb={4} />
                <Heading size="md">{article.title}</Heading>
                <Text mt={2}>{article.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Trending</Heading>
          <VStack spacing={2} align="start">
            {trendingArticles.map((title, index) => (
              <Link key={index} href="#" color="blue.500">{title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;