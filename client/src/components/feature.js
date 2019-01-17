import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
class Feature extends PureComponent {

    componentWillMount() {
        this.props.fetchFeature();
    }

    renderFeature() {
        return this.props.features.map(feature => {
            return <li key={feature}>{feature}</li>;
        })
    }
    responseFacebook(response) {
        console.log(response);
      }
       
    render() {
        if (!this.props.features) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h4>Feature</h4><small>You must be logged in to see the features</small>
                <ul>
                    {this.renderFeature()}
                </ul>
                <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { features: state.features.homePageFeatures }
}

export default connect(mapStateToProps, actions)(Feature);
