import React, { FC, Fragment } from 'react';

import classes from './Skeleton.module.scss';

interface ISkeletonProps {
  quantity?: number;
  width?: string;
  height?: string;
  color: string;
  borderRadius?: string;
  marginBottom?: string;
  marginTop?: string;
}

const Skeleton: FC<ISkeletonProps> = ({ quantity = 1, width, height, color, borderRadius, marginBottom, marginTop }) => {
  const styles = {
    width: width || '100%',
    height: height || '15px',
    backgroundColor: color,
    borderRadius: borderRadius || 0,
    marginBottom: marginBottom || 0,
    marginTop: marginTop || 0,
  };

  const skeletons = [];

  for (let i = 0; i < quantity; i++) {
    skeletons.push(
      <div className={classes.Skeleton} style={styles} />
    )
  }

  return (
    <>
      {skeletons.map((element, index: number) => <Fragment key={index}>{element}</Fragment>)}
    </>
  )
};

export default Skeleton;