import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const HtmlRenderer = ({ htmlContent, color }) => {
  return (
    <Box paddingBottom={2} paddingLeft={2}>
      <Typography color={color} variant="subtitle1" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Box>
  );
};

HtmlRenderer.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default HtmlRenderer;