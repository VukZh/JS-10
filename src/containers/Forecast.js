import React, { Component } from 'react';
export default class Forecast extends Component {
    render() {
      const { match: { params } } = this.props;
      const { city } = params;
        return (
          <p>
              { city }
          </p>
        )
    }
};
