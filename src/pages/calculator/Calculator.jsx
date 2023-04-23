import React from "react";
import "./calculator.css";
import { Row, Col, Card, Button, Input } from "antd";
import { useState } from "react";

const Calculator = () => {
  const clearNumber = {
    hasil: 0,
  };

  const [angka, setData] = useState(clearNumber);

  return (
    <div>
      <Card title="Calculator">
        <Input
          name="hasil"
          value={angka.hasil}
          style={{
            width: 400,
            height: 50,
            marginBottom: 25,
          }}
          disabled
        ></Input>

        <Row
          gutter={[15, 15]}
          justify="center"
          align="middle"
          style={{ width: 420 }}
        >
          {/* Baris 1 */}
          <Col span={18}>
            <Button
              type="primary"
              size="large"
              style={{
                width: 300,
              }}
              onClick
            >
              C
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              /
            </Button>
          </Col>

          {/* Baris 2 */}
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              7
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              8
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              9
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              x
            </Button>
          </Col>

          {/* Baris 3 */}
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              4
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              5
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              6
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              -
            </Button>
          </Col>

          {/* Baris 4 */}
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              1
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              2
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              3
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              +
            </Button>
          </Col>

          {/* Baris 5 */}
          <Col span={12}>
            <Button
              size="large"
              style={{
                width: 190,
              }}
            >
              0
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              ,
            </Button>
          </Col>
          <Col span={6}>
            <Button
              size="large"
              style={{
                width: 85,
              }}
            >
              =
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Calculator;
