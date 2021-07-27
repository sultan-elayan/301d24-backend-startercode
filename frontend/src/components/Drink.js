import React, { Component } from 'react'
import axios from 'axios'
import { Card , Button } from 'react-bootstrap';

export class Drink extends Component {

    constructor(props) {
        super(props);

        this.state = {

            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
        }
    }

    addFavDrink = async (item) => {

        let favDrink = item;

        await axios.post(`${this.state.REACT_APP_SERVER}/create`, favDrink);
    }


    // data.title = title,
    // data.description = description,
    // data.ingredients = ingredients,
    // data.image_url = image_url,
    render() {
        return (
            <div>
                {this.props.allDrink.map((item, idx) => {
                    return (

                        <Card key={idx} style={{ width: '18rem' , display:'inline-block'}}>
                            <Card.Img variant="top" src={item.image_url} style={{ width: '15rem'}}/>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                  {item.ingredients}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{this.addFavDrink(item)}}> Favorite </Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        )
    }
}

export default Drink
