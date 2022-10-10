import Head from 'next/head';

import styles from '@/styles/Home.module.css';

import { getAllPostList, getPostById, PostData } from '@/service/post';

export default function PageDetail({ postData }: { postData: PostData }) {
  return (
    <>
      <Head>
        <title>{postData.meta.title}</title>

        <meta name="description" content={postData.meta.description} />
        <meta property="og:title" content={postData.meta.title} />
        <meta property="og:description" content={postData.meta.description} />
      </Head>

      <section className={styles.main}>
        <h2>디테일 : {postData.meta.title}</h2>
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostList().map((fileName) => ({
    params: { id: fileName },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = getPostById(params.id);

  return {
    props: {
      postData,
    },
  };
}
