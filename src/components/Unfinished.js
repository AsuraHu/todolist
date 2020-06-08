import React, { Component } from 'react';
import { List,Button, Modal, Input, Tooltip } from 'antd';
import store from '../store/index.js';
import {
  isShowModalAction,
  changeEventsItemAction,
  modalInputChangeAction,
  delUnfinishedListAction,
  addToFinishDataAction
} from '../store/actionCreator';

class Unfinished extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(this.storeChange);

    this.storeChange = this.storeChange.bind(this);
    this.modalInputChange = this.modalInputChange.bind(this);
    this.keyUpChangeItem = this.keyUpChangeItem.bind(this);
  }

  // store 数据变化 重新对state赋值
  storeChange = () => {
    this.setState(store.getState())
  }

  // 是否弹出编辑框
  showModal(index) {
    const action = isShowModalAction(index);
    store.dispatch(action);
  }

  // 编辑框确认事件
  handleOk(index) {
    const action = changeEventsItemAction(index);
    store.dispatch(action);
  }
  // 键盘enter键按下后将input框内容添加到代办事项列表中
  keyUpChangeItem(e) {
    if(e.keyCode === 13) {
      this.handleOk();
    }
  }

  //编辑框取消事件
  handleCancel() {
    const action = isShowModalAction();
    store.dispatch(action);
  }

  //编辑框中的input框可编辑
  modalInputChange(e) {
    const action = modalInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  // 删除事件
  delUnfinishedList(index) {
    const action = delUnfinishedListAction(index);
    store.dispatch(action);
  }

  // 完成按钮事件,将该项添加到已完成的列表中
  finishBtn(index) {
    const action = addToFinishDataAction(index);
    store.dispatch(action);
  }

  render () {
    return (
      <div className="unfinished">
        <h1>代办事项</h1>
        <List
          pagination={{pageSize: 7}}
          size="small"
          bordered
          dataSource={this.state.unfinishedData}
          renderItem={(item,index) => <List.Item>
            < span
              className = "event-item"
              onDoubleClick = {this.showModal.bind(this, index)}
            >
              <Tooltip placement = "left" title = {<div>
                <span>{item}</span>
                <h6 style={{color: 'red'}}>双击待办事项进行编辑！！！</h6>
              </div>} >
                <nobr>
                  {item}
                </nobr>
              </Tooltip>
            </span>
            <Button type = "primary" className="floatRight finish-btn" onClick={this.finishBtn.bind(this, index)}>完成</Button>
            <Button type = "primary" className="floatRight delete-btn" onClick={this.delUnfinishedList.bind(this, index)}>删除</Button>
            <Button type = "primary" className="floatRight" onClick={this.showModal.bind(this, index)}>编辑</Button>
            <Modal
              title = "编辑事件名称······"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this, index)}
              onCancel={this.handleCancel}
            >
              <Input
                value={this.state.modalInputValue}
                onChange={this.modalInputChange}
                onKeyUp={this.keyUpChangeItem}
              ></Input>
            </Modal>
          </List.Item>}
        />
      </div>
    )
  }

}

export default Unfinished;