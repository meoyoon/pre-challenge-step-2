import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { getAllPostList } from '@/service/post';

import PostCard from '@/components/PostCard';

const Home: NextPage<{ postList: string[] }> = ({ postList }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meo-Yooniverse</title>
        <meta name="description" content="Meo-Yooniverse" />
      </Head>

      <main className={styles.main}>
        <h2>아.아. 여기는 목록</h2>
        {postList.map((post, index) => (
          <PostCard postTitle={post} key={`${post}_${index}`} />
        ))}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const postList = getAllPostList();

  return {
    props: {
      postList,
    },
  };
}
