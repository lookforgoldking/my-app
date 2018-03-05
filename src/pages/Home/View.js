import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { List } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actionCreator';
import './style.css';



class Home extends Component {
  render() {
    return (
      <div className='home'>
        <List
          style={{marginTop: '5px'}}
          size="small"
          header={<div className='home-header'>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</div>}
          bordered
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item>
              <Link to={'/'}>{'[' + item.category + ']'}</Link>
              &nbsp;
              <Link to={item.link}>{item.title + ' (' + item.pubdate + ')'}</Link>
            </List.Item>
          )}
        />
      </div>
    )
  }

  componentDidMount() {
    if(!this.props.list.length){
      this.props.action.getAction()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);