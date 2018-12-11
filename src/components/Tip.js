import React from 'react';
import base from "../base";
import * as firebase from 'firebase';
import {Container, Tab, Header, Breadcrumb, Segment} from 'semantic-ui-react';
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
    const panes = [
      { menuItem: 'Pros', render: () => <Tab.Pane>{this.state.tip.pros}</Tab.Pane> },
      { menuItem: 'Cons', render: () => <Tab.Pane>{this.state.tip.cons}</Tab.Pane> },
    ];
    return (
      <div className='tip'>
        <Container text style={{ marginTop: '7em' }}>
          <Header className='tip-title' as='h1'>{this.state.tip.title}</Header>
          <Breadcrumb>
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle'/>
          </Breadcrumb>
          <p className='tip-desc'>{this.state.tip.desc}</p>
          <Header className='tip-title' as='h3'>References and Further Reading</Header>
          <Segment>{this.state.tip.code}</Segment>

          <Tab panes={panes}/>
        </Container>
      </div>
    );
  }

}

export default Tip;
