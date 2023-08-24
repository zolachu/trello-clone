import React, { Fragment } from 'react';
import './Card.css';

export default function Card(props) {
  let classes = props.className;
  const children = props.children;

  classes = classes ? 'card-container ' + classes : 'card-container';

  return <div className={classes}>{children}</div>;
}
