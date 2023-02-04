import React from "react";
import { Heading } from "@chakra-ui/react";
import CreateBlock from "./CreateBlock";

export default {
  title: "Components/CreateBlock",
  component: CreateBlock,
};

export const Create = () => {
  const handleCreate = () => {
    console.log("Create!");
  };

  return (
    <>
      <Heading as="h3" fontSize="sm" mb={2}>
        Hover ↓
      </Heading>
      <CreateBlock onCreate={handleCreate} />
    </>
  );
};
