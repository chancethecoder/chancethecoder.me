import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { scaleOnHover } from 'utils/style-utils';

const smallSize = css`
  font-size: 12px;
  padding: 8px 32px;
  border-radius: 1.5px;
  border-width: 1px;
`;

const mediumSize = css`
  font-size: 16px;
  padding: 12px 48px;
  border-radius: 2px;
  border-width: 1.2px;
`;

const largeSize = css`
  font-size: 20px;
  padding: 16px 64px;
  border-radius: 2.5px;
  border-width: 1.5px;
`;

const setSizeAttributes = props => css`
  ${props.small && smallSize}
  ${props.medium && mediumSize}
  ${props.large && largeSize}
`;

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  border-style: solid;

  ${props => setSizeAttributes(props) || mediumSize}

  ${props => (props.bold ? 'font-weight: bold' : '')};

  color: ${props => (props.outlined ? props.background : props.color)};
  background: ${props => (props.outlined ? props.color : props.background)};
  border-color: ${props => (props.outlined ? props.background : props.color)};

  ${props => (props.scaleOnHover ? scaleOnHover : '')}

  &[disabled] {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  background: '#ff5a5f',
  color: '#fff',
};

Button.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  bold: PropTypes.bool,
  outlined: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
