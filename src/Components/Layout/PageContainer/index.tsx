import React from "react";
import { Col,  Row } from "react-bootstrap";

import { PageContainerStyle } from "./styles";

interface PageContainerProps {
  children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <PageContainerStyle>
      <Row>
        <Col className="col-12">{children}</Col>
      </Row>
    </PageContainerStyle>
  );
}

export default PageContainer;