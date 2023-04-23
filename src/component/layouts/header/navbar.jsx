import React, { useState } from 'react';
import { Row, Button, Space } from 'antd';



function Navbar() {

  const [size] = useState('large');
  return (
    <>
      <Row justify="space-between">
        <h2>Simple header</h2>
        {/* <Button type='primary' size='medium'>tes</Button> */}
        <Space wrap>
          <Button type="primary" size={size}
            style={{
              backgroundColor: '#0D6EFD',
              color: 'white'
            }}>
            Home
          </Button>
          <Button size={size} style={{ border: "transparent" }}>Features</Button>
          <Button size={size} style={{ border: "transparent" }}>Pricing</Button>
          <Button size={size} style={{ border: "transparent" }}>FAQs</Button>
          <Button size={size} style={{ border: "transparent" }}>About</Button>
        </Space>
      </Row>
    </>
  );
}

export default Navbar;
