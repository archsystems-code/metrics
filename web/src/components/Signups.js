import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Signups extends React.Component {
  state = {}
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/signups').then(res => {
      const signups = res.data;
      this.setState({signups: signups})
    })
  }
  render() {
    return <div> {this.state.signups ? this.state.signups.length : <Skeleton />} </div>
  }
}

export default Signups;