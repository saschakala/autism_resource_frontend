import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Copyright = () => {
    return(
        <div class="main-footer">
            <Container align="center" fluid style={{textAlign: 'center'}}>
                <Row align="center">
                    <Col>
                        <p id="copyright">© 2021 Sascha Kala All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )


}

export default Copyright 