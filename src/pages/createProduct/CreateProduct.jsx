import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/favicon2.png";
import "./createProduct.css";
import { Col, Row } from "antd";
import {
  Card,
  Form,
  Input,
  Select,
  Upload,
  Radio,
  Space,
  Button,
  Modal,
  Table,
  Popconfirm,
} from "antd";
import Navbar from "../../component/layouts/header/navbar.jsx";
import { TABLE_CREATE_PRODUK } from "./Constant";
import { Link, useParams } from "react-router-dom";

const CreateProduct = () => {
  const [value, setValue] = useState(1);
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [dataTable, setDataTable] = useState(TABLE_CREATE_PRODUK);
  const [key, setKey] = useState(TABLE_CREATE_PRODUK.length + 1);
  const [isEdit, setIsEdit] = useState();
  const [rowData, setRowData] = useState(false);
  const [formProduct] = Form.useForm();
  // const { id } = useParams();
  // const data = id ? TABLE_CREATE_PRODUK.filter((item) => item.key === id) : TABLE_CREATE_PRODUK;

  const TABLE_COLUMNS = [
    {
      title: "No.",
      dataIndex: "key",
      // render: (text, data) => <Link to={data.key}>{text}</Link>
    },
    {
      title: "Nama Product",
      dataIndex: "namaProduct",
      key: "namaProduct",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
    },
    // {
    //   title: "Image of Product",
    //   dataIndex: "gambarProduct",
    //   key: "gambarProduct",
    // },
    {
      title: "Product Freshness",
      dataIndex: "productFreshness",
      key: "productFreshness",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      key: "deskripsi",
    },
    {
      title: "Harga",
      dataIndex: "harga",
      key: "harga",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        TABLE_CREATE_PRODUK.length >= 1 ? (
          <Space>
            <Button
              onClick={() => handleEdit(record)}
              type="primary"
              style={{ backgroundColor: "green" }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.key)}
            >
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  useEffect(() => {
    window.alert("Welcome");
  }, []);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);

    setValue(e.target.value);
  };

  const bLogo = {
    web: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/900px-BMW_logo_%28gray%29.svg.png?20210211152514",
    local: Logo,
  };

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    alert(randomNumber);
  };

  const onAdd = (values) => {
    const newData = {
      key: key,
      ...values,
    };
    setDataTable([...dataTable, newData]);
    setKey(key + 1);
    formProduct.resetFields();
    setIsModalOpen(true);
    setModalData({ ...values });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDelete = (row_key) => {
    const newData = dataTable.filter((item) => item.key !== row_key);
    setDataTable(newData);
  };

  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  return (
    <>
      {/* Component Navbar */}
      <Navbar />

      <Row justify="center" style={{ marginTop: 60 }}>
        <Space direction="vertical">
          <Row justify="center">
            <Col align="middle" span={13}>
              <img src={bLogo.local} className="logo" alt="pic" />
              <h2>{article.title.en}</h2>
              <p>{article.description.en}</p>
            </Col>
          </Row>

          <Row justify="center">
            <Card
              bordered={false}
              style={{
                width: 485,
              }}
            >
              <Form
                layout="vertical"
                name="form-product"
                form={formProduct}
                onFinish={onAdd}
              >
                <h3>Detail Product</h3>

                {/* Nama Product */}
                <Form.Item
                  label="Product Name"
                  name="namaProduct"
                  rules={[
                    {
                      required: true,
                      message: "Nama produk harus diisi!",
                    },
                    {
                      pattern: /^[\w\s]{1,10}$/,
                      message:
                        "Nama produk tidak boleh lebih dari 10 karakter!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* Kategori */}
                <Form.Item
                  label="Product Category"
                  name="kategori"
                  rules={[
                    {
                      required: true,
                      message: "Produk kategori harus dipilih!",
                    },
                  ]}
                >
                  <Select placeholder="Choose...">
                    <Select.Option value="Fashion">Fashion</Select.Option>
                    <Select.Option value="Food">Food</Select.Option>
                    <Select.Option value="Hobby">Hobby</Select.Option>
                  </Select>
                </Form.Item>

                {/* Image Product */}
                <Form.Item
                  label="Image of Product"
                  name="gambarProduct"
                  valuePropName="fileList"
                >
                  <Upload>
                    <Button>Choose File</Button> No file Choosen
                  </Upload>
                </Form.Item>

                {/* Product Radio */}
                <Form.Item
                  label="Product Freshness"
                  name="productFreshness"
                  rules={[
                    {
                      required: true,
                      message: "Product freshness harus diisi!",
                    },
                  ]}
                >
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={"Brand New"}>Brand New</Radio>
                      <Radio value={"Second Hand"}>Second Hand</Radio>
                      <Radio value={"Refurbished"}>Refurbished</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>

                {/* Deskripsi */}
                <Form.Item
                  label="Additional Description"
                  name="deskripsi"
                  rules={[
                    { required: true, message: "Deskripsi harus diisi!" },
                  ]}
                >
                  <TextArea rows={4}></TextArea>
                </Form.Item>

                {/* Harga */}
                <Form.Item
                  label="Input Price"
                  name="harga"
                  rules={[
                    {
                      pattern: /^\d$/,
                      message: "Price is not valid, input number only!",
                    },
                  ]}
                >
                  <Input prefix="$" placeholder="1" />
                </Form.Item>

                <Row justify="center">
                  <Button
                    style={{
                      width: 400,
                      backgroundColor: "#0D6EFD",
                      color: "white",
                      marginBottom: 50,
                      marginTop: 50,
                    }}
                    htmlType="Submit"
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </Card>
          </Row>

          <Row justify="center">
            <Button
              style={{
                width: 400,
                backgroundColor: "#000000",
                color: "white",
                marginBottom: 50,
                marginTop: 50,
              }}
              onClick={handleClick}
            >
              Random Number
            </Button>
          </Row>
        </Space>

        <Card>
          <Table columns={TABLE_COLUMNS} dataSource={dataTable} />
        </Card>
      </Row>

      <Modal
        title="Biodata"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>Product Name: {modalData.namaProduct}</ul>
        <ul>Product Category: {modalData.kategori}</ul>
        <ul>Product Freshness: {modalData.productFreshness}</ul>
        <ul>Price: {modalData.harga}</ul>
      </Modal>
    </>
  );
};

export default CreateProduct;
