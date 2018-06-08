import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Paginator from 'components/Paginator';

class FlexContainer extends Component {
    render() {
        const classNames = [
            'd-flex',
            `w-${this.props.width}`,
            `h-${this.props.height}`,
            `flex-${this.props.direction}`,
            `justify-content-${this.props.justify}`,
            `align-items-${this.props.align}`
        ];

        return (
            <div className={classNames.join(' ')}>
                <Container>
                    {this.props.children}
                </Container>
                {this.props.paginator ? <Paginator/> : ''}
            </div>
        );
    }
};

FlexContainer.defaultProps = {
    width: 50,
    height: 50,
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    paginator: false
}

export default FlexContainer;
