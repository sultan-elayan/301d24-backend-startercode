import React, { Component } from 'react'
import axios from 'axios'
import Drink from './Drink'

export class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
            allDrink: [],
            show: false
        }
    }

    componentDidMount = async () => {
        let allDrink = await axios.get(`${this.state.REACT_APP_SERVER}/retreive`)

        this.setState({
            allDrink: allDrink.data,
            show: true
        })

    }


    //     app.get('/',home);
    // app.get('/fav-list',getFavoriteCoffee);
    // app.get('/retreive',retreiveItemController);
    // app.post('/create',createItemController);
    // app.put('/update/:id',updateItemController);
    // app.delete('/delete/:id',deleteItemController);


    render() {
        return (
            <div>
                {
                    this.state.show && (
                        <Drink allDrink={this.state.allDrink}></Drink>
                    )
                }
            </div>
        )
    }
}

export default MainPage
