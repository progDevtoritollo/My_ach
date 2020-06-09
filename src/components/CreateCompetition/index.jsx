import React from "react";
import { Form } from "antd";

import { Button } from "components";
import "./CreateCompetition.scss";

const CreateCompetition = (props) => {
  const handleFinish = (values) => {
    props.onCreate(values);
  };

  return (
    <div className="midle__competition__create">
      <Form onFinish={handleFinish}>
        <Form.Item>
          <div className="lep">
            <h1>создать соревнования секции</h1>
            <Button type="primary" size="large">
              Создать соревнование
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCompetition;
