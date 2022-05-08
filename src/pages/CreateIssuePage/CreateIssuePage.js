import React from "react";
import { Container, Input, Text, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function CreateIssuePage() {
  return (
    <Container maxW='4xl'>
      <h1 className='create-issue-heading text-bold-weight'>Add issue</h1>

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
      {/* <div className='flex-r button-group'> */}
      <Link to='/' className='btn btn-primary text-md btn-back'>
        Go Back
      </Link>
      {/* <button className='btn btn-primary text-md'>Create Issue</button> */}
      {/* </div> */}
    </Container>
  );
}
