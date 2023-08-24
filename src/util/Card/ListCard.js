import React, { Fragment } from 'react';
import './ListCard.css';

export default function Card(props) {
  let classes = props.className;
  const children = props.children;

  classes = classes ? 'list-card-container ' + classes : 'list-card-container';

  return <div className={classes}>{children}</div>;
}
