import React, { Component } from 'react'
import { Modal , Button , Form } from 'react-bootstrap';

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                {

                    <Modal show={true} >
                        <Modal.Header>
                            <Modal.Title>Update Your Drink Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            < Form onSubmit={(e)=>{this.props.updateDrink(e)}}>
                                
                                    <Form.Label>Drink name </Form.Label>
                                    <Form.Control type="text" value={this.props.title} onChange={(e)=>{this.props.onChangeName(e)}}/>
                                   
                               
                                    <Form.Label>Drink Description </Form.Label>
                                    <Form.Control type="text" value={this.props.ingredients} onChange={(e)=>{this.props.onChangeDes(e)}}/>
                                   
                               

                           
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Modal.Body>

                    </Modal>
                }
            </div>
        )
    }
}

export default UpdateForm
