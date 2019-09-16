import React, {Component} from "react";
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { fetchUsers } from "../../store/actions";

class SubPage extends Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    const {users} = this.props;
    console.log("this.props.users", users);

    let usersList = <li>henuz kullanıcı yok</li>;
    
    if (!users.users && users.loading) {
      usersList = <li>yukleniyor!...</li>;
    } else if (users.users && users.users.length) {
      usersList = users.users.map( user => {
        console.log("user", user);
        return <li key={ user.id }>{user.name} </li>;
      });
    }

    return (
      <div className="page sub">
        <Header />
        <h2>Sub Page</h2>
        <button className="subPageBtn">Stres Tuşu</button>
        <ul>
          { usersList }
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

// export default {
//   component: connect(mapStateToProps, mapDispatchToProps)(SubPage),
//   loadData: () =>store.dispatch(fetchUsers())
// }; 