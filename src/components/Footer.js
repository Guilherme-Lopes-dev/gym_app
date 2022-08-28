import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" sx={{flexDirection:'row'}}>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Feito por: <bold>Guilherme Lopes</bold><br></br> <a href='https://github.com/Guilherme-Lopes-dev'> GitHub</a><br></br><a href='https://www.linkedin.com/in/guilherme-louren%C3%A7o-lopes-81650b215/'> Linkedin</a></Typography>
    

  </Box>
);

export default Footer;