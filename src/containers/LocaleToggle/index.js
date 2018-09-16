import { connect } from 'react-redux';

import * as localeActions from 'actions/localeActions';

import { Button } from 'antd';

function mapStateToProps(state) {
  return {
    locale: state.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(localeActions.toggleLocale());
    },
  };
}

const LocaleToggle = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default LocaleToggle;
