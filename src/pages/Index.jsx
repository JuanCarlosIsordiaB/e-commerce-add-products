import { Layout } from '../components/Layout';
import useAppContext from '../store/store';

export const Index = () => {

  const store = useAppContext();

  return (
    <Layout>
      {
        store.items.map((item) => (
          <h1>{item.title}</h1>
        ))
      }
    </Layout>
  )
}
