import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

function MyAppbar() {
  const router = useRouter();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {router.pathname !== "/" &&
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
          >
            <ArrowBack />
          </IconButton>}
        <Typography variant="h6">seokku</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default function Layout({ children }) {
  return (
    <Box>
      <MyAppbar />
      {children}
    </Box>
  );
}
