import React from "react";
import { Modal as Modals } from "antd";

import "./style.css";

export default function Modal({
  title,
  visible,
  onCancel,
  onOk,
  footer,
  centered = true,
  width = "90rem",
  children,
}) {
  return (
    <>
      <Modals
        centered={centered}
        title={<h1>{title}</h1>}
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        width={width}
        footer={footer ? footer : null}
      >
        {children}
      </Modals>
    </>
  );
}
