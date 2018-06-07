import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import './ProfileCard.css';

export default class ProfileCard extends React.Component {
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
    return (
      <Card body>
        <CardTitle>chancethecoder</CardTitle>
        <CardText className="text-muted">
          <p className="lead">chancethecoder@gmail.com</p>
          <hr className="my-2" />
        </CardText>
        <ButtonGroup block>
          <Button tag="a" href="https://www.github.com/chancethecoder" size="sm" color="primary">
            Github <FontAwesomeIcon icon={faGithub}/>
          </Button>
          <Button tag="a" href="https://medium.com/@chancethecoder" size="sm" color="primary">
            Medium <FontAwesomeIcon icon={faMedium}/>
          </Button>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret size="sm" color="primary">
              Social
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" href="https://www.facebook.com/chancethecoder">facebook</DropdownItem>
              <DropdownItem tag="a" href="https://www.instagram.com/insta_kyg/">instagram</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </Card>
    )
  }
}
