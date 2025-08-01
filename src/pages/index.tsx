import Head from "next/head";
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Order Management Dashboard</title>
        <meta name="description" content="Order Management Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
