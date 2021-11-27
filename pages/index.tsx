import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Products } from '../components/products/Products';
import { Checkout } from '../components/cart/Checkout';
import { getSession } from 'next-auth/react';
import { getEnv } from '../utils/env';
import { Layout } from '../components/layout/Layout';
import { getProducts } from '../components/products/api/getProducts';

function Home() {
  return (
    <Layout>
      <Products />
      <Checkout />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', getProducts);

  if (!session) {
    return {
      redirect: {
        destination: getEnv('NEXTAUTH_CALLBACK_URL'),
        permanent: false,
      },
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
