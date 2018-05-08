import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SocialListGroup extends Component {
  static defaultProps = {
    socialLinks: [{
      name: 'facebook',
      url: 'https://www.facebook.com/chancethecoder'
    }, {
      name: 'instagram',
      url: 'https://www.instagram.com/insta_kyg/'
    }]
  }

  render() {
    const listGroupItems = this.props.socialLinks.map(e => 
      <ListGroupItem tag="a" href={e.url} action>{e.name}</ListGroupItem>
    )
    return (
      <ListGroup>
        {listGroupItems}
      </ListGroup>
    );
  }
}

export default SocialListGroup;
