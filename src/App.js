import React from 'react';
import { Layout } from 'antd';
import './styles/style.less';
import './App.css';
import Logo from './components/Logo';
import Router from "./Router";
import {BrowserRouter, NavLink } from "react-router-dom";
import IconFont from './components/IconFont';
import Player from './components/Player'
const { Header, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header className="header">
          <Logo />
        </Header>
        <Layout className="wrapper">
          <Sider style={{ backgroundColor: '#f5f5f5' }}>
              <ul className="menu-list">
                <li><NavLink exact to="/"><IconFont className="iconfont" type="icon-icon-2" />个性推荐</NavLink></li>
                <li><NavLink to="/playlists"><IconFont className="iconfont" type="icon-icon-" />推荐歌单</NavLink></li>
                <li><NavLink to="/newslist"><IconFont className="iconfont" type="icon-icon-1" />最新音乐</NavLink></li>
              </ul>
          </Sider>
          <Content style={{ backgroundColor: '#fff' }}>
            <div className="main-content">
              <Router/>
            </div>
          </Content>
        </Layout>
        <Player />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
