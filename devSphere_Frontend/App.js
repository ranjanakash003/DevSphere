import { ChakraProvider, extendTheme, Box, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" p={4} bg="gray.800" color="white" justifyContent="space-between">
      <Text fontSize="xl" fontWeight="bold">DevSphere</Text>
      <Flex gap={4}>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"} Mode</Button>
      </Flex>
    </Flex>
  );
}

function ProjectCard({ title, description }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} m={2} shadow="md">
      <Text fontSize="lg" fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </Box>
  );
}

function HomePage() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Welcome to DevSphere</Text>
      <Flex wrap="wrap">
        <ProjectCard title="Portfolio Generator" description="Auto-fetch GitHub, Codeforces & LeetCode stats." />
        <ProjectCard title="Admin Dashboard" description="Customize your portfolio with ease." />
      </Flex>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;