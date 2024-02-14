import React from 'react';

const Formulario = ({ setCategoria }) => {
  const handleChange = e => {
    setCategoria(e.target.value);
  }

  return (
    <form className='d-flex justify-content-between bg-secondary text-white p-3'>
      <label htmlFor="category" className="form-label">Elija la categoría</label>
      <select id="category" className="form-select" onChange={handleChange}>
        <option value="general">General</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
        <option value="science">Ciencia</option>
        <option value="sports">Deportes</option>
        <option value="technology">Tecnología</option>
      </select>
    </form>
  );
}

export default Formulario;