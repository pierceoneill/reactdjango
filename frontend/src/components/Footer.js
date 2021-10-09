import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>© Kenmare Shop. All rights reserved 2021. Designed and built with <i class="fa fa-heart" style={{color: 'red'}}></i> (and super secure!)<a href="https://pierceoneill.ie"> Pierce O'Neill</a></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
