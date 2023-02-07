import React, {Component} from 'react';
import './IPGetter.css';

class IPGetter extends Component {
    state = {
        isIPv6:this.props.isIPv6,
        title: isIPv6 ? "IPv6" : "IPv4",
    }

      
      <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
    })

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
export default IPGetter;