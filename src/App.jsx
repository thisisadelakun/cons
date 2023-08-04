import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Pages from './components/page/Pages'
import Loader from './loader/Loader';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient();

  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);

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
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      contentRef.current.classList.add('fade-in');
    }
  }, [isLoading]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {isLoading ? (<Loader />) : (
            <Layout>
              <ScrollToTop />
              <div ref={contentRef} className="content-fade-in">
                <Pages />
              </div>

            </Layout>
          )}
        </BrowserRouter>
      </QueryClientProvider >
    </>
  )
}

export default App
