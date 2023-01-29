import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import {
  Button,
  Container,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

const components = {
  a: CustomLink,
  Head,
  h1: (props) => (
    <Typography
      variant="h3"
      component="h3"
      {...props}
      sx={{ marginTop: 4 }}
      textAlign="center"
    />
  ),
  h2: (props) => (
    <Typography
      variant="h4"
      component="h4"
      {...props}
      sx={{ marginTop: 4 }}
      textAlign="center"
    />
  ),
  h3: (props) => (
    <Typography
      variant="h5"
      component="h5"
      {...props}
      sx={{ marginTop: 4 }}
      textAlign="center"
    />
  ),
  p: (props) => (
    <Typography
      variant="body"
      component="p"
      {...props}
      sx={{ marginY: 2 }}
      textAlign="justify"
    />
  ),
  table: (props) => <Table size="small" {...props} />,
  th: (props) => <TableCell {...props} />,
  tr: (props) => <TableRow {...props} />,
  td: (props) => <TableCell {...props} />,
  img: (props) => <img style={{width: "100%", borderRadius: 21}} {...props} />
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Container component="article" maxWidth="md">
        <header>
          <Typography variant="h5" component="p" color="text.secondary">
            {frontMatter.date}
          </Typography>
          <Typography variant="h1" component="h1" sx={{ fontWeight: '300' }}>
            {frontMatter.title}
          </Typography>
          {frontMatter.description && (
            <Typography variant="h5" component="p" sx={{marginTop: 2}}>
              {frontMatter.description}
            </Typography>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <Typography variant="h5" sx={{marginBottom: 4}}>
          Véase también
        </Typography>
        <Stack gap={2} direction="row">
          {prevPost && (
            <Button
              LinkComponent={Link}
              color="primary"
              href={`/posts/${prevPost.slug}`}
              variant="contained"
              size="large"
            >
                {prevPost.title}
            </Button>
          )}
          {nextPost && (
            <Button
              LinkComponent={Link}
              color="secondary"
              href={`/posts/${nextPost.slug}`}
              variant="contained"
              size="large"
            >
                {nextPost.title}
            </Button>
          )}
        </Stack>
      </Container>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
