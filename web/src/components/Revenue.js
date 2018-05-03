import React from 'react';
import axios from "axios";
import Paper from 'material-ui/Paper';

class Revenue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.date
    }
  }
  componentDidMount() {
    axios.get('https://asi-metrics.herokuapp.com/api/sales').then(res => {
      const sales = res.data;
      this.setState({sales: sales})
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
      backgroundColor: '#DD4E75'
    };
    let totalSales = "0.00"
    if (this.state.sales && this.state.sales.length) {
      totalSales = this.state.sales.filter(request => new Date(request.created_at).getMonth() === this.state.date.getMonth()).map(sale => Number(sale.total.replace(/[^0-9\\.-]+/g,""))).reduce((acc, val) => acc + val)
    }
    return <Paper style={paperStyle} zDepth={2}> <div><h5>Total Revenue</h5><p>${totalSales}</p></div></Paper>
  }
}

export default Revenue;
