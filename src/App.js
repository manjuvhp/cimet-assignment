import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Loader from './components/common/Loader';
import Product from './components/Product';
import { getProducts } from './components/services/ProductService';

const CountCard = styled.span`
  color: #fff;
  background: #0A2647;
  padding: 12px 20px;
  border-radius: 5px;

  .count {
    border-radius:10px;
    color: #0A2647;
    background: #fff;
    font-weight: 600;
    padding: 3px 6px;
    margin-left: 5px;
  }
`;

function App() {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    const getAllProductList = async () => {
      setLoader(true)
      const {data, status} = await getProducts()
      if(status === 200){
        setProducts(data?.data?.electricity)
        setLoader(false)
      } else {
        setLoader(false)
      }
    }

    getAllProductList()
  }, [])
  return (
    <div className='product-page'>
      <CountCard>
        Electricity <span className='count'>{products?.length}</span>
      </CountCard>
      {loader && <Loader />}
      {products?.map((item) => (
        <Product key={item.id} plan={item} />
      ))}
    </div>
  );
}

export default App;
