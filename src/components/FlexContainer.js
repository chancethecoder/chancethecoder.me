import React, { Component } from 'react';
import { Container } from 'reactstrap';

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
                {this.props.items.prevItem}
                <Container>
                    {this.props.children}
                </Container>
                {this.props.items.nextItem}
            </div>
        );
    }
};

FlexContainer.defaultProps = {
    width: 100,
    height: 100,
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    items: {}
}

export default FlexContainer;
