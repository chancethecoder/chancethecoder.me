import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const H2 = styled(Title)`
`;

H2.defaultProps = {
  level: 2,
};

export default H2;
