import { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { Products } from "../components/products/Products";
import { Checkout } from "../components/cart/Checkout";
import { useSession, getSession } from "next-auth/react";
import { getEnv } from "../utils/env";
import { Layout } from "../components/layout/Layout";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";

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

  await queryClient.prefetchQuery("products");

  if (!session) {
    return {
      redirect: {
        destination: getEnv("NEXTAUTH_CALLBACK_URL"),
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
