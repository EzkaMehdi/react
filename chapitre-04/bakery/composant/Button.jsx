import React from 'react';


class Button extends React.Component {

    rendActive() {

    }

    render() {
       
            return (
                <div>
                    <button style={{ backgroundColor: '#007bff', color: 'white' }} className="btn btn-outline-primary" onClick={this.props.onClick}>{this.props.children}</button>
                </div>
            )
       
    }
}

export default Button;