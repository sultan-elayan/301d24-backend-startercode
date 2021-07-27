import React, { Component } from 'react'
import axios from 'axios'
import FavDrink from './FavDrink'

export class FavPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
            allFavDrink: [],
            show: false
        }
    }

    componentDidMount = async () => {
      let   allFavDrink = await axios.get(`${this.state.REACT_APP_SERVER}/fav-list`)

        this.setState({
            allFavDrink: allFavDrink.data,
            show: true
        })

    }
    render() {
        return (
            <div>
                   {
                    this.state.show && (
                        <FavDrink allFavDrink={this.state.allFavDrink}></FavDrink>
                    )
                }
            </div>
        )
    }
}

export default FavPage
