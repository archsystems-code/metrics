import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class SampleRequests extends React.Component {
  state = {
    date: new Date(Date.now())
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/sample_requests').then(res => {
      const sampleRequests = res.data;
      this.setState({sampleRequests: sampleRequests})
    })
  }
  render() {
    let totalRequests = []
    if (this.state.sampleRequests) {
      totalRequests = this.state.sampleRequests.filter(request => new Date(request.created_at).getMonth() === this.state.date.getMonth())
    }
    return <div> {totalRequests.length ? <div><p>Total Signups for {this.state.date.toLocaleString("en-us", {month: "long"})}</p><p>{totalRequests.length}</p></div> : <Skeleton />} </div>
  }
}

export default SampleRequests;