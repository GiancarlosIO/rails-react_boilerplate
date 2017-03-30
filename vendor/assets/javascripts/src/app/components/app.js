import React from 'react';

import NavComponent from './nav.component'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavComponent />
        <div>
          APP Component
        </div>
      </div>
    )
  }
}
