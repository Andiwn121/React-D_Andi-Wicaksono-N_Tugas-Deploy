import React, { useState, useEffect } from "react";
import "./formComponent.css";
import {
  Button,
  Form,
  Input,
  Typography,
  Card,
  Space,
  Select,
  Radio,
  Modal,
  DatePicker,
  Table,
  Popconfirm,
} from "antd";
import dayjs from "dayjs";
import { INITIAL_TABLE_DATA } from "./constants";
import Gap from "../../component/gap/gap";
import {
  useDeleteBiodata,
  useGetBiodata,
  usePostBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";

const FormComponent = () => {
  const [value, setValue] = useState(1);
  const { Title } = Typography;
  const { TextArea } = Input;

  const [data, setData] = useState(INITIAL_TABLE_DATA);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const [formBio] = Form.useForm();
  const [key, setKey] = useState(INITIAL_TABLE_DATA.length + 1);
  const [isEdit, setIsEdit] = useState();
  const [rowData, setRowData] = useState(false);

  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();

  useEffect(() => {
    getBiodata();
  }, []);

  const TABLE_COLUMNS = [
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   key: "avatar",
    //   render: (_, record) =>{
    //     <img src={record.avatar} alt="avatar" />
    //   }
    // },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <Button
              type="primary"
              onClick={() => handleEdit(record)}
              style={{ backgroundColor: "green" }}
              loading={isLoadingUpdateBiodata}
            >
              Edit
            </Button>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const onAdd = (values) => {
    // const newData = {
    //   key: key,
    //   ...values,
    // };
    // setData([...data, newData]);
    // setKey(key + 1);

    createBiodata(values, () => {
      getBiodata();
      formBio.resetFields();
    });

    // setIsModalOpen(true);
    // setModalData({ ...values });
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  const onDelete = (row_id) => {
    // const newData = data.filter((item) => item.key !== row_key);
    // setData(newData);

    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  const onEdit = (values) => {
    // const key = rowData?.key;
    // const newData = [...data];
    // const index = data?.findIndex((item) => key === item.key);

    // newData?.splice(index, 1, {
    //   key: key,
    //   ...values,
    // });

    // setData(newData);
    // setIsEdit(false);
    // setRowData();
    const id = rowData.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });
  };

  return (
    <>
      <Space direction="vertical" className="container-space">
        <Title>Form Biodata</Title>

        {/* Form */}
        <Card>
          <Form
            layout="horizontal"
            name="form-bio"
            form={formBio}
            onFinish={isEdit ? onEdit : onAdd}
            labelAlign="left"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            fields={[
              {
                name: ["firstName"],
                value: rowData?.firstName,
              },
              {
                name: ["lastName"],
                value: rowData?.lastName,
              },
              {
                name: ["nim"],
                value: rowData?.nim,
              },
              {
                name: ["address"],
                value: rowData?.address,
              },
            ]}
          >
            {/* First Name */}
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please Input Your First Name!",
                },
              ]}
            >
              <Input
                className="input-text"
                placeholder="Input your First Name"
              />
            </Form.Item>

            {/* Last Name */}
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Last Name!",
                },
              ]}
            >
              <Input
                className="input-text"
                placeholder="Input your Last Name"
              />
            </Form.Item>

            {/* NIM */}
            <Form.Item
              name="nim"
              label="NIM"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Last Name!",
                },
              ]}
            >
              <Input className="input-text" placeholder="Input your NIM" />
            </Form.Item>

            {/* Tempat Lahir */}
            {/* <Form.Item
              name="tempatLahir"
              label="Tempat Lahir"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Tempat Lahir!",
                },
              ]}
            >
              <Input className="input-text" />
            </Form.Item> */}

            {/* Tanggal Lahir */}
            {/* <Form.Item
            label="Tanggal Lahir"
            name="dateOfBirth"
            rules={[
                {
                  required: true,
                  message: "Please Select Your Birthdate!",
                },
              ]}
            >
              <DatePicker onChange={onChange} />
            </Form.Item> */}

            {/* Alamat */}
            <Form.Item
              label="Alamat"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Alamat!",
                },
              ]}
            >
              <TextArea rows={4} placeholder="Input your Address"></TextArea>
            </Form.Item>

            {/* Alamat Email */}
            {/* <Form.Item
              name="email"
              label="Alamat Email"
              rules={[
                {
                  type: "email",
                  message: "Email is not valid!",
                },
                {
                  required: true,
                  message: "Please Input Your Alamat Email!",
                },
              ]}
            >
              <Input className="input-text" />
            </Form.Item> */}

            {/* Nomor Telepon */}
            {/* <Form.Item
              name="nomorTelepon"
              label="Nomor Telepon"
              rules={[
                {
                  pattern: /^\d{11}$/,
                  message: "Phone number is not valid!",
                },
                {
                  required: true,
                  message: "Please Input Your Nomor Telepon!",
                },
              ]}
            >
              <Input className="input-text" addonBefore="+62" />
            </Form.Item> */}

            {/* Semester */}
            {/* <Form.Item
              label="Semester"
              name="semester"
              rules={[{ required: true }]}
            >
              <Select style={{ width: 150 }} placeholder="Pilih Semester...">
                <Option value="Semester 1">Semester 1</Option>
                <Option value="Semester 2">Semester 2</Option>
                <Option value="Semester 3">Semester 3</Option>
                <Option value="Semester 4">Semester 4</Option>
                <Option value="Semester 5">Semester 5</Option>
                <Option value="Semester 6">Semester 6</Option>
                <Option value="Semester 7">Semester 7</Option>
                <Option value="Semester 8">Semester 8</Option>
              </Select>
            </Form.Item> */}

            {/* Agama */}
            {/* <Form.Item label="Agama">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>Islam</Radio>
                  <Radio value={2}>Kristen</Radio>
                  <Radio value={3}>Hindu</Radio>
                  <Radio value={4}>Buddha</Radio>
                  <Radio value={5}>Konghuchu</Radio>
                  <Radio value={6}>Lainnya</Radio>
                </Space>
              </Radio.Group>
            </Form.Item> */}

            {/* Summary */}
            {/* <Form.Item
              label="Summary"
              name="summary"
              rules={[
                {
                  required: true,
                  message: "Please Input Your Summary!",
                },
              ]}
            >
              <TextArea rows={4}></TextArea>
            </Form.Item> */}

            {isEdit ? (
              <Space>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button type="danger" onClick={handleCancel}>
                  Cancel
                </Button>
              </Space>
            ) : (
              <Button
                type="primary"
                htmlType="Submit"
                loading={isLoadingCreateBiodata}
              >
                Submit
              </Button>
            )}
          </Form>
        </Card>
        <Gap height={40} />
        <Card>
          <Table
            rowKey="id"
            columns={TABLE_COLUMNS}
            dataSource={biodata}
            loading={isLoadingBiodata || isLoadingDeleteBiodata}
          />
        </Card>
      </Space>

      {console.log({biodata})}

      <Modal
        title="Biodata"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ul>
          <li>First Name: {modalData.firstName}</li>
          <li>Last Name: {modalData.lastName}</li>
          <li>NIM: {modalData.nim}</li>
          <li>Alamat: {modalData.address}</li>
          {/* <li>Tanggal Lahir: {dayjs(modalData.dateOfBirth).format("DD MMMM YYYY")}</li> */}
        </ul>
      </Modal>
    </>
  );
};

export default FormComponent;
