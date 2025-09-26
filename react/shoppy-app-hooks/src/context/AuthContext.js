import { createContext, useState } from 'react';

// 1. Context 생성
export const AuthContext = createContext();

// 2. AuthProvider는 AuthContext를 사용하는 컴포넌트들의 범위를 정의
export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);  // default : 로그인 하지 않은 상태

    return (
        <AuthContext.Provider value={{
                                        isLogin, setIsLogin
                                    }}>
            {children}
        </AuthContext.Provider>
    );
}