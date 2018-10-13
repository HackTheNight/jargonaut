import React from 'react';
import base from "../base";
import * as firebase from 'firebase';
import {map} from 'lodash';


class Tip extends React.Component {

  constructor() {
    super();
    this.state = {
      tip: {}
    };
  }

  componentDidMount() {
    let url = `/tip/${this.props.match.params.tipId}`;
    console.log(url);
    const rootRef = firebase.database().ref(`/tip/${this.props.match.params.tipId}`);
    rootRef.on('value', snapshot => {
      this.setState({
        tip: snapshot.val()
      });
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const tip = this.state.tip;
    return (
      <div className='tip'>
        <div className='tip-header'>
          <h1 className='tip-title'>{this.state.tip.title}</h1>
          <ul className='tip-breadcrumb'>
            {tip.tags}
          </ul>
        </div>

        <div className='tip-content'>
          <p className='tip-desc'>{this.state.tip.desc}</p>
          <div className='tip-ref'>
            <h4 className='tip-ref-title'>References and Further Reading</h4>
            <ul><li>{tip.references}</li></ul>
          </div>
          <div className='tip-code'>
            <ol>
              {tip.code}
            </ol>
          </div>
          <div className='tip-tab'>
            <h4>Pros</h4>
            <ul><li>{tip.pros}</li></ul>
            <h4>Cons</h4>
            <ul><li>{tip.cons}</li></ul>
          </div>
        </div>

        <div className='tip-footer'>
          <div className='tip-links'>other links</div>
          <div className='tip-feedback'>
            <h4>was this helpful?</h4>
            <ul>
              <li>Upvotes: {tip.upvotes}</li>
              <li>Downvotes: {tip.downvotes}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Tip;
