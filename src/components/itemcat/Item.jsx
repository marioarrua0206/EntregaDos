import "./item.css"



import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="image-box-card">
        <img className="image-card" src={product.imagen} alt={product.nombre} />
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.nombre}</h2>        
        <Link to={`/detail/${product.id}`}>Ver detalles</Link>
      </div>
    </div>
  );
};
export default Item;