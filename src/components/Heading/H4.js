import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const H4 = styled(Title)`
`;

H4.defaultProps = {
  level: 4,
};

export default H4;
