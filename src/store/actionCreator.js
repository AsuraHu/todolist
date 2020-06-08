import {
  ADD_UNFINISHEDDATA_ITEM,
  CHANGE_INPUT_VALUE,
  IS_SHOW_MODAL,
  CHANGE_EVENTS_ITEM,
  MODAL_INPUT_CHANGE,
  DEL_UNFINISHED_LIST,
  ADD_TO_FINISH_DATA,
  WITHDRAW_FINISH_ITEM,
} from './actionType';

export const addUnfinishedDataItemAction = () =>({
  type: ADD_UNFINISHEDDATA_ITEM
});

export const changeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const isShowModalAction = (num) => ({
  type: IS_SHOW_MODAL,
  num
});

export  const changeEventsItemAction = (value) => ({
  type: CHANGE_EVENTS_ITEM,
  value
});

export const modalInputChangeAction = (value) => ({
  type: MODAL_INPUT_CHANGE,
  value
});

export const delUnfinishedListAction = (value) => ({
  type: DEL_UNFINISHED_LIST,
  value
});

export const addToFinishDataAction = (value) => ({
  type: ADD_TO_FINISH_DATA,
  value
});

export const withDrawFinishItemAction = (value) => ({
  type: WITHDRAW_FINISH_ITEM,
  value
});