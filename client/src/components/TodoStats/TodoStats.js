import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

const TodoStats = ({ pending, completed }) => (
  <Col sm={6}>
    <Row>
      <Col sm={6}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Pending Todos</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{pending}</Panel.Body>
        </Panel>
      </Col>
      <Col sm={6}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Completed Todos</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{completed}</Panel.Body>
        </Panel>
      </Col>
    </Row>
  </Col>
);

export default TodoStats;