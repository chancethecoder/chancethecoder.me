import styled from 'styled-components';

const BottomFloater = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1000;
`;

export default BottomFloater;
