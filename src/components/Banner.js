import React from "react";
import { Carousel, Button } from "antd";
import PropTypes from 'prop-types';
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Button
      className="slick-arrow prev-arrow"
      onClick={onClick}
      shape="circle"
      icon="left"
    />
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button
      className="slick-arrow next-arrow"
      onClick={onClick}
      shape="circle"
      icon="right"
    />
  );
}
class Banner extends React.Component {
  componentWillMount() { 
    
  }
  render() {
    const settings = {
      autoplay: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 500,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
      <Carousel autoplay {...settings}>
        {
          this.props.data.map(item => {
            return (
              <div key={item.targetId} className="carousel-wrap">
                <img src={item.picUrl} alt="" />
              </div>
            );
          })
        }
      </Carousel>
    );
  }
}
Banner.propTypes = {
  data: PropTypes.array.isRequired
};
export default Banner;
