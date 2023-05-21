import React, { FC } from 'react';
import {useNavigate } from 'react-router';

import sneakers14 from '@assets/images/sneakers14.png';
import { Paths } from '@utils/constants/routes';

import classes from './ProductItem.module.scss';

interface IProductItemProps {
  image: string;
  title: string;
  price: string;
}

const ProductItem: FC<IProductItemProps> = ({
  image,
  title,
  price,
}) => {
  const navigate = useNavigate();

  const clickItemHandler = () => navigate(`${Paths.products}/${title.toLowerCase()}`);

  return (
    <div className={classes.Item} onClick={clickItemHandler}>
      <img className={classes.Image} src={sneakers14} alt={title} height="120" width="158" />

      <span>{title.split('-').join(' ')}</span>

      <span className={classes.Price}>${price}€</span>
    </div>
  );
};

export default ProductItem;