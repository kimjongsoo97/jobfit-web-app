# JobFit Web Application

JobFit는 취업 준비생들을 위한 맞춤형 취업 지원 웹 애플리케이션입니다.

## 기술 스택

- **프레임워크**: Vue 3 + TypeScript
- **빌드 도구**: Vite
- **상태 관리**: Pinia
- **라우팅**: Vue Router
- **스타일링**: Tailwind CSS
- **테스트**: Vitest (단위 테스트), Cypress (E2E 테스트)
- **코드 품질**: ESLint, Prettier

## 프로젝트 구조

```
src/
├── api/          # API 통신 관련 모듈
├── assets/       # 정적 자원 (이미지, 폰트 등)
├── common/       # 공통 컴포넌트, 타입 정의
├── components/   # 재사용 가능한 Vue 컴포넌트
├── layouts/      # 레이아웃 컴포넌트
├── router/       # 라우팅 설정
├── stores/       # Pinia 스토어
├── util/         # 유틸리티 함수
├── views/        # 페이지 컴포넌트
└── App.vue       # 루트 컴포넌트
```

## 개발 환경 설정

### 필수 요구사항
- Node.js (v18 이상)
- npm (v9 이상)

### IDE 설정
- VSCode + Volar 확장 프로그램 설치
- Vetur 확장 프로그램 비활성화

## 시작하기

### 의존성 설치
```sh
npm install
```

### 개발 서버 실행
```sh
npm run dev
```

### 프로덕션 빌드
```sh
npm run build
```

## 테스트

### 단위 테스트 실행
```sh
npm run test:unit
```

### E2E 테스트 실행
개발 서버에서 테스트:
```sh
npm run test:e2e:dev
```

프로덕션 빌드에서 테스트:
```sh
npm run build
npm run test:e2e
```

## 코드 품질 관리

### 린트 실행
```sh
npm run lint
```

### 코드 포맷팅
```sh
npm run format
```

## 주요 기능

- 사용자 인증 (카카오 로그인)
- JWT 기반 인증
