import React from "react";
import { Row, Col, Space, Button } from "antd";
import { Logo1 } from "../../assets/index";
import { RightOutlined } from "@ant-design/icons";
import "./tingkatan.css";

const Tingkatan = () => {
  const DATA_ITEM = [
    {
      title: "Fundamental Class",
      image: Logo1,
      lv: "100",
      deskripsi:
        "Fundamental Class merupakan kelas yang cocok bagi kamu yang ingin mulai belajar dari tingkatan dasar. ",
    },
    {
      title: "Mastering Class",
      image: Logo1,
      lv: "200",
      deskripsi:
        "Mastering Class merupakan kelas tingkat lanjutan dari Fundamental Class, materinya diperuntukkan kepada programmer dengan level junior.",
    },
  ];

  return (
    <>
      <Row justify="center" align="middle">
        <Col span={20}>
          <h2 className="section-tingkatan">Tingkatan Kelas</h2>
          <Row gutter={24} justify="center" align="middle">
            {DATA_ITEM.map((level) => (
              <Col span={8}>
                <Space direction="horizontal">
                  <Space direction="vertical">
                    <Row justify="center">
                      <Space direction="horizontal">
                        <Row>
                          <img
                            className="level-logo"
                            src={level.image}
                            alt=""
                          />
                          <Space
                            direction="vertical"
                            className="container-title"
                          >
                            <span className="level-title">{level.title}</span>
                            <span className="level-num">Lvl {level.lv} Class</span>
                          </Space>
                        </Row>
                      </Space>

                      <Row justify="center" className="container-descLevel">
                        <p className="level-desc">{level.deskripsi}</p>
                      </Row>
                      <Button className="btn-level" type="primary">
                        Lihat Kelas
                      </Button>
                    </Row>
                  </Space>
                  <Row className="container-icon" align="top">
                    <RightOutlined style={{ fontSize: "50px" }} />
                  </Row>
                </Space>
              </Col>
            ))}
            <Col span={8}>
              <Space direction="horizontal">
                <Space direction="vertical">
                  <Row justify="center">
                    <Space direction="horizontal">
                      <Row>
                        <img className="level-logo" src={Logo1} alt="" />
                        <Space direction="vertical" className="container-title">
                          <span className="level-title">Advance Class</span>
                          <span className="level-num">Lvl 300 Class</span>
                        </Space>
                      </Row>
                    </Space>

                    <Row justify="center" className="container-descLevel">
                      <p className="level-desc">
                        Advance Class adalah tingkatan lanjutan dari Mastering
                        Class, materinya diperuntukkan kepada programmer dengan
                        level middle-senior.
                      </p>
                    </Row>
                    <Button className="btn-soon" type="primary" disabled>
                      Segera Hadir
                    </Button>
                  </Row>
                </Space>
                <Row className="container-icon" align="top">
                  <RightOutlined
                    style={{ fontSize: "50px", color: "transparent" }}
                  />
                </Row>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Tingkatan;
