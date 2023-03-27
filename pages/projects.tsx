import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import { Card } from "../components/card";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>My Projects</title>
        </Head>
        <Container>
          <Intro title="My Projects" active={2} />
          <div className="flex flex-wrap justify-center">
            {morePosts.map(({ title, excerpt, coverImage, slug }) => {
              return (
                <Card
                  imageUrl={coverImage}
                  title={title}
                  description={excerpt}
                  slug={slug}
                />
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
