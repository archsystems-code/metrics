import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Paper from 'material-ui/Paper';

class SampleRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    }
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/sample_requests').then(res => {
      const sampleRequests = res.data;
      this.setState({sampleRequests: sampleRequests})
    })
  }
  render() {
    const paperStyle = {
      height: 125,
      width: 125,
      margin: 20,
      padding: 10,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#F3DBB7'
    };
    let totalRequests = []
    if (this.state.sampleRequests && this.state.sampleRequests.length) {
      totalRequests = this.state.sampleRequests.filter(request => new Date(request.created_at).getMonth() === this.state.date.getMonth())
    }
    return <Paper style={paperStyle} zDepth={2}> {totalRequests.length ? <div><p>Sample Requests</p><p>{totalRequests.length}</p></div> : <Skeleton />} </Paper>
  }
}

export default SampleRequests;
