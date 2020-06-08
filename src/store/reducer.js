import { message } from 'antd';
import {
  ADD_UNFINISHEDDATA_ITEM,
  CHANGE_INPUT_VALUE,
  IS_SHOW_MODAL,
  CHANGE_EVENTS_ITEM,
  MODAL_INPUT_CHANGE,
  DEL_UNFINISHED_LIST,
  ADD_TO_FINISH_DATA,
  WITHDRAW_FINISH_ITEM
} from './actionType';

const defaultStates = {
  inputValue: '',
  unfinishedData: ['html5', 'css3', 'javascript', '如果这里的文字过多，超出给定宽度，超出部分将以“...”展示'],
  finishData: ['html', 'css'],
  visible: false,
  num: "",
  modalInputValue: "",
  
};

export default (state = defaultStates, action) => {
  // 头部input框可编辑
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  // 添加按钮，将input框内容添加到代办事项列表中
  if (action.type === ADD_UNFINISHEDDATA_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    if(newState.inputValue !== '') {
      newState.unfinishedData.unshift(newState.inputValue);
      newState.inputValue = '';
    }else {
      message.warning('不能为空')
    }
    
    return newState;
  }

  // 是否展示对话框
  if (action.type === IS_SHOW_MODAL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.visible = !newState.visible;
    newState.num = action.num;
    return newState;
  }

  // 对话框input框可输入
  if (action.type === MODAL_INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.modalInputValue = action.value;
    return newState;
  }

  // 编辑框确认按钮，将列表对应项事件改为对话框中input框输入的内容
  if (action.type === CHANGE_EVENTS_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.modalInputValue !== '') {
      newState.visible = !newState.visible;
      newState.unfinishedData[newState.num] = newState.modalInputValue;
      newState.modalInputValue = ''
    } else {
      newState.visible = !newState.visible;
    }
    return newState;
  }

  // 删除按钮的事件
  if (action.type === DEL_UNFINISHED_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.unfinishedData.splice(action.value, 1);
    return newState;
  }

  // 完成按钮的事件， 将该项添加到已完成的列表中
  if (action.type === ADD_TO_FINISH_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.finishData.unshift(newState.unfinishedData[action.value]);
    newState.unfinishedData.splice(action.value, 1);
    return newState;
  }

  // 撤回按钮事件，将该项移动到未完成列表中
  if (action.type === WITHDRAW_FINISH_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.unfinishedData.unshift(newState.finishData[action.value]);
    newState.finishData.splice(action.value, 1);
    return newState;
  }

  return state;
}