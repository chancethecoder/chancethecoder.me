import styled from 'styled-components';

const List = styled.ul`
  list-style-type: ${props => props.listStyleType};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

List.defaultProps = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
};

export default List;
