import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 7px;
  color: rgba(0,0,0,0.65);
`;

const Title = styled.span`
  margin-right: 8px;
`;

const DescriptionItem = ({ title, content }) => (
  <Wrapper>
    <Title>
      {title}:
    </Title>
    {content}
  </Wrapper>
);

DescriptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default DescriptionItem;
