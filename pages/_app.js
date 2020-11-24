import "../styles/index.css";
import "../styles/hamburgers.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineForms } from "react-redux-form";
import { allMessages } from "../language/Messages";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import Navbar from "../src/components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from '../src/components/Footer/Footer'
import Head from 'next/head'

const initialState = {
  email: "",
  message: "",
};

const store = createStore(
  combineForms({
    formState: initialState,
  })
);

function MyApp({ Component, pageProps,router }) {
  const [currentLocale, setCurrentLocale] = useState("en");
  const messages = allMessages[currentLocale];
  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <Provider store={store}>
        <Head>
          <script src="https://kit.fontawesome.com/61a207640a.js" crossorigin="anonymous"></script>
        </Head>
        <Navbar
          currentLocale={currentLocale}
          onClick={() => setCurrentLocale(currentLocale === "en" ? "es" : "en")}
        />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
        <Footer />
      </Provider>
    </IntlProvider>
  );
}

export default MyApp;
