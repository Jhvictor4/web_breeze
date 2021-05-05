import React, {Component} from 'react';
import '../scss/intro.scss'
import {Container} from "react-bootstrap";
const breeze_intro = "산들바람이 행복한 멜로디가 되어 머무는\n" +
    "브리즈 음악교습소 방문을 환영합니다.\n" +
    "저희 학원은\n" +
    "피아노, 플롯, 칼림바 악기 수업과 더불어 매달 향상연주회를 통해 자신감을 키울 수 있습니다.\n" +
    "또한 시대별 작곡가특강, 다양한 교구를 통해 음악을 쉽게 그리고 재미있게 접근하고 각자에게 맞는 커리큘럼으로 음악적 성장과 자신의 감정을 표현할 수 있도록 함께 합니다."

class Intro extends Component {
    render() {
        return (
            <Container>
                <div className="Intro">
                    <br/>
                    <div className="Intro-content">
                        <h2>인사말</h2>
                        <br/>
                        {breeze_intro}
                    </div>
                    <br/>
                </div>
            </Container>
        );
    }
}

export default Intro;