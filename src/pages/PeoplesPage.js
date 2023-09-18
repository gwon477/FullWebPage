import { Container } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import './PageCss.css';
import '../App.css';


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

    const YangGit = useCallback(() => {
        window.open(
            "https://github.com/gwon477"
        );
    }, []);

    const Wonggit = useCallback(() => {
        window.open("https://github.com/xxng1");
    }, []);

    const Hyeongit = useCallback(() => {
        window.open("https://github.com/An-hyeonyoung");
    }, []);

    const Yungit = useCallback(() => {
        window.open("https://github.com/dbsrl1026");
    }, []);

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
                        KeLog에서 좋은 사람들과 좋은 영향을 주고 받으며 불가능을 가능케하는 팀원들을 소개합니다.<br />
                        저희 팀원들은 지금도 함께 발전하고 있습니다."
                    </p>
                </div>
            </div>

            <div className={`start ${third}`}>
                <section className='peoplepage_list peoplepage_wrap'>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" src='img\gwonsangprofile_img.png' />
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

                                <a className='peoplepage_list_item_contents_portfolio' onClick={YangGit}>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src='img\Sangwongprofile_img.jpg' />
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

                                <a className='peoplepage_list_item_contents_portfolio' onClick={Wonggit}>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src='img/Hyeonprofile_img.jpg' />
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

                                <a className='peoplepage_list_item_contents_portfolio' onClick={Hyeongit}>
                                    포트폴리오 보러가기
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='peoplepage_list_item_wrap'>
                        <div className='peoplepage_list_item peoplepage_list_item_portfolio'>

                            <div className='peoplepage_list_item_image'>
                                <img className="peoplepage_list_item_image_item" alt="pm" src='img\Yungyiprofile_img.png' />
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

                                <a className='peoplepage_list_item_contents_portfolio' onClick={YangGit}>
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