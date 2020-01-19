import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const H3 = styled(Title)`
`;

H3.defaultProps = {
  level: 3,
};

export default H3;
