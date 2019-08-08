import React from "react";
import Banner from "../components/Banner";
import Playlist, { Meta } from "../components/Playlist/Playlist";
import SubTitle from "../components/SubTitle";
import { Link } from "react-router-dom";
import { fetchBanner } from "../api/banner";
import { getPlaylist,getNewSong } from "../api/playlist";
import { List, Avatar } from "antd";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [],
      playlist: [],
      newSongsL: [],
      newSongsR: []
    };
  }
  async initData() {
    const promises = [fetchBanner(), getPlaylist(), getNewSong()];
    const [data, list, newSongs] = await Promise.all(promises);
    const songsData = newSongs.result;
    songsData.forEach((item,index) => { 
      item.key = index + 1;
    })
    this.setState({
      banner: data.banners,
      playlist: list.result.slice(0, 10),
      newSongsL: songsData.slice(0, 5),
      newSongsR: songsData.slice(5, 10),
    });
  }
  componentWillMount() {
    this.initData();
  }
  render() {
    return (
      <div className="main-content-wrap">
        <Banner data={this.state.banner} />
        <div className="section-wrap">
          <SubTitle title="推荐歌单">
            <Link to="/">更多</Link>
          </SubTitle>
          <div className="playlist">
            {this.state.playlist.map(item => {
              return (
                <Playlist
                  className="playlist-card"
                  cover={item.picUrl}
                  description={item.copywriter}
                  key={item.id}
                >
                  <Meta title={item.name} />
                </Playlist>
              );
            })}
          </div>
        </div>
        <div className="section-wrap">
          <SubTitle title="推荐歌单">
            <Link to="/">更多</Link>
          </SubTitle>
          <div className="list-wrap">
            <div className="list">
              <List
                split={false}
                itemLayout="horizontal"
                dataSource={this.state.newSongsL}
                renderItem={item => (
                  <List.Item>
                    <span className="item-number">{item.key}</span>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.song.album.picUrl} />
                      }
                      title={item.name}
                      description={item.song.artists[0].name}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className="list">
              <List
                split={false}
                itemLayout="horizontal"
                dataSource={this.state.newSongsR}
                renderItem={item => (
                  <List.Item>
                    <span className="item-number">{item.key}</span>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.song.album.picUrl} />
                      }
                      title={item.name}
                      description={item.song.artists[0].name}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
