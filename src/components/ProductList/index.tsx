import React, { FC } from 'react';

import ProductItem from '@components/ProductList/partials/ProductItem';
import SkeletonProductList from '@components/ProductList/partials/SkeletonProductList';
import { sneakersApi } from '@api/sneakersApi';
import Skeleton from '@components/UI/Skeleton';

import classes from './ProductList.module.scss';

const ProductList: FC = () => {
  const { data, error, isLoading } = sneakersApi.useFetchAllUsersQuery('');

  const loaders = [];

  for (let i = 0; i < 10; i++) {
    loaders.push(
      <SkeletonProductList>
        <Skeleton height="120px" color="#ede7de" borderRadius="8px" marginBottom="8px" />
        <Skeleton color="#D8D4D2" marginBottom="8px" />
        <Skeleton width="60%" color="#D8D4D2" marginBottom="8px" />
        <Skeleton width="20%" color="#9E938D" marginBottom="8px" marginTop="auto" />
      </SkeletonProductList>
    )
  }

  return (
    <ul className={classes.List}>
      {isLoading && loaders.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}

      {data?.map(({ title, image, price }: any) =>
        <ProductItem key={title} image={image} title={title} price={price} />
      )}
    </ul>
  );
}

export default ProductList;