import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import { Card } from "../components/card";

type Props = {
  allPosts: Post[];
};
const projects = [
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
  {
    imageUrl:
      "https://cdn.midjourney.com/b75d09fd-cb82-4d3d-af22-24b19dc09d16/0_2.png",
    title: "title1",
    description: "description1",
  },
];

// "rabyl", "skaj", "zuma", "czejs", "marszal", "roki"];
export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>My Projects</title>
        </Head>
        <Container>
          <Intro title="My Projects" />
          <div className="flex flex-wrap justify-center">
            {/* {projects.map((project) => {
              return (
                <div className="bg-yellow-300 w-1/4 aspect-square flex flex-col items-center justify-center m-4">
                  {project}
                </div>
              );
            })} */}

            {morePosts.map(({ title, excerpt, coverImage }) => {
              return (
                <Card
                  imageUrl={coverImage}
                  title={title}
                  description={excerpt}
                />
              );
            })}
          </div>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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
