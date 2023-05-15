import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { positions } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Colors from '../theme/colors';
const styles = {
  paperContainer: {
    backgroundImage: `url(${"/bannerEdit.png"})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: `100%`,
    height: `100vh`,
    padding: 24,
  }
};
export default function heroBanner() {
  return (
    <>
    <Paper
      style={styles.paperContainer}
    >

      {/* Increase the priority of the hero background image */}
      {/* {<Image style={{ display: 'none' }} src="\Neon(Tablet).png" alt='test' width="100"/>} */}

      <Grid display="flex" justifyContent="center" alignItems="center" marginX='auto' marginY='15%' maxWidth='md'>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        >
          <Typography  align="center" color="text.secondary" component="p" gutterBottom>
            Design | Develop | Innovate
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
           Simon Thow
          </Typography>
          <Typography  align="center" color="text.secondary" component="p" gutterBottom>
          Welcome to my portfolio! I’m a full-stack developer who loves to build web applications that solve real-world problems.
          </Typography>
          <Grid display="flex" justifyContent="center" alignItems="center" marginX='auto' marginTop='15px' maxWidth='md'>
            <Stack useFlexGap direction="row" spacing={2}>
              <Button style={{backgroundColor: Colors.secondary.main }} variant="contained">Download CV</Button>
              <Button style={{backgroundColor: Colors.primary.main }}variant="contained">My Projects</Button>

            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Paper>
    </>
  )
};