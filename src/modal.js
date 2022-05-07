import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Text,
    Textarea,
    Container,
  } from '@chakra-ui/react'

function ModalContainer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bg="brand.200" onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW='4xl' bg="brand.100">
            <ModalHeader fontSize='5xl'>Review Design</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>

            {/* title input */}
            <Text mb='8px'>Title</Text>
            <Input mb='15px' variant='filled' placeholder='Title' />
            {/* description input */}
            <Text mb='8px'>ScreenShot</Text>
            <Container mb='15px' maxW='container.sm' bg='brand.400' color='#262626'>
                Screen Capture will come here.
            </Container>
            <Text mb='8px'>Description</Text>
            <Textarea mb='15px'
                variant='filled'
                placeholder='Enter description'
                size='sm'
            />
            {/* description input */}
            <Text mb='8px'>Repository URL</Text>
            <Input mb='15px' variant='filled' placeholder='https://github.com/xyz/abc' />
            </ModalBody>
  
            <ModalFooter>
              <Button size='lg' bg="brand.300" mr={3} onClick={onClose}>
                Save Changes
              </Button>
              <Button size='lg' variant='outline'>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export {ModalContainer}