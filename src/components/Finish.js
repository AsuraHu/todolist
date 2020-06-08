import React, { Component } from 'react';
import { List,Button, Tooltip } from 'antd';
import store from '../store/index.js';
import { withDrawFinishItemAction } from '../store/actionCreator';

class Finish extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange);

    this.storeChange = this.storeChange.bind(this);
    
  }

  // store 数据变化 重新对state赋值
  storeChange = () => {
    this.setState(store.getState())
  }

  // 撤回按钮事件，将当前项移到未完成列表中
  withdraw(index) {
    const action = withDrawFinishItemAction(index);
    store.dispatch(action);
  }

  render () {
    return (
      <div className="finish">
        <h1>已完成事项</h1>
        <List
          pagination={{pageSize: 7}}
          size="small"
          bordered
          dataSource={this.state.finishData}
          renderItem={(item,index) => <List.Item>
            <span className="event-item">
              <Tooltip placement = "left" title ={item}>
                <nobr>
                  {item}
                </nobr>
              </Tooltip>
            </span>
            <Button type = "primary" className="floatRight" onClick={this.withdraw.bind(this, index)}>撤回</Button>
          </List.Item>}
        />
      </div>
    )
  }

}

export default Finish;