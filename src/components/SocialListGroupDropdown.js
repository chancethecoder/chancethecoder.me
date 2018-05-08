import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  static defaultProps = {
    socialLinks: [{
      name: 'facebook',
      url: 'https://www.facebook.com/chancethecoder'
    }, {
      name: 'instagram',
      url: 'https://www.instagram.com/insta_kyg/'
    }]
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const dropdownItems = this.props.socialLinks.map(e => 
      <DropdownItem tag="a" href={e.url}>{e.name}</DropdownItem>
    )

    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret size="sm" color="primary">
          social links
        </DropdownToggle>
        <DropdownMenu>
          {dropdownItems}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}