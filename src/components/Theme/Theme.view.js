import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, css } from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import effects from '../../constants/effects';
import * as Styled from './Theme.styles';

/**
 * A simple wrapper for ThemeProvider from styled-components. Injects our theme so any child
 * components can access the theme properties.
 */
function Theme({ children, theme, ...rest }) {
  return (
    <ThemeProvider theme={theme} {...rest}>
      <>
        <Styled.Global />
        {children}
      </>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
};

Theme.defaultProps = {
  theme: {
    breakpoints,
    colors,
    effects,
    // Shorthand for media queries for use inside styled-components
    media: Object.keys(breakpoints).reduce(
      (result, key) => ({
        ...result,
        [key]: (...style) => css`
          @media ${breakpoints[key]} {
            ${css(...style)};
          }
        `
      }),
      {}
    )
  }
};

export { Theme };
