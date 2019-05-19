import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './Footer.styles';

function Footer({ ...rest }) {
  return (
    <Styled.Footer {...rest}>
      {/* <Styled.FooterWrapper>
        <Styled.FooterLogo />
      </Styled.FooterWrapper> */}
    </Styled.Footer>
  );
}

// Footer.propTypes = {
//   version: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

// Footer.defaultProps = {
//   version: undefined
// };

export { Footer };
