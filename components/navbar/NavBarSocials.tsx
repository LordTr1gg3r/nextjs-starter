import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function NavBarSocials() {
  return (
    <>
      <IconButton
        size="medium"
        aria-label="github"
        aria-controls="primary-github-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        size="medium"
        aria-label="linkedinIcon"
        aria-controls="primary-linkedinIcon-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>
    </>

  );
}
export default NavBarSocials;
