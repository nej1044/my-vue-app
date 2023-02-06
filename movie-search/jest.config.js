module.exports = {
    // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    // ~ 같은 경로 별칭을 매핑
    // <rootDir> 토큰을 사용해 루트 경로 참조
    moduleNameMapper: {
        '~/(.*)$': '<rootDir>/src/$1'
    },
    // 일치하는 경로에서는 모듈을 가져오지 않습니다.
    modulePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist'
    ],
    testEnvironment: 'jsdom',
    // jsdom 환경에 대한 URL 설정
    testURL: 'http://localhost',
    // 정규식과 일치하는 파일의 변환 모듈 지정
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '^.+\\.js$': 'babel-jest'
    }
}

