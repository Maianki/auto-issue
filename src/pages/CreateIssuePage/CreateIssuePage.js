import React from "react";
import { Input, Text, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./CreateIssuePage.css";

export function CreateIssuePage() {
  const [apiInput, setApiInput] = useState({
    owner: "",
    repo: "",
    title: "",
    description: "",
    url: "",
  })
  const [urlArray, setURLArray] = useState([])

  const getURL = (url) => {
    const inputURLArray = url.split("/");
    setURLArray(inputURLArray)
    return `${inputURLArray[0]}//api.${inputURLArray[2]}/repos/${inputURLArray[3]}/${inputURLArray[4]}/issues`
  }

const encodedToken = "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"
const handleCreateIssue = async() => {
    try {
      const response = await axios.post(
          getURL(apiInput.url),
          {
            owner: `${urlArray[3]}`,
            repo: `${urlArray[4]}`,
            title: `${apiInput.title}`,
            body: `${apiInput.description}`,
          },
          {headers:{
            "Authorization": `Token ${encodedToken}`
          }}

      )
      if (response.status===201){
        console.log("Success")
      }
  } catch (error) {
      console.log(`Something went wrong ${error}`)
  }
  }


  return (
    <div className='container-create-issue'>
      <h1 className='create-issue-heading text-bold-weight'>Add issue</h1>

      {/* title input */}
      <Text mb='8px'>Title</Text>
      <Input
        mb='15px'
        className='input'
        variant='filled'
        placeholder='Title'
        size='lg'
        value={apiInput.title}
        onChange={(e) => setApiInput({ ...apiInput, title: e.target.value })}
      />
      {/* description input */}
      <Text mb='8px'>Description</Text>
      <Textarea
        mb='15px'
        className='input'
        variant='filled'
        placeholder='Enter description'
        size='sm'
        value={apiInput.description}
        onChange={(e) =>
          setApiInput({ ...apiInput, description: e.target.value })
        }
      />
      {/* repository URL input */}
      <Text mb='8px'>Repository URL</Text>
      <Input
        mb='15px'
        className='input'
        variant='filled'
        placeholder='https://github.com/xyz/abc'
        size='lg'
        value={apiInput.url}
        onChange={(e) => setApiInput({ ...apiInput, url: e.target.value })}
      />
      <div className='flex-r button-group'>
        <Link to='/' className='btn btn-primary text-md btn-back'>
          Go Back
        </Link>
        <button className='btn btn-primary text-md' onClick={handleCreateIssue}>
          Create Issue
        </button>
      </div>
    </div>
  );
}
