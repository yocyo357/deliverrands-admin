import React from 'react';
import { Route } from 'react-router-dom';

const ContextRoute = ({ contextComponent, component, ...rest }) => {
  const { Provider } = contextComponent;
  const Component = component;

  return (
    <Context1>
      <Context2>
        <Context3>
        {props.children}
        </Context3>
      </Context2>
    </Context1>
  );
};

export default ContextRoute;