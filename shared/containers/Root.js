import React, {Component, PropTypes} from 'react';
import DevTools from './DevTools';

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
        <DevTools />
      </div>
    );
  }
}
