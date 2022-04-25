import '../styles/globals.css';
import React from 'react';
import 'katex/dist/katex.min.css';
import HeadSEO from '@/components/SEO/head';
import Footer from '@/components/footer/index';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from '@/components/header';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const asPath = router.asPath;
  const { menuItems } = pageProps;
  return (
    <React.Fragment>
      {/* <body
        data-rsssl="1"
        className="home page-template page-template-page-blank page-template-page-blank-php page page-id-2 theme-flatsome woocommerce-js lightbox"
      > */}
        <HeadSEO />
        <div id="wrapper">
          <Header menuItems={menuItems} />

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
      {/* </body> */}
    </React.Fragment>
  );
}

export default MyApp;
