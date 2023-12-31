import {Link} from 'react-router-dom';

export const Producto = ({item}) => {
    return (
        <div className="producto">
          <Link to={`/view/${item.id}`}>
            {item.cover && <img src={item.cover} alt={item.title} />}
          </Link> 
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <div className="detalle-precio">
            <h2>{item.precio}</h2>
            <button onClick={() => console.log(`Comprando ${item.title}`)}>Comprar</button>
          </div>
        </div>
      );
    };
