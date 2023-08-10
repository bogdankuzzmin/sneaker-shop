import React from 'react';
import { useParams } from 'react-router';

import { sneakersApi } from '@api/sneakersApi';

import Layout from '@components/Layout';
import Button from '@components/UI/Button';
import Collapse from '@components/Collapse';
import Spinner from '@components/UI/Spinner';
import { IProductSneaker } from '@components/ProductList/types';

import classes from './ProductDescription.module.scss';

const ProductDescription = () => {
  const { title: titleParam } = useParams();

  const { data, error, isLoading } = sneakersApi.useFetchAllUsersQuery('');

  const sneaker = data?.find(({ title }: any) => title.toLowerCase() === titleParam?.toLowerCase() ) as IProductSneaker;

  const content = (
    <div className={classes.ProductDescription}>
      <div className={classes.LeftColumn}>
        <img src={sneaker?.image} alt="Sneakers photo" />
      </div>

      <div className={classes.RightColumn}>
        <h2 className="title">{sneaker?.title.split('-').join(' ')}</h2>

        <div className={classes.ButtonWrapper}>
          {sneaker?.sizes.map((item) => (
            <Button className={classes.Button} variant="Secondary" disabled={!item.isInStock}>
              <span>EU {item.size}</span>
              <span className={classes.Price}>{item.price}€</span>
            </Button>
          ))}
        </div>

        <hr />

        <Collapse title="Dettagli prodotto">
          <div className={classes.Info}>
            <div>
              <h4 className={classes.InfoTitle}>Prezzo retail</h4>
              <span>119€</span>
            </div>

            <div>
              <h4 className={classes.InfoTitle}>ID Prodotto</h4>
              <span>315122-111/CW2288-111</span>
            </div>

            <div>
              <h4 className={classes.InfoTitle}>Colorway</h4>
              <span>White Pink Black</span>
            </div>

            <div>
              <h4 className={classes.InfoTitle}>Data release</h4>
              <span>02/09/2019</span>
            </div>

            <div className={classes.InfoFullWidth}>
              <h4 className={classes.InfoTitle}>Descrizione prodotto</h4>
              <span>
                  Le Air Jordan 1 High Atmosphere da donna hanno una classica struttura
                  a blocchi di colore Black Toe con una tomaia bianca e dark navy
                </span>
            </div>
          </div>
        </Collapse>

        <hr />

      </div>
    </div>
  );

  return (
    <Layout>
      {isLoading && <Spinner />}

      {sneaker && !isLoading ? content : (
        <div className={classes.NotFound}>
          <h2>The Item was not Found!</h2>
        </div>
      )}
    </Layout>
  );
};

export default ProductDescription;