import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import { Footer } from './components/Footer.jsx';
import './css/style.css';

export default function App() {
  const init = {
    header: {menus: []}, 
    content: {  
      home: {}, 
      about: {
        majors: [], jobs: []
      },
      skills: {
        coding: [], tool: [], etc: []
      },
      work: {
        categories: [], projects: []
      },
      testimonials: []
    },
    footer: {
      links: []
    }
  };
  const [data, setData] = useState(init);

  useEffect(() => { // 컴포넌트가 최초로 화면에 렌더링(mount) 될 때만 실행됨
    const load = async () => {  // 비동기 함수 정의 (데이터를 가져오는 함수)
      const response = await fetch("/data/portfolio.json"); // JSON 파일을 비동기로 요청
      const jsonData = await response.json(); // JSON 형식으로 파싱
      setData(jsonData);  // 받아온 데이터를 상태로 저장 (컴포넌트 리렌더링 발생)
    }
    load(); // 정의한 비동기 함수 실행
  }, []); // []는 빈 배열이기 때문에 useEffect()는 딱 한 번, 컴포넌트가 마운트될 때만 실행
          // 즉, 이 fetch() 요청은 처음에 한 번만 실행
          // 만약 배열에 어떤 상태가 들어가 있다면 그 상태가 바뀔 때마다 실행

  // console.log('majors --->', data.content.about.majors);

  return (
    <>
      <Header data={data.header} />
      <Content data={data.content} />
      <Footer data={data.footer} />
    </>
  ); 
}