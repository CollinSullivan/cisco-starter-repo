import React, {Component} from 'react';
import './Exhibit.css';

class Exhibit extends Component {

    render() {
        return (
      <div className="Exhibit">
        <h2 className="ExhibitTitle">{this.props.title}</h2>
        <hr />
        <div className="ExhibitContent">{this.props.children}</div>
      </div>
    );
  }

   
}
export default Exhibit;