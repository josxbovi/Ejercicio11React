import React, { useState, useEffect } from "react";
import axios from "axios";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=ec250c968bb84de68dadefc768b42789`;
      const resultado = await axios.get(url);
      setNoticias(resultado.data.articles);
    };
    obtenerNoticias();
  }, [categoria]);

  return (
    <>
      <></>
      <Titulo titulo="Noticias" />
      <Container className="container text-center">
        <Formulario setCategoria={setCategoria} />
        <ListaNoticias noticias={noticias} />
      </Container>
    </>
  );
}

export default App;
