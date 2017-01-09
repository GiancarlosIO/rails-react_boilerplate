import React from 'react';

import NavComponent from './nav.component'

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavComponent />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
