import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EventsScene from '../scenes/eventsScene';
import {addNotification, removeNotification} from '../actions'

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNotification,
    removeNotification,
  }, dispatch);
}

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return ({
      title: 'Krmení zvířat',
    })
  }

  render() {
    return (
        <EventsScene
          notifications={this.props.configuration.notifications}
          addNotification={this.props.addNotification}
          removeNotification={this.props.removeNotification}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
