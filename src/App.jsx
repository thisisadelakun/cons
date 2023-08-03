import React, { useEffect, useState, startTransition } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Pages from './components/page/Pages'
import Loader from './loader/Loader';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = useState(true);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {isLoading ? (<Loader />) : (
            <Layout>
              <ScrollToTop />
              <Pages />
            </Layout>
          )}
        </BrowserRouter>
      </QueryClientProvider >
    </>
  )
}

export default App
