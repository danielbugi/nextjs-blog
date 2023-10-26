import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/post-util';
import Head from 'next/head';

const SinglePostPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default SinglePostPage;
