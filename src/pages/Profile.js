import React from 'react';
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Progress,
    Row
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import Menu from 'components/Menu';

class Profile extends React.Component {
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
            <div className="flex-container-center">
                <Container className="mb-4">
                    <Row>
                        <Col sm={{ size: 4 }}>
                            <div>
                                <h4>Youngkyun Kim</h4>
                                <hr className="mt-4" />
                                    <ul className="list-unstyled text-muted">
                                        <li className="mb-1">Seoul, South Korea</li>
                                        <li className="mb-1">interpark</li>
                                        <li className="mb-1">chancethecoder@gmail.com</li>
                                    </ul>
                                <hr className="mt-4" />
                            </div>
                            <ButtonGroup block>
                                <Button tag="a" href="https://www.github.com/chancethecoder" size="md" color="link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Button>
                                <Button tag="a" href="https://medium.com/@chancethecoder" size="md" color="link">
                                    <FontAwesomeIcon icon={faMedium} />
                                </Button>
                                <Button tag="a" href="https://www.facebook.com/chancethecoder" size="md" color="link">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </Button>
                                <Button tag="a" href="https://www.instagram.com/insta_kyg" size="md" color="link">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Button>
                            </ButtonGroup>
                        </Col>
                        <Col sm={{ size: 8 }}>
                            <div className="mb-5">
                                <h5 className="mb-3">Favorite</h5>
                                <Progress className="mb-3" value={75}>Climbing</Progress>
                                <Progress className="mb-3" value={70}>Music</Progress>
                                <Progress className="mb-3" value={60}>Movie</Progress>
                                <Progress className="mb-3" value={55}>Travel</Progress>
                                <Progress className="mb-3" value={30}>Cartoon</Progress>
                            </div>
                            <div>
                                <h5 className="mb-3">Programming</h5>
                                <Progress className="mb-3" multi>
                                    <Progress bar animated value="30">Server-side</Progress>
                                    <Progress bar color="success" value="20">Linux</Progress>
                                    <Progress bar color="info" value="20">Data engineering</Progress>
                                    <Progress bar color="warning" value="20">Data visualize</Progress>
                                </Progress>
                                <Progress className="mb-3" multi>
                                    <Progress bar animated value="25">Javascript</Progress>
                                    <Progress bar color="success" value="15">Ruby</Progress>
                                    <Progress bar color="info" value="10">Python</Progress>
                                    <Progress bar color="danger" value="5">Rua</Progress>
                                    <Progress bar color="warning" value="10">etc</Progress>
                                </Progress>
                                <Progress className="mb-3" multi>
                                    <Progress bar animated value="35">Ruby on Rails</Progress>
                                    <Progress bar color="success" value="15">React</Progress>
                                    <Progress bar color="info" value="15">Electron</Progress>
                                </Progress>
                                <Progress className="mb-3" multi>
                                    <Progress bar value="25">Docker</Progress>
                                    <Progress bar color="success" value="20">Automation</Progress>
                                    <Progress bar color="info" value="15">CI tools</Progress>
                                </Progress>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Menu />
            </div>
        )
    }
}

export default Profile;
