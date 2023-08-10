import React, { FC, ReactNode } from 'react';

import classes from '@components/ProductList/partials/SkeletonProductList/SkeletonProductList.module.scss';

interface ISkeletonProductListProps {
  children: ReactNode;
}

const SkeletonProductList: FC<ISkeletonProductListProps> = ({ children }) => (
  <div className={classes.Skeleton} >
    {children}
  </div>
);

export default SkeletonProductList;