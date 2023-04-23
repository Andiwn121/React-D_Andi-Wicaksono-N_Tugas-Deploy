import React from "react";
import Navbar from "../../component/layouts/header/navbar";
import "./landingPages.css";
import { useNavigate } from "react-router-dom";
import { Hero, Ujian } from "../../assets/index";
import { Row, Col, Space, Button, Card, Input } from "antd";
import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const LandingPages = () => {
  return (
    <>
      <Navbar />
      {/* Get Started */}
      <Row justify="center" align="middle" className="container-start">
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <Space direction="vertical">
                <h1 className="text-better">
                  Better Solutions For Your Business
                </h1>
                <p className="desc-better">
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <Space direction="horizontal">
                  <Link to="/create-product">
                    <Button className="btn-blue" type="primary" shape="round">
                      Get Started
                    </Button>
                  </Link>
                  <Button type="link">Watch Video</Button>
                </Space>
              </Space>
            </Col>
            <Col>
              <img src={Hero} alt="pic-hero" />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Card Content */}
      <Row justify="center" align="middle">
        <Col span={19}>
          <Space direction="vertical">
            <h1 className="text-product">PRODUCT LIST</h1>
            <Row gutter={125}>
              <Col>
                <Card
                  style={{ width: 300 }}
                  cover={<img src={Ujian} alt="bg-ujian" />}
                >
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Row justify="space-between" align="middle" gutter={107}>
                    <Col>
                      <Button>Detail View</Button>
                    </Col>
                    <Col>
                      <span>9 mins</span>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ width: 300 }}
                  cover={<img src={Ujian} alt="bg-ujian" />}
                >
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Row justify="space-between" align="middle" gutter={107}>
                    <Col>
                      <Button>Detail View</Button>
                    </Col>
                    <Col>
                      <span>9 mins</span>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ width: 300 }}
                  cover={<img src={Ujian} alt="bg-ujian" />}
                >
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <Row justify="space-between" align="middle" gutter={107}>
                    <Col>
                      <Button>Detail View</Button>
                    </Col>
                    <Col>
                      <span>9 mins</span>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row justify="end" style={{ marginTop: 34, marginBottom: 27 }}>
              <Button className="btn-blue" type="primary">
                Load More...
              </Button>
            </Row>
          </Space>
        </Col>
      </Row>

      {/* Join News */}
      <Row justify="center" align="middle" className="container-news">
        <Col span={12}>
          <Row justify="center" align="middle">
            <Space direction="vertical">
              <h3 className="text-join">Join Our Newsletter</h3>
              <p className="desc-join">
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <Space direction="horizontal" className="container-form">
                <Input className="input-subs" />
                <Button className="btn-blue" type="primary" shape="round">
                  Subscribe
                </Button>
              </Space>
            </Space>
          </Row>
        </Col>
      </Row>

      {/* Footer */}
      <Row justify="center" align="middle">
        <Col span={19}>
          <Row justify="space-around" style={{ marginTop: 50 }}>
            <Col span={4}>
              <h2 className="company">ARSHA</h2>
              <Space className="address-company" direction="vertical">
                <p>A108 Adam Street New York, NY 535022 United States</p>
                <p>
                  <span>
                    <span style={{ fontWeight: "bold" }}>Phone: </span>
                    +62 878 6494 5868
                  </span>
                </p>
                <p>
                  <span>
                    <span style={{ fontWeight: "bold" }}>Email: </span>{" "}
                    andiwn121@gmail.com
                  </span>
                </p>
              </Space>
            </Col>
            <Col span={4}>
              <h2 className="span-item">Usefull Links</h2>
              <ul>
                <li className="list">Home</li>
                <li className="list">Contact</li>
                <li className="list">Footer</li>
                <li className="list">Dropdown</li>
              </ul>
            </Col>
            <Col span={4}>
              <h2 className="span-item">Our Services</h2>
              <ul>
                <li className="list">Web Design</li>
                <li className="list">Web Development</li>
                <li className="list">Product Manager</li>
                <li className="list">Marketing</li>
                <li className="list">Graphic Design</li>
              </ul>
            </Col>
            <Col span={4}>
              <h2 className="span-item">Our Social Network</h2>
              <p className="desc-social" style={{ marginTop: 20 }}>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <Space wrap direction="horizaontal">
                <Button
                  className="btn-link"
                  type="primary"
                  shape="circle"
                  icon={<InstagramOutlined />}
                  size="middle"
                />
                <Button
                  className="btn-link"
                  type="primary"
                  shape="circle"
                  icon={<TwitterOutlined />}
                  size="middle"
                />
                <Button
                  className="btn-link"
                  type="primary"
                  shape="circle"
                  icon={<YoutubeOutlined />}
                  size="middle"
                />
                <Button
                  className="btn-link"
                  type="primary"
                  shape="circle"
                  icon={<GithubOutlined />}
                  size="middle"
                />
                <Button
                  className="btn-link"
                  type="primary"
                  shape="circle"
                  icon={<MailOutlined />}
                  size="middle"
                />
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LandingPages;
