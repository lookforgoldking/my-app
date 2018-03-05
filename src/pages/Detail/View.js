import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View as Audio } from './Audio'
import Clock from './clock'
import { Layout } from 'antd';
import { connect } from 'react-redux';
import * as actions from './actionCreator';
import './style.css';

const { Header, Footer, Sider, Content } = Layout;

class Detail extends Component {
  render() {
    return (
      <div className="detail">
          <Layout>
            <Header>
              {this.props.title}
            </Header>
            <p className="detail-info">
              <span>{'时间：' + this.props.pubdate}</span>
              <span>{'来源：' + this.props.source}</span>
              <span>{'收听下载次数：' + this.props.count}</span>
            </p>
            <Audio mp3={this.props.mp3}/>
            <Layout>
              <Sider className='clock' width={304}>
                <canvas width='304' height='304' ref={(canvas) => {this.canvas = canvas}}></canvas>
              </Sider>
              <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
      </div>
    )
  }

  componentDidMount() {
    this.props.action.getAction(this.props.params.id)
    this.creatClock()
  }
  creatClock() {
    new Clock(this.canvas).init()
  }
}

const mapState = (state) => {
  return {...state.detail}
};

const mapDispatch = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Detail);