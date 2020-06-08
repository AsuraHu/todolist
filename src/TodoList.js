import React, { Fragment, Component } from 'react';
import { Layout, Divider } from 'antd';
import TodoHeader from './components/TodoHeader';
import Unfinished from './components/Unfinished';
import Finish from './components/Finish';
import TodoFooter from './components/TodoFooter';
import store from './store';

const { Header, Footer, Content } = Layout;

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Header className="todo-header">
            <TodoHeader />
          </Header>
          <Layout>
            <Content className="todo-content">
              <Unfinished />
              <Divider />
              <Finish />
            </Content>
          </Layout>
          <Footer className="todo-footer">
            <TodoFooter />
          </Footer>
      </Layout>
      </Fragment>
    );
  }

}

export default TodoList;
