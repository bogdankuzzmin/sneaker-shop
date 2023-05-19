import React from 'react';
import { useParams } from 'react-router';

import Layout from '@components/Layout';
import Button from '@components/UI/Button'
import Collapse from '@components/Collapse'

import nikeBig from '@images/nike-big.png';
import { SNEAKERS } from '@/mocs/sneakers';

import { IProductSneaker } from '@components/ProductList/types';
import classes from './ProductDescription.module.scss';

const ProductDescription = () => {
  const { title: titleParam } = useParams();

  const sneaker = SNEAKERS.find(({ title }) => title === titleParam ) as IProductSneaker;

  return (
    <Layout>
      <div className={classes.ProductDescription}>
        <div className={classes.LeftColumn}>
          <img src={nikeBig} alt="" />
        </div>

        <div className={classes.RightColumn}>
          <h2 className="title">{sneaker?.title || ''}</h2>

          <div className={classes.ButtonWrapper}>
            {sneaker.sizes && sneaker.sizes.map((item) => (
              <Button className={classes.Button} variant="Secondary" disabled={!item.isInStock}>
                <span>EU {item.size}</span>
                <span className={classes.Price}>{item.price}€</span>
              </Button>
            ))}
          </div>

          <hr />

          <Collapse title="Dettagli prodotto">
            <div className={classes.Info}>
              <div className={classes.InfoLeftColumn}>
                <div className={classes.InfoColumnBlock}>
                  <h4 className={classes.InfoTitle}>Prezzo retail</h4>
                  <span className={classes.InfoDescription}>119€</span>
                </div>

                <div className={classes.InfoColumnBlock}>
                  <h4 className={classes.InfoTitle}>ID Prodotto</h4>
                  <span className={classes.InfoDescription}>315122-111/CW2288-111</span>
                </div>
              </div>

              <div className={classes.InfoRightColumn}>
                <div className={classes.InfoColumnBlock}>
                  <h4 className={classes.InfoTitle}>Colorway</h4>
                  <span className={classes.InfoDescription}>White Pink Black</span>
                </div>

                <div className={classes.InfoColumnBlock}>
                  <h4 className={classes.InfoTitle}>Data release</h4>
                  <span className={classes.InfoDescription}>02/09/2019</span>
                </div>
              </div>
            </div>

            <div className={classes.InfoColumnBlock}>
              <h4 className={classes.InfoTitle}>Descrizione prodotto</h4>
              <span className={classes.InfoDescription}>
                  Le Air Jordan 1 High Atmosphere da donna hanno una classica struttura
                  a blocchi di colore Black Toe con una tomaia bianca e dark navy
                </span>
            </div>
          </Collapse>

          <hr />

        </div>
      </div>
    </Layout>
  );
};

export default ProductDescription;