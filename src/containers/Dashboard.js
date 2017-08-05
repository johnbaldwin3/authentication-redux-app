import React, {Component} from 'react';
import {connect} from 'react-redux';

import NotAuthorized from '../components/NotAuthorized';
import Message from '../components/Message';

class Dashboard extends Component {
    render() {
        let content = null;
        if (!this.props.loggedIn) {
            content = <NotAuthorized />
              } else if (this.props.user) {
                content = (
                    <Message user={this.props.user}/>
                      );
                      }

                      let error = this.props.error;
                      if (error) {
                        if (Array.isArray(this.props.error)) {
                          error = this.props.error.map(error => <div>{error}</div>)
                        }
                        error = <div className="alert">{error}</div>
                      }
                      return (
                      <div className="UserInfo">
                        {error}
                        {content}
                      </div>
                      )
                      }
                      }

                      const mapStateToProps = (state) => {
                        return {
                            loggedIn: !!state.token,
                            user: state.user,
                            error: state.error
                        }
                      }

                      export default connect(mapStateToProps)(Dashboard);
