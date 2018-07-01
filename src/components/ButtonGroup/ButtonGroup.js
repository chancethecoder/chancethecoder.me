import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: inline-block;
  flex-shrink: 0;
  padding: 0;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default ButtonGroup;
