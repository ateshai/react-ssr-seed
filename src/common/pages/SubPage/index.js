import React, {Component} from "react";
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { fetchUsers } from "../../store/actions";

class SubPage extends Component {
  
  componentDidMount() {
    //this.props.fetchUsers();
  }

  render () {
    return (
      <div className="page sub">
        <Header />
        <h2>Sub Page</h2>
        <button className="subPageBtn">Stres Tuşu</button>
        <ul>
          { this.props.users.map( user => (<li key={ user.id }>{user.name} </li>) ) }
        </ul>
      </div>
    )
  }
};

// export default SubPage;

const mapStateToProps = (state, ownProps) => ({
  users: state.users
});

const mapDispatchToProps = {
  fetchUsers
};

export const loadData = (store) => {
  return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);