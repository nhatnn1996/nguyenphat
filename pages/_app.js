import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import HeadSEO from '@/components/SEO/head';
import Footer from '@/components/footer/index';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import { apollo } from '@/api/index';
import { getInfoSetting } from '@/geters/home';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import InfoPrvider from '../context/info';

const apolloClient = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
});
const isServer = () => typeof window === 'undefined';
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};
const getPosts = async () => {
  const result = await apollo.query({ query: getInfoSetting });
  const infoSettings = result.data.user;
  return infoSettings;
};

MyApp.getInitialProps = async (context) => {
  if (isServer()) {
    // return { infoSettings: await getPosts() };
    return {
      infoSettings: null
    };
  } else {
    return {
      infoSettings: null
    };
  }
};

function MyApp({ Component, pageProps, infoSetting = {} }) {
  const router = useRouter();
  const asPath = router.asPath;
  return (
    <ApolloProvider client={apolloClient}>
      <InfoPrvider infoSetting={infoSetting}>
        <HeadSEO />
        <div id="wrapper">
          <Header menuItems={pageProps?.menuItems} />
          <motion.main
            key={router.pathname}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear', duration: 0.3 }} // Set the transition to linear
          >
            <Component {...pageProps} key={asPath} />
          </motion.main>
        </div>
        <Footer />
      </InfoPrvider>
    </ApolloProvider>
  );
}

export default MyApp;
