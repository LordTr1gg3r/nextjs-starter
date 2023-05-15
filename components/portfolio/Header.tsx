import * as React from 'react';
import Typography from '@mui/material/Typography';
export default function PortfolioHeader() {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        gutterBottom
      >
        My Portfolio
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Something short and leading about the collection below—its contents,
        the creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
    </>
  );
}
