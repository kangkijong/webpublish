import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

/**
 * 화면 출력 형식
 */
export function Layout() {
    return (
        <div>
            <Header>    {/* 자식컴포넌트를 Header컴포넌트의 props로 받는 경우 {children} */}
                {/* <Link to="/" style={{padding:"10px", color:"#fff"}}>Home</Link>
                <Link to="/login" style={{padding:"10px", color:"#fff"}}>로그인</Link>
                <Link to="/signup" style={{padding:"10px", color:"#fff"}}>회원가입</Link>
                <Link to="/about" style={{padding:"10px", color:"#fff"}}>About</Link>
                <Link to="/support" style={{padding:"10px", color:"#fff"}}>Support</Link> */}
            </Header>
            <div style={{height:"700px"}}>
                <Outlet />
            </div>
            <Footer />
            {/* <footer style={{backgroundColor:"lightgray"}}>
                <p>footer</p>
            </footer> */}
        </div>
    );
}