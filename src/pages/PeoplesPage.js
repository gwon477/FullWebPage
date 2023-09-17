import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './PageCss.css';
import Kwon from '../img/Kwon.png';
import Wong from '../img/Wong.png';
import Yun from '../img/Yun.png';
import Hyeon from '../img/Hyeon.png';

function PeoplesPage() {
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
        <Container>
            <div>
                <div className={`start ${first}`}>
                    <h1 className='peoplespage_title'>
                        함께하는 사람들
                    </h1>
                </div>
                <div className={`start ${second}`}>
                    <p className='peoplespage_subtitle'>
                        "조직의 위대함은 개인 혼자서는 불가능한 일을 가능하게 만드는 것에 있습니다.<br />
                        오늘의집에서 좋은 사람들과 좋은 영향을 주고 받으며 불가능을 가능케하는 팀원들을 소개합니다.<br />
                        함께하는 사람들은 지금 이 순간에도 계속 늘어나고 있습니다"
                    </p>
                </div>
            </div>

            <div className={`start ${third}`}>
                <section className='peoplepage_list peoplepage_wrap'>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" src={Kwon} />
                            </div>
                            <div className='peoplepage_list_item_contents'>

                                <p className='peoplepage_list_item_contents_header'>
                                    <span className='peoplepage_list_item_content_header_name'>
                                        양권상
                                    </span>
                                    <span className='peoplepage_list_item_content_header_job'>
                                        PM
                                    </span>
                                </p>

                                <p className='peoplepage_list_item_contents_description'>
                                    안녕하세요 양권상입니다.
                                </p>

                                <a className='peoplepage_list_item_contents_portfolio'>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src={Wong} />
                            </div>
                            <div className='peoplepage_list_item_contents'>

                                <p className='peoplepage_list_item_contents_header'>
                                    <span className='peoplepage_list_item_content_header_name'>
                                        박상웅
                                    </span>
                                    <span className='peoplepage_list_item_content_header_job'>
                                        Team Member
                                    </span>
                                </p>

                                <p className='peoplepage_list_item_contents_description'>
                                    안녕하세요 박상웅입니다.
                                </p>

                                <a className='peoplepage_list_item_contents_portfolio'>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src={Hyeon} />
                            </div>
                            <div className='peoplepage_list_item_contents'>

                                <p className='peoplepage_list_item_contents_header'>
                                    <span className='peoplepage_list_item_content_header_name'>
                                        안현영
                                    </span>
                                    <span className='peoplepage_list_item_content_header_job'>
                                        Team Member
                                    </span>
                                </p>

                                <p className='peoplepage_list_item_contents_description'>
                                    안녕하세요 안현영입니다.
                                </p>

                                <a className='peoplepage_list_item_contents_portfolio'>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src={Yun} />
                            </div>
                            <div className='peoplepage_list_item_contents'>

                                <p className='peoplepage_list_item_contents_header'>
                                    <span className='peoplepage_list_item_content_header_name'>
                                        홍윤기
                                    </span>
                                    <span className='peoplepage_list_item_content_header_job'>
                                        Team Member
                                    </span>
                                </p>

                                <p className='peoplepage_list_item_contents_description'>
                                    안녕하세요 홍윤기입니다.
                                </p>

                                <a className='peoplepage_list_item_contents_portfolio'>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Container>

    );
}

export default PeoplesPage;