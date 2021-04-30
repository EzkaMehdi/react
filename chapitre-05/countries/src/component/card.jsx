import React from 'react'


class Card extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.flag} alt=""/>
                <p> {this.props.name} </p>
                <p>{this.props.capital}</p>

                <p>{this.props.population}</p>
                <p>{this.props.region}</p>



            </div>
        )
    }
}
export default Card