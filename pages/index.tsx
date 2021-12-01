import { dehydrate, QueryClient } from 'react-query';
import type { GetServerSideProps } from 'next';
import { Products } from '../components/products/Products';
import { Checkout } from '../components/cart/Checkout';
import { getSession } from 'next-auth/react';
import { getEnv } from '../utils/env';
import { getProducts } from '../components/products/api/getProducts';
import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Products />
      <Checkout />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

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
