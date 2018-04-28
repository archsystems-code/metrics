import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Signups extends React.Component {
  state = {
    month: new Date(Date.now()).getMonth()
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/signups').then(res => {
      const signups = res.data;
      this.setState({signups: signups})
    })
  }
  render() {
    let totalSignups = []
    if (this.state.signups) {
      totalSignups = this.state.signups.filter(request => new Date(request.created_at).getMonth() === this.state.month)
    }
    return <div> {totalSignups.length ? totalSignups.length : <Skeleton />} </div>
  }
}

export default Signups;