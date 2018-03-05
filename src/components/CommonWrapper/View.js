import React, { Component } from 'react';
import { Row, Col, Menu, Icon, List} from 'antd';
import { browserHistory, Link } from 'react-router';
import {View as Footer} from './components/Footer/';
import { createChangeListActin } from './actionCreator';
import { connect } from 'react-redux';
import './style.css';

class View extends Component {

  render() {
    return (
      <div className='common'>
        <Row>
          <Col span={6}>
              <img onClick={()=>{browserHistory.push('/')}} className='common-logo' alt='' src={require('../../statics/imgs/newlogo.png')} />
          </Col>
          <Col span={18}>
            <Menu mode="horizontal">
              {
                this.props.list.map((v, i) => {
                  return (
                    <Menu.Item key={v.id}>
                      <Icon type="appstore"/>
                      {v.title}
                    </Menu.Item>    
                  )
                })
              }
            </Menu>
          </Col>
        </Row>

        <Row className='menu-border'>
          {
            this.props.menu.map((v, i) => {
              return (
                <Col span={i === 0 ? 4 : 10} key={i} className='right-border'>
                  <List
                    grid={{column: i === 0 ? 1 : 5}}
                    size="small"
                    header={<div><Link to={'/'} className='menu-link'>{v.title}</Link></div>}
                    dataSource={v.list}
                    renderItem={item => (
                        <List.Item>
                          <Link to={'/'} className='menu-link'>{item}</Link>
                        </List.Item>
                      )}
                  />
                </Col>
              )
            })
          }
        </Row>

        <div>{this.props.children}</div>

        <Footer/>
      </div>
    )
  }

  componentDidMount() {
    this.getCommonInfo()
  }

  getCommonInfo() {
    fetch('/api/common.json')
      .then((res) => res.json())
      .then(this.props.changeList)
      .catch(this.handleGetInfoErr.bind(this))
  }

  handleGetInfoErr() {
    console.log('Error')
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.common.list,
    menu: state.common.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeList: (res) => {
      const action = createChangeListActin(res.data)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);