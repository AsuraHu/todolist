import React, { Component } from 'react';
import { Button, Input } from 'antd';
import store from '../store';
import {
  addUnfinishedDataItemAction,
  changeInputValueAction
} from '../store/actionCreator';

class TodoHeader extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();
    store.subscribe(this.storeChange);

    this.keyUpAddUnfinishedData = this.keyUpAddUnfinishedData.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  // store 数据变化 重新对state赋值
  storeChange = () => {
    this.setState(store.getState())
  }

  // 按下enter键将input框的内容添加到未完成的列表
  keyUpAddUnfinishedData(e) {
    if (e.keyCode === 13) {
      this.addItem();
    }
  }

  // 增加新项目
  addItem() {
    const action = addUnfinishedDataItemAction();
    store.dispatch(action);
  }

  // 头部input框可编辑
  inputChange(e) {
    const action = changeInputValueAction(e.target.value);
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <h1 className="header-title">To-Do List</h1>
        <Input
          className = "header-input"
          placeholder = "输入代办事项"
          value = {this.state.inputValue}
          onChange={this.inputChange}
          onKeyUp={this.keyUpAddUnfinishedData}
        />
        <Button
          type="primary"
          className="header-button"
          onClick={this.addItem}
        >
          添加
        </Button>
      </div>
    )
  }
}

export default TodoHeader;