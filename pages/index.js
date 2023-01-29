import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  useTheme,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
} from '@mui/material';
import { keyframes } from '@emotion/react';

function Splash() {
  const theme = useTheme();

  return (
    <Container>
      <Grid container wrap="wrap" sx={{ height: '90vh' }}>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: { lg: undefined, xs: 'center' },
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textShadow: `3px 3px 15px ${theme.palette.primary.main}`,
            }}
          >
            seokku
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textShadow: `3px 3px 15px ${theme.palette.secondary.main}`,
            }}
          >
            web developer
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 130,
              height: 130,
              boxShadow: `
            20px 20px 50px ${theme.palette.primary.main},
            -20px -20px 50px ${theme.palette.secondary.main},
            0px 0px 4px 5px white`,
            }}
          >
            <Box
              sx={{
                backgroundColor: 'black',
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/sans.jpg)',
                backgroundSize: 'cover',
              }}
            />
          </Avatar>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Index({ posts, globalData }) {
  const theme = useTheme();

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Splash />
      <main className="w-full">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: '500' }}
        >
          seokku blog
        </Typography>
        <Container>
          <Stack gap={2} direction="row" flexWrap="wrap" sx={{ marginTop: 4 }} justifyContent="center">
            {posts.map((post) => (
              <Card
                key={post.filePath}
                sx={{
                  maxWidth: 350,
                  transition: 'box-shadow ease 0.4s',
                  '&:hover': {
                    boxShadow: `
                  20px 20px 50px ${theme.palette.primary.main},
                  -20px -20px 50px ${theme.palette.secondary.main},
                  0px 0px 4px 5px white`,
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {post.data.date}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {post.data.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {post.data.category}
                  </Typography>
                  <Typography variant="body2">
                    {post.data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    LinkComponent={Link}
                    href={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Stack>
        </Container>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
