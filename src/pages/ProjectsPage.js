import { Container } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import './ProjectsPage.css'


function ProjectPage() {

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
        setTimeout(() => { setthird('end') }, 600);
    }, [third])

    const onLbjNotion01ImageClick = useCallback(() => {
        window.open(
            "https://chestnut-pest-92d.notion.site/KAKAO-Enterprise-Academy-0b351038ba694fffaf895e81ae9f9a97?pvs=4"
        );
    }, []);

    const onImageClick = useCallback(() => {
        window.open("https://github.com/KEA3-KeLog");
    }, []);

    const onFigmaLogoIcon1472891ImageClick = useCallback(() => {
        window.open("https://www.figma.com/files/team/1283970495007828691");
    }, []);

    return (
        <div>
            <Container as='div' className='content'>
                <div>
                    <div className={`start ${first}`}>
                        <h1 className='projectpage_title'>우리들의 이야기</h1>
                    </div>
                    <div className={`start ${second}`}>
                        <p className='projectpage_subtitle'>Kakao Enterprise Academy에서 우리가 발전하는 과정입니다.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className={`start ${third}`}>
                        <h1>포스팅 내용</h1>
                    </div>
                </div>
            </Container>
            <footer className='footer'>
                <div className='footermain'>
                    <ul className='footer_sns'>
                        <li className='footer_sns_item'>
                            <img src='/lbj-notion-0-1@2x.png' onClick={onLbjNotion01ImageClick} />
                        </li>
                        <li className='footer_sns_item'>
                            <img src='/figma-logo-icon-147289-1@2x.png' onClick={onFigmaLogoIcon1472891ImageClick} />
                        </li>
                        <li className='footer_sns_item'>
                            <img src='/25231-1@2x.png' onClick={onImageClick} />
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
export default ProjectPage;