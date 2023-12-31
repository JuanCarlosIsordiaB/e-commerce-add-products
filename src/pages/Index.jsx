import { Layout } from '../components/Layout';
import { Producto } from '../components/Producto';
import useAppContext from '../store/store';


export const Index = () => {

  const store = useAppContext();

  return (
    <Layout>
      <div className="product-container">
        {store.items.map((item, index) => (
          <Producto item={item} key={index} />
        ))}
      </div>
    </Layout>
  );
};
