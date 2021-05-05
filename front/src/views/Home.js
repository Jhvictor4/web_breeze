import React, { Component } from 'react'
import {Button, Card, CardGroup, Carousel, Container} from "react-bootstrap";
import '../scss/home.scss'

import sample2 from '../sample2.webp'
import sample3 from '../sample3.webp'
import youtubeIcon from '../youtube-icon.png'
export default class Home extends Component {
  render() {
    return (
      <div>
          <Carousel>
              <Carousel.Item>
                  <img className="d-block" src={sample2} alt=""></img>
                  <p>이미지 1입니다.</p>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block" src={sample3} alt=""></img>
                  <p>이미지 2입니다.</p>
              </Carousel.Item>
          </Carousel>
          <Container>
              <Button className="sns-link" variant="outline-dark" href="https://www.youtube.com/" target="_blank"> <span> <img className="icon" src={youtubeIcon}/> </span> youtube</Button>
              <Button className="sns-link" variant="outline-dark" href=""> 네이버 카페</Button>
              <Button className="sns-link" variant="outline-dark" href=""> instagram</Button>
              <Button className="sns-link" variant="outline-dark" href=""> facebook</Button>
          </Container>

          <CardGroup>
              <Card>
                  <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text></Card.Text>
                  </Card.Body>
              </Card>
          </CardGroup>
      </div>
    )
  }
}
