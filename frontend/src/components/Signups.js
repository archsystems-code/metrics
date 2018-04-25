import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Signups extends Component {
  state = {}
  componentDidMount() {
    axios.get('/api/signups').then(res => {
      const signups = res;
      this.setState({signups: signups})
    })
  }
  render() {
    return <div> {this.state.signups ? this.state.signups.length : <Skeleton />} </div>
  }
}

export default Signups;