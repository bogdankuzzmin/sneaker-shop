import React, { FC } from 'react';
import classes from './ProductItem.module.scss';

import sneakers1 from '@assets/images/sneakers1.png';
import sneakers2 from '@assets/images/sneakers2.png';
import sneakers3 from '@assets/images/sneakers3.png';
import sneakers4 from '@assets/images/sneakers4.png';
import sneakers5 from '@assets/images/sneakers5.png';
import sneakers6 from '@assets/images/sneakers6.png';
import sneakers7 from '@assets/images/sneakers7.png';
import sneakers8 from '@assets/images/sneakers8.png';
import sneakers9 from '@assets/images/sneakers9.png';
import sneakers10 from '@assets/images/sneakers10.png';
import sneakers11 from '@assets/images/sneakers11.png';
import sneakers12 from '@assets/images/sneakers12.png';
import sneakers13 from '@assets/images/sneakers13.png';
import sneakers14 from '@assets/images/sneakers14.png';
import sneakers15 from '@assets/images/sneakers15.png';
import sneakers16 from '@assets/images/sneakers16.png';

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
  const clickItemHandler = () => {
    console.log('CLICK CARD');
  }

  return (
    <div className={classes.Item} onClick={clickItemHandler}>
      <img className={classes.Image} src={sneakers16} alt={title} height="120px" />
      {/*<img className={classes.Image} src="public/images/sneakers5.png" alt={title} height="120px" />*/}

      <span>{title}</span>

      <span className={classes.Price}>${price}€</span>
    </div>
  );
};

export default ProductItem;