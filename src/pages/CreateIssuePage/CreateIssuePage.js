import React from "react";
import { Heading, Input, Text, Container, Textarea } from "@chakra-ui/react";

export function CreateIssuePage() {
  return (
    <div className='popup-container'>
      <Heading as='h2' size='xl' p={8}>
        Add Issue
      </Heading>

      {/* title input */}
      <Text mb='8px'>Title</Text>
      <Input mb='15px' variant='filled' placeholder='Title' />
      {/* description input */}
      <Text mb='8px'>Description</Text>
      <Textarea
        mb='15px'
        variant='filled'
        placeholder='Enter description'
        size='sm'
      />
      {/* description input */}
      <Text mb='8px'>Repository URL</Text>
      <Input
        mb='15px'
        variant='filled'
        placeholder='https://github.com/xyz/abc'
      />
      <button className='btn btn-primary text-md'>Create Issue</button>
    </div>
  );
}
