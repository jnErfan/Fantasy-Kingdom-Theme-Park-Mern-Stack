import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./AtlantisResort.css";

const AtlantisResort = () => {
  return (
    <div className="container galleryContainer3" id="AtlantisResort">
      <div>
        <div className="mb-5">
          <img
            width="20%"
            src="https://fantasykingdom.net/wp-content/uploads/2021/08/relogo-300x151.png"
            alt=""
          />
        </div>
        <div className="fantasyGalleryContainer3 p-3">
          <div>
            <h1 className="gallery3">Gallery</h1>
          </div>
          <div className="px-4">
            <Row xs={2} md={3} lg={4}>
              {[
                "https://fantasykingdom.net/wp-content/uploads/2021/08/1.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/2-1.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/3.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/4-1.jpg",
                "https://i.ibb.co/VQh5wFb/atlas.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/6-1.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/7.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/8.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/1581410229.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/1581410823_4.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/1581410957.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/1581411002.jpeg",
              ].map((image) => (
                <Col key={image}>
                  <Card className="mb-2 bg-transparent imageFrame3 mb-5">
                    <Card.Img variant="top galleryImage3 m-1" src={image} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="videoContainer3">
          <div>
            <h1 className="gallery3">Video</h1>
          </div>
          <div className="">
            <iframe
              className="p-4 mb-4 video3"
              width="85%"
              height="500px"
              src="https://www.youtube.com/embed/7FKJTS45Djg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlantisResort;
