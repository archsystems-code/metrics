import React from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Paper from 'material-ui/Paper';

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    }
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/chats').then(res => {
      const chats = res.data;
      this.setState({chats: chats})
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
      backgroundColor: '#9D4976'
    };
    let totalChats = []
    if (this.state.chats && this.state.chats.length) {
      totalChats = this.state.chats.filter(chat => new Date(chat.created_at).getMonth() === this.state.date.getMonth())
    }
    return <Paper style={paperStyle} zDepth={2}> {totalChats.length ? <div><h5>Chats</h5><p>{totalChats.length}</p></div> : <Skeleton />} </Paper>
  }
}

export default Chats;
