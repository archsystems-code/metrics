import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class Signups extends React.Component {
  state = {
    date: new Date(Date.now())
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
      totalSignups = this.state.signups.filter(request => new Date(request.created_at).getMonth() === this.state.date.getMonth())
    }
    return <div> {totalSignups.length ? <div><p>Total Signups for {this.state.date.toLocaleString("en-us", { month: "long"})}</p> <p>{totalSignups.length}</p></div>: <Skeleton />} </div>
  }
}

export default Signups;