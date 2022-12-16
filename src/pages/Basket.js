import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCard";
import Menu from "../components/Menu";
import styled from "styled-components";
import Footer from "../components/Footer";

const Desc = styled.div`
  font-size: 100px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  color: black;
`;
const Cart = () => {
    const[items, setItems]=useState([])
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'))
        if(items){
            setItems(items)
        }
    }, [])

    return(
        <div>
            <Menu/>
            <div>
                <section className="container">
                    <Desc>Обрані книги:</Desc>
                    <div className="row">
                        {items.map(item => {
                            if(item.added != 0){
                                return <BookCard card={item}/>
                            }
                        })}
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Cart