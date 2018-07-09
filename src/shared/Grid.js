import React, { Component } from 'react';

class Grid extends Component {
    render() {
        const repos = this.props.data

        return (
            <ul>
                {   repos.map(({name}) => (
                        <li>
                            {name}
                        </li>
                    ))
                }
            </ul> 
        )
    }
}

export default Grid