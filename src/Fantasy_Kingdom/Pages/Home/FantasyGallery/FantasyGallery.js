import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./FantasyGallery.css";

const FantasyGallery = () => {
  return (
    <div className="container galleryContainer" id="FantasyGallery">
      <div>
        <div className="mb-5">
          <img
            width="35%"
            src="https://fantasykingdom.net/wp-content/uploads/2020/10/FKC-Logo-300x150.png"
            alt=""
          />
        </div>
        <div className="fantasyGalleryContainer p-3 pb-5">
          <div>
            <h1 className="gallery">Gallery</h1>
          </div>
          <div className="px-4">
            <Row xs={2} md={3} lg={4}>
              {[
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F-4Z3A5041.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR4971.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5695-1.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5902.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR7446.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR7595.jpg",
                "https://tourscanner.com/blog/wp-content/uploads/2020/06/Busch-Gardens-Tampa-Bay-United-States.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F-4Z3A5015.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR4704.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5235.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5568-1.jpg",
                "https://c0.wallpaperflare.com/preview/255/133/152/ride-person-sky-amusement.jpg",
              ].map((image) => (
                <Col key={image}>
                  <Card className="mb-2 bg-transparent imageFrame">
                    <Card.Img variant="top galleryImage m-1" src={image} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="videoContainer">
          <div>
            <h1 className="gallery">Video</h1>
          </div>
          <div className="">
            <iframe
              className="p-4 mb-4 video"
              width="85%"
              height="500px"
              src="https://www.youtube.com/embed/LKTOekTKJpc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyGallery;
