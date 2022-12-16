import React from "react";
import {Card, Button} from "react-bootstrap";

const BookCard = (props) => {
    const addItem = () => {
        props.getItem(props.card)
    }

    const removeItem = () => {
        props.removeItem(props.card)
    }

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.imgurl}/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>Жанр: {props.card.genre}</Card.Text>
                    <Card.Text>Ціна: {props.card.price}₴</Card.Text>
                    <Button variant="success" onClick={addItem}> + </Button>
                    <Button variant="danger" onClick={removeItem}> - </Button>
                    <span>  Вже в кошику: {props.card.added}</span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard