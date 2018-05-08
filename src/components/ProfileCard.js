import React from 'react';
import { ButtonGroup, Button, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import SocialListGroupDropdown from './SocialListGroupDropdown';

const Example = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Youngkyun, Kim</CardTitle>
        <CardSubtitle>chancethecoder@gmail.com</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>Living in seoul, korea</CardText>
        <CardText></CardText>
        <ButtonGroup>
          <Button tag="a" href="https://www.github.com/chancethecoder" size="sm" color="primary">Github</Button>
          <Button tag="a" href="https://medium.com/@chancethecoder" size="sm" color="primary">Medium</Button>
          <SocialListGroupDropdown />
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default Example;