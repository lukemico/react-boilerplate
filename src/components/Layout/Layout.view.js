import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './Layout.styles';

function Layout({ children, ...rest }) {
  return (
    <Styled.Container {...rest}>
      <Header />
      <Styled.Wrapper>{children}</Styled.Wrapper>
      <Footer />
    </Styled.Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout };
