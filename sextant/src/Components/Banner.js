import React, {Component} from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
      <div className="Banner">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}
export default Banner;