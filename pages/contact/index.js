import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

import { useState } from "react";
import { sendContactForm } from "@/lib/api";

import { BsArrowRight } from 'react-icons/bs';

const initValues = { name: "", number: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

import { useEffect } from "react";

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  useEffect(() => {
    document.body.style.overflowY = 'auto';
  })

  return (
    <div className='h-full bg-gradient-radial-b'>

      <div className='container mx-auto py-20 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] h-full'>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 text-center mb-12'
          >Let's <span className='text-accent'>connect.</span>
          </motion.h1>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  errorBorderColor="red.300"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="input"
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                <Input
                  type="number"
                  name="number"
                  placeholder="Mobile phone"
                  errorBorderColor="red.300"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="input"
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
            </div>

            <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
                className="input"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl
              mb={5}
              isRequired
              isInvalid={touched.subject && !values.subject}
            >
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                errorBorderColor="red.300"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
                className="input"
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={touched.message && !values.message}
              mb={5}
            >
              <Textarea
                type="text"
                name="message"
                placeholder="Message"
                rows={4}
                errorBorderColor="red.300"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                className='textarea'
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button
              variant="outline"
              colorScheme="blue"
              isLoading={isLoading}
              disabled={
                !values.name || !values.email || !values.subject || !values.message
              }
              className='btn rounded-full border border-white/90 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              onClick={onSubmit}
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Send
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>


  );
}