import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";

class SampleRequests extends React.Component {
  state = {}
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/sample_requests').then(res => {
      const sampleRequests = res.data;
      this.setState({sampleRequests: sampleRequests})
    })
  }
  render() {
    return <div> {this.state.sampleRequests ? this.state.sampleRequests.length : <Skeleton />} </div>
  }
}

export default SampleRequests;