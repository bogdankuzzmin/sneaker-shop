import React, { FC } from 'react';
import { useNavigate } from 'react-router';

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

  const clickItemHandler = () => navigate(`${Paths.esplora}/${title.toLowerCase()}`);

  return (
    <li className={classes.Item} onClick={clickItemHandler}>
      <div className={classes.Image}>
        <img src={image} alt={title} height="120" width="158" />
      </div>

      <span>{title.split('-').join(' ')}</span>

      <span className={classes.Price}>${price}€</span>
    </li>
  );
};

export default ProductItem;