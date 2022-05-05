import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByTitle } from "../redux/actions/actions";
import scrollToCards from "./ScrollButtom/scrollToCars";

import {  FormControl, Form, Button, Col, Container, Row } from "react-bootstrap";

export default function Searchbar() {
    const [name, setName] = useState("");
    const [buscador, setBuscador] = useState("");

    const dispatch = useDispatch();

    function handleInput(e) {
        e.preventDefault(e);
        setName(e.target.value);
        setBuscador("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getByTitle(name));
    }

    return (
        
<Form onSubmit={(e) => handleSubmit(e)} className="d-flex">
    <Form.Control style={{width: "auto", height: "31px", marginTop: "1px"}}
    type="text"
    
  />
            <Button style={{ height: "30px", marginTop: "2px" }} type="submit" onClick={() => scrollToCards()}  variant="warning"><p style={{marginBottom: 5}}>Search</p></Button>
        </Form>
        
    )
}