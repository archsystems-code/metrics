import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Paper from 'material-ui/Paper';

class Signups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    }
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/signups').then(res => {
      const signups = res.data;
      this.setState({signups: signups})
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
      backgroundColor: '#AD619D'
    };
    let totalSignups = []
    if (this.state.signups && this.state.signups.length) {
      totalSignups = this.state.signups.filter(request => new Date(request.created_at).getMonth() === this.state.date.getMonth())
    }
    return <Paper style={paperStyle} zDepth={2}> {totalSignups.length ? <div><p>Signups</p> <p>{totalSignups.length}</p></div>: <Skeleton />} </Paper>
  }
}

export default Signups;
