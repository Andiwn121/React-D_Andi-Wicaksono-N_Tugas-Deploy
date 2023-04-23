import React from 'react';
import "./loadingComponent.css";
import { Spin } from "antd";

const LoadingComponent = () => {
    return (
        <div>
            <Spin className='loading-container' tip="Loading..." size="large" />
        </div>
    );
}

export default LoadingComponent;
