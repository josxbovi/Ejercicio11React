import React from 'react';
import Noticia from './Noticia';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center"> {/* Añade justificación al centro para centrar las columnas */}
        <div className="col-12 col-lg-10"> {/* Añade un contenedor con márgenes */}
          <div className="row">
            {noticias.map(noticia => (
              <div className="col-md-4 mb-4">
                <Noticia key={noticia.url} noticia={noticia} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaNoticias;