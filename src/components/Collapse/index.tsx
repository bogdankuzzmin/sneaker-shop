import React, { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import ArrowIcon from '@icons/arrow.svg';

import classes from './Collapse.module.scss';

interface ICollapseProps {
  children: ReactNode;
  title: string;
}

const Collapse: FC<ICollapseProps> = ({ children, title }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(true);

  const toggleCollapseHandler = () => setIsCollapseOpen((prevState) => !prevState);

  return (
    <div>
      <div className={classes.Collapse}>
        <h3 className={classes.Title}>{title}</h3>

        <button className={classes.Button} onClick={toggleCollapseHandler}>
          <ArrowIcon className={cn(classes.Icon, { [classes.IconTransform]: !isCollapseOpen })} />
        </button>
      </div>

      {isCollapseOpen && <div className={classes.Content}>{children}</div>}
    </div>
  );
};

export default Collapse;