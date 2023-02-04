import React from "react";
import { Flex, Box, Button, Fade, useDisclosure } from "@chakra-ui/react";

const CreateBlock = ({ onCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Fade in={isOpen}>
        <Flex alignItems="center" color="gray.400" h="34px" w="full">
          <Button
            variant="outline"
            size="xs"
            mr={1}
            type="button"
            onClick={onCreate}
          >
            +
          </Button>
          <Box as="span">Create new one</Box>
        </Flex>
      </Fade>
    </Box>
  );
};

export default CreateBlock;
