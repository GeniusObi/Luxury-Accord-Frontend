import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import { useProductsContext } from '../context/products_context';
import Product from '../components/Product';
import { useFilterContext } from '../context/filter_context';
const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
      {/* {filtered_products.map((product, index) => {
        return <Product key={index} {...product.fields} id={product.id} />;
      })} */}
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
