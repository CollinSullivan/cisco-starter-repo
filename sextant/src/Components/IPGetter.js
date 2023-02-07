import React, {Component} from 'react';


class IPGetter extends Component {
  constructor(props){
    super(props);
    this.state = {
      ipAddress:'',
      title:props.isIPv6 ? "IPv6" : "IPv4",
  }
  }

  componentDidMount(){
    const API_URL = this.props.isIPv6 ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json'
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
                    this.setState({ipAddress: data.ip});
                    console.log(data.ip);
    })
  }



  render(){
    return(
      <div>
        <p>{this.state.ipAddress}</p>
      </div>
    )
 }
}
export default IPGetter;