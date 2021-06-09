import React, { useState } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadImg = ({ url }) => {
  return (
    <Upload
      action={url}
      name="arquivo"
      listType="picture"
      className="upload-list-inline"
      maxCount="1"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};
export default UploadImg;
