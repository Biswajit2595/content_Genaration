import { useState } from "react";
import {
  Box,
  Textarea,
  Heading,
  HStack,
  Button,
  Grid,
  Select,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [language, setLanguage] = useState("");
  const gradientColor = useColorModeValue("gray.100", "pink.200");
  const buttonColor = useColorModeValue("telegram", "telegram");

  const handleGenerate = () => {
    axios(
      `https://content-generator-f4t13ze6d-biswajit2595.vercel.app/generate?prompt=${query}`
    )
      .then((res) => {
        console.log(res);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSummary = () => {
    axios
      .post(
        `https://content-generator-f4t13ze6d-biswajit2595.vercel.app/summarize`,
        { query }
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTranslate = () => {
    const request = {
      query,
      language,
    };
    axios
      .post(
        `https://content-generator-f4t13ze6d-biswajit2595.vercel.app/translate`,
        request
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box w="100vw" margin="auto">
        <Heading backgroundColor={"gray.400"} textAlign="center" p={2}>
          CONTENT GENERATOR
        </Heading>
    <Flex
      h="90vh"
      bgGradient={`linear(to-l, ${gradientColor}, pink.200)`}
      justifyContent="center"
      alignItems="center"
    >
      <Box
      width={{lg:"60%",md:"70%",sm:"80%",base:"80%"}}
        boxShadow="base"
        borderRadius="10px"
        p={4}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Grid
          gap={4}
          templateColumns={{
            lg: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          p={4}
        >
          <Button
            isDisabled={!query}
            colorScheme={buttonColor}
            _hover={{ background: "#22c35e" }}
            onClick={handleGenerate}
          >
            Generate
          </Button>
          <Button
            isDisabled={!query}
            colorScheme={buttonColor}
            _hover={{ background: "#22c35e" }}
            onClick={handleSummary}
          >
            Summary
          </Button>
          <Select
            placeholder="Select a Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bengali</option>
            <option value="Telugu">Telugu</option>
            <option value="Marathi">Marathi</option>
            <option value="Tamil">Tamil</option>
            <option value="Urdu">Urdu</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Kannada">Kannada</option>
            <option value="Odia">Odia</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Assamese">Assamese</option>
            <option value="Maithili">Maithili</option>
            <option value="Santali">Santali</option>
            <option value="Kashmiri">Kashmiri</option>
            <option value="Nepali">Nepali</option>
            <option value="Sindhi">Sindhi</option>
            <option value="Konkani">Konkani</option>
          </Select>
          <Button
            isDisabled={!language}
            colorScheme="whatsapp"
            _hover={{ background: "#0088cc" }}
            onClick={handleTranslate}
          >
            Translate
          </Button>
        </Grid>
        <Flex gap={2} w="100%">
          <Box width="50%">
          <Textarea
            width="100%"
            rows={12}
            maxLength={500}
            placeholder="Enter Your Text Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            bg={useColorModeValue("gray.100", "gray.600")}
            borderColor="gray.300"
          ></Textarea>
          </Box>
          <Box width="50%">
          <Textarea
            placeholder="Your Output will be Shown Here"
            rows={12}
            width="100%"
            fontWeight="bold"
            value={response}
            readOnly
            bg={useColorModeValue("gray.100", "gray.600")}
            borderColor="gray.300"
          ></Textarea>
          </Box>
        </Flex>
      </Box>
    </Flex>
    </Box>
  );
}

export default App;
