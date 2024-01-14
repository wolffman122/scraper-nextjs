import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Box className='mt-5'>
        <Heading className='text-center'>
          Wolfftech's Github Stats
        </Heading>
        <Flex justify={'center'}>
          <Box className='w-80 border-2 rounded-lg'>

            <Box>
              <Text className='font-bold'>Github Stars</Text>
            </Box>
            <Flex gap={'3'} align={'center'}>
              <Box>
                <Text className='font-medium'>
                  4
                </Text>
              </Box>
            </Flex>

          </Box>
          <Box className='w-80 border-2 rounded-lg'>
            <Box>
              <Text className='font-bold'>Github Followers</Text>
            </Box>
            <Flex gap={'3'} align={'center'}>
              <Box>
                <Text className='font-medium'>
                  4
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box className='w-80 border-2 rounded-lg'>
            <Box>
              <Text className='font-bold'>Repos Starred</Text>
            </Box>
            <Flex gap={'3'} align={'center'}>
              <Box>
                <Text className='font-medium'>
                  4
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  );
}
