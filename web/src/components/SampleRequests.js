import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class SampleRequests extends React.Component {
  state = {
    month: new Date(Date.now()).getMonth()
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
      totalRequests = this.state.sampleRequests.filter(request => new Date(request.created_at).getMonth() === this.state.month)
    }
    return <div> {totalRequests.length ? totalRequests.length : <Skeleton />} </div>
  }
}

export default SampleRequests;