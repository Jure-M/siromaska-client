// global imports
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>This does not exists</h1>
    <p>Do not be sad, this is complicated web page</p>
    <p>Simply, go gome, and start againn</p>
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;
