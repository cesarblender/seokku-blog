import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import Reddit from '@mui/icons-material/Reddit';
import Mail from '@mui/icons-material/Mail';

export default function Footer({ copyrightText }) {
  return (
    <Container component="footer" sx={{ marginTop: 4 }}>
      <Divider />
      <Stack
        direction="row"
        sx={{ marginY: 2 }}
        justifyContent="space-around"
      >
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Reddit />
        </IconButton>
        <IconButton>
          <Mail />
        </IconButton>
      </Stack>
      <Typography variant="body1" color="text.secondary" sx={{ marginY: 2 }}>
        {copyrightText}
      </Typography>
    </Container>
  );
}
