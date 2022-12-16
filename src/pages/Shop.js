import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCard";
import Menu from "../components/Menu";
import styled from "styled-components";
import Footer from "../components/Footer";

const Shop = () => {
    const itemList = [
        {id: 1, name: "Гаррі Поттер", genre: "фантастика",imgurl: "/images/garry.jpg", price: 400, added: 0},
        {id: 2, name: "Людина-амфібія", genre: "фантастика",imgurl: "/images/amfi.jfif", price: 350, added: 0},
        {id: 3, name: "Гулівер", genre: "пригоди",imgurl: "/images/guli.jpg", price: 330, added: 0},
        {id: 4, name: "Воно", genre: "жахи",imgurl: "/images/it.jpg", price: 300, added: 0},
        {id: 5, name: "Сутінки", genre: "фантастика",imgurl: "/images/sutt.jfif", price: 410, added: 0},
        {id: 6, name: "Код Да Вінчі", genre: "детектив",imgurl: "/images/vinchi.jpg", price: 450, added: 0},
        {id: 7, name: "Володар Перснів", genre: "фантастика",imgurl: "/images/lord.jpg", price: 500, added: 0},
    ]
    const[totalItems, setTotalItems] = useState(itemList)

    const Desc = styled.div`
     font-size: 100px;
     font-weight: 600;
     margin-top: 40px;
     margin-bottom: 100px;
     width: 400%;
     color: black;
    `;

    const totalPriceClick = (item) => {
        setTotalItems(prev =>
            prev.map(elem =>
                elem.id === item.id
                    ? {...elem, added: elem.added+1}
                    : elem
            )
        )
    }

    const removeItem = (item) => {
        setTotalItems(prev =>
            prev.map(elem =>
                elem.id === item.id && elem.added != 0
                    ?{...elem, added: elem.added-1}
                    :elem
            ))
    }

    const sum = totalItems.reduce((acc, item) => acc+(item.price*item.added), 0)

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(totalItems))
    }, [totalItems])

    
    return(
        <div>
            <Menu/>
            <section className="container my-5">
                <div className="row">
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <Desc>Сума для оплати: {sum} ₴</Desc>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {totalItems.map(item =>
                        <BookCard card = {item} key={item.id} getItem={totalPriceClick}  removeItem={removeItem}/>
                    )}
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Shop