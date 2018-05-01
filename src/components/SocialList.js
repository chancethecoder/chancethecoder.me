import React, { Component } from 'react';
import LinkList from './LinkList';

class SocialList extends Component {
  static defaultProps = {
    socialLinks: [{
      name: 'github',
      url: 'https://www.github.com/chancethecoder'
    }, {
      name: 'facebook',
      url: 'https://www.facebook.com/chancethecoder'
    }, {
      name: 'instagram',
      url: 'https://www.instagram.com/insta_kyg/'
    }]
  }

  render() {
    return (
      <LinkList links={this.props.socialLinks} />
    );
  }
}

export default SocialList;
