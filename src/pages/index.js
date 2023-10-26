import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/post-util';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Danny's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
