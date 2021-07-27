import React, { Component } from 'react'
import axios from 'axios';
import UpdateForm from './UpdateForm'
import { Card , Button } from 'react-bootstrap';

export class FavDrink extends Component {
    constructor(props) {
        super(props);

        this.state = {

            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
            show: false,
            allFavDrink: this.props.allFavDrink,
            id: '',
            title: '',
            ingredients: '',
            image_url: '',

        }
    }


    deleteFavDrink = async (item) => {

        let id = item._id;

        let dataAfterDelete = await axios.delete(`${this.state.REACT_APP_SERVER}/delete/${id}`)

        this.setState({
            allFavDrink: dataAfterDelete.data
        })
    }



    showUpdateForm = (item) => {
        this.setState({
            id :item.id,
            title : item.title ,
            ingredients : item.ingredients,
            image_url : item.image_url
        })

    }


    onChangeName = (e) => {

        this.setState({
            title: e.target.value
        })
    }


    onChangeDes = (e) => {

        this.setState({
            ingredients: e.target.value
        })
    }


    updateDrink = async (e) => {
        e.preventDefault();

        let updateDate = {
            id : this.state.id,
            title : this.state.title,
            ingredients :this.state.item.ingredients,
            image_url : this.state.item.image_url
        }

        let updatedDrink = await axios.put(`${this.state.REACT_APP_SERVER}/update/${this.state.id}`, updateDate)

        this.setState({

            allFavDrink: updatedDrink.data,
            show: false
        })

    }

    render() {
        return (
            <div>
                {this.state.show && (
                    <UpdateForm
                     updateDrink={this.updateDrink}
                     onChangeName={this.onChangeName}
                     onChangeDes={this.onChangeDes}
                     title={this.state.title}
                     ingredients={this.state.ingredients}
                    ></UpdateForm>
                )}

                {this.state.allFavDrink.map((item, idx) => {
                    return (

                        <Card key={idx} style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Img variant="top" src={item.image_url} style={{ width: '15rem'}} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.ingredients}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.deleteFavDrink(item) }}> delete </Button>
                                <Button variant="primary" onClick={() => { this.showUpdateForm(item) }}> update </Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>
        )
    }
}

export default FavDrink
