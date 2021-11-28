import { useEffect } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { Products } from '../components/products/Products';
import { Checkout } from '../components/cart/Checkout';
import { getSession } from 'next-auth/react';
import { getEnv } from '../utils/env';
import { getProducts } from '../components/products/api/getProducts';
import { Layout } from '../components/layout/Layout';
import { useAuth } from '../components/auth/hooks/useAuth';

export default function Home() {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push(getEnv('NEXTAUTH_CALLBACK_URL'));
    }
  }, [session]);

  return (
    <Layout>
      <Products />
      <Checkout />
    </Layout>
  );
}

export const getStaticSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products');

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
