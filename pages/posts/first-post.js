import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from './../../components/layout';
import styles from './first-post.module.scss';
import cn from 'classnames';

export default function FirstPost() {
  const [type, setType] = useState('success');
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1
          className={cn({
            [styles.success]: type === 'success',
            [styles.alert]: type === 'alert',
          })}
        >
          First Post
        </h1>
        <h2>
          <Link href='/'>Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
