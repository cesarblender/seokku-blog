import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';

function MyAppbar() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6">seokku blog</Typography>
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
