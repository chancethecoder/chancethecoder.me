import React, { Component } from 'react';

class LinkList extends Component {
  static defaultProps = {
    links: []
  }

  render() {
    const listItems = this.props.links.map(e => <li><a href="{e.url}">{e.name}</a></li>)
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default LinkList;
