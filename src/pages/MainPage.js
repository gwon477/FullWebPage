import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';


// 이미지 - 반응형으로 화면 크기마다 나타낼 슬라이드 수 지정
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function MainPage() {
    let [textFade, setTextFade] = useState('');
    let [imgFade, setImgFade] = useState('');
    let [infoFade, setInfoFade] = useState('');
    let [infoTextFade, setInfoTextFade] = useState('');

    // 텍스트, 이미지 - 애니메이션 효과
    useEffect(() => {

        setTimeout(() => { setTextFade('end') }, 500);
        setTimeout(() => { setImgFade('end') }, 1000);
        setTimeout(() => { setInfoFade('end') }, 2000);
        setTimeout(() => { setInfoTextFade('end') }, 2500);
    }, [textFade], [imgFade], [infoFade], [infoTextFade])

    return (

        <>
            <Container className={`start ${textFade}`} >
                <h1 className="main-page_title">
                    "Kelog"
                    <br className="main-page_title_line-break" />
                    - 프로젝트의 창을 열다
                </h1>

                <p className="main-page_sub-title">
                    Kelog은 창의적인 프로젝트와 협업을 위해 탄생한 블로그 웹사이트입니다. <br />
                    한국의 블로그 플랫폼 Velog에서 영감을 받아, 우리는 Kelog를 만들었습니다. <br />
                    이 공간은 프로젝트 팀을 소통의 공간을 제공하며, <br />
                    프로젝트에 대한 소개와 진행 내용을 공유하며 협업을 이룹니다.
                </p>
            </Container>

            <div className={`start ${imgFade}`}>
                {/* 슬라이드 컴포넌트 */}
                <Carousel
                    responsive={responsive}
                    arrows={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1}
                    slidesToSlide={0.05}>
                    {[1, 2, 3].map((a) => {
                        console.log(a);
                        // <img className="main-page_slide-image" src={`/img/고심${a}.jpg`} alt=""/>
                    })}
                    <img className="main-page_slide-image" src={`/img/고심1.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/고심2.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/고심3.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/고심4.jpg`} alt="" />
                    <img className="main-page_slide-image" src={`/img/고심5.jpg`} alt="" />
                </Carousel>
            </div>

            <div className={`start ${infoFade} main-page_info main-page_info-wrap`}>

                <div className={`start ${infoTextFade} main-page_info-title`}>
                    <h2 style={{ fontWeight: '600' }}>Kelog의 비전</h2>
                </div>

                <div className={`start ${infoTextFade} main-page_info-description`}>
                    <h4 style={{ fontWeight: '600' }}>협업의 강화</h4>
                    <p>프로젝트와 업무 협업을 통해 <br />아이디어를 현실로 만들 수 있도록 서로 돕습니다.</p>
                    <h4 style={{ fontWeight: '600' }}>창의성의 장소</h4>
                    <p>Kelog는 다양한 분야와 배경을 가진<br /> 창조적인 개인과 팀이 <br />아이디어를 교환하고 발전시킬 수 있는 <br />공간입니다.</p>
                    <h4 style={{ fontWeight: '600' }}>지식의 공유</h4>
                    <p>우리는 지식의 공유와 성장을 촉진합니다. <br />블로그 프로젝트를 통해 <br />지식을 공유하고 확장합니다.</p>
                </div>

            </div>
        </>
    );
}

export default MainPage;