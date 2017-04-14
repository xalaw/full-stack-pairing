import React from 'react'
import {connect} from 'react-redux'
import {fetchCheese} from '../actions/cheese';

export class CheeseList extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchCheese());
  }
  renderResults() {
    console.log(this.props);
    if (this.props.loading) {
      return 'Loading';
    }
    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }
    console.log(this.props.cheeses);
    const cheeseList = this.props.cheeses.map((cheese, index) => 
      <li key={index} >{cheese}</li>
    );
    return (
      <ul>
        {cheeseList}
      </ul>
    );
  }
  render(){
    return(
      <div>
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CheeseList);