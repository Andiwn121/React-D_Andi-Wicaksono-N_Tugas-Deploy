import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link to="/create-product">Create Product</Link>,
    key: "/create-product",
  },
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/about-us">About Us</Link>,
    key: "/about-us",
  },
  {
    label: <Link to="/landing-pages">Landing Pages</Link>,
    key: "/landing-pages",
  },


  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "6",
  },

  // {
  //   label: <Link to="/calculator">Calculator</Link>,
  //   key: "4",
  // },
  // {
  //   label: <Link to="/nilai-uas">Nilai Uas</Link>,
  //   key: "5",
  // },
  //   {
  //     label: <Link to="/about-us">About Us</Link>,
  //     key: "6",
  //   },
  //   {
  //     label: <Link to="/fish-resource">Fish Resource</Link>,
  //     key: "7",
  //   },
];
