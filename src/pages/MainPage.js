import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function MainPage() {
    let [first, setfirst] = useState('');
    let [second, setsecond] = useState('');
    let [third, setthird] = useState('');

    useEffect(() => {
        setTimeout(() => { setfirst('end') }, 400);
    }, [first])

    useEffect(() => {
        setTimeout(() => { setsecond('end') }, 500);
    }, [second])

    useEffect(() => {
        setTimeout(() => { setthird('end') }, 700);
    }, [third])
    return (
        <Container >
            <div>
                <div className={`start ${first}`}>
                    <h1 className="main-page_title">
                        "Kelog"
                        - 프로젝트의 창을 열다!"
                    </h1>
                </div>
                <div className={`start ${second}`}>
                    <p className="main-page_sub-title">
                        Kelog은 창의적인 프로젝트와 협업의 미래를 위해 탄생한 블로그 웹사이트입니다. <br />
                        한국의 블로그 플랫폼 Velog에서 영감을 받아, 우리는 Kelog를 만들었습니다. <br />
                        이 공간은 프로젝트 팀을 위한 열린 문을 제공하며, <br />
                        프로젝트에 대한 소개와 진행 내용을 공유하고 협업의 힘을 믿습니다.
                    </p>
                </div>
            </div>
            <div className={`start ${third}`}>
                <p>. <br />
                    .<br />
                    .<br />
                    .<br />
                    .<br /><br />
                    .<br /><br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />

                    .<br />
                    .<br />
                    .<br />

                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />

                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                    .<br />
                </p>
            </div>
        </Container>
    );
}

export default MainPage;