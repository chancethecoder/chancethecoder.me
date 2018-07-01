import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scaleOnHover } from 'utils/style-utils';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 33%;
  padding: 24px;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  cursor: pointer;

  ${scaleOnHover}
`;

const Name = styled.h4`
`;

const ItemsGrid = props => (
  <Wrapper>
    {props.items.map((item, index) => (
      /* eslint-disable react/no-array-index-key */
      <Item key={index}>
        <Image
          image={item.picture}
        />
        <Name>{item.name}</Name>
      </Item>
    ))}
  </Wrapper>
);

ItemsGrid.defaultProps = {
  items: [],
};

ItemsGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequire,
    picture: PropTypes.string.isRequire,
  })).isRequire,
};

export default ItemsGrid;
