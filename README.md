# Project Shareliving

# 우리 팀의 코드 컨벤션

## 변수 선언 (Variable Declarations)

- **규칙**: `const`를 기본으로 사용, 필요할 때만 `let` 사용, `var`는 사용하지 않음.

## 네이밍 규칙 (Naming Conventions)

- **변수 및 함수**: 카멜 케이스(camelCase)
  ```jsx
  const userName = "baby";
  ```
- **클래스 및 생성자 함수, 컴포넌트**: 파스칼 케이스(PascalCase)
  ```jsx
  class User { ... }
  const UserProfile = () => {
    return <div>User Profile</div>;
  };
  ```
- **상수**: 대문자와 언더스코어(UPPER_SNAKE_CASE)
  ```jsx
  const API_URL = "https://api.example.com";
  ```

## 주석 (Comments)

- **규칙**: 코드의 의도를 설명할 때만 사용, 코드 자체를 설명하는 주석은 지양.

## 코딩 컨벤션 (JavaScript 코드 컨벤션)

| 구분        | 내용                           | 예시                                             |
| ----------- | ------------------------------ | ------------------------------------------------ |
| 들여쓰기    | 2 spaces                       | `if (condition) { doSomething(); }`              |
| 세미콜론    | 항상 사용                      | `const a = 10;`                                  |
| 변수 이름   | camelCase                      | `let myVariable;`                                |
| 상수 이름   | UPPER_SNAKE_CASE               | `const MY_CONSTANT = 5;`                         |
| 함수 이름   | 동사로 시작하고 camelCase      | `function fetchData() {}`                        |
| 클래스 이름 | PascalCase                     | `class MyClass {}`                               |
| 주석 사용   | 복잡한 코드에 설명 추가        | `// This function fetches data`                  |
| 가독성      | 80~120자 제한, 줄 바꿈         | `const longVariableName = '...'; // explanation` |
| 공백        | 연산자와 괄호 주변에 공백 사용 | `if (condition) { }`                             |

## CSS 클래스명 컨벤션

| 구분          | 내용                                                 | 예시                                           |
| ------------- | ---------------------------------------------------- | ---------------------------------------------- |
| BEM 구조      | Block Element Modifier 방식 사용                     | `.button`, `.button--primary`, `.button__icon` |
| 파일 이름     | kebab-case                                           | `my-component.scss`                            |
| 기본 클래스명 | 의미 있는 이름 사용                                  | `.header`, `.footer`, `.card`                  |
| 네이밍 규칙   | 모든 클래스는 소문자 사용, 단어는 하이픈(-)으로 구분 | `.nav-menu`, `.user-profile`                   |

## Prettier 기본 설정 (.prettierrc)

```json
{
  "singleQuote": true, // 작은따옴표(')를 사용
  "semi": true, // 세미콜론을 항상 사용
  "tabWidth": 2 // 들여쓰기 시 탭 너비를 2칸으로 설정
}
```

## ESLint 기본 설정 (.eslintrc.json)

```json
{
  "env": {
    "browser": true, // 브라우저 환경을 사용 (window, document 객체 사용 가능)
    "es2021": true, // 최신 ECMAScript 2021 문법을 사용
    "node": true // Node.js 환경을 지원 (module.exports 등 사용 가능)
  },
  "extends": [
    "eslint:recommended", // ESLint 기본 추천 규칙 사용
    "prettier" // Prettier와 ESLint 규칙 충돌 방지
  ],
  "rules": {
    "no-unused-vars": "warn", // 사용하지 않는 변수가 있을 경우 경고
    "semi": ["error", "always"], // 세미콜론을 반드시 사용 (없으면 오류)
    "quotes": ["error", "single"] // 작은따옴표(')를 사용하지 않으면 오류
  }
}
```

## VSCode 설정 (settings.json)

```json
{
  "editor.formatOnSave": true, // 파일 저장 시 자동으로 코드 포맷팅 실행
  "editor.codeActionsOnSave": {
    "source.fixAll": true // 저장 시 가능한 모든 코드 문제 자동 수정
  }
}
```

<br>
<br>

# 프로젝트 브랜치 관리

## 주요 브랜치

- **main**: 배포 가능한 안정적인 버전.
- **develop**: 모든 기능이 통합되는 개발 버전.

## 기능별 브랜치

각 기능은 `feature/*` 브랜치에서 작업한 후, 완료되면 `develop`에 병합합니다.

1. **회원가입 / 로그아웃**:

   - `feature/authentication`
   - 회원가입과 로그아웃 기능을 통합하여 작업.
   - 하위 브랜치: `feature/authentication-signup`, `feature/authentication-login`, `feature/authentication-logout`

2. **게시글 목록**:

   - `feature/post-list`
   - 게시글 목록 기능 담당.

3. **마이페이지**:

   - `feature/my-page`
   - 사용자 개인 정보 관리 기능.

4. **상세페이지**:

   - `feature/detail-page`
   - 게시글의 상세 내용을 보여주는 페이지 작업.

5. **등록페이지**:

   - `feature/create-post`
   - 게시글 작성 기능 담당.

6. **알림 기능**:

   - `feature/notification`
   - 알림 시스템 구현을 위한 브랜치.

7. **전체 기능**:
   - `feature/full-functionality`
   - 모든 기능이 정상적으로 동작하는지 통합 테스트 및 마무리 작업을 위해 사용하는 브랜치.

## 브랜치 생성 및 관리 예시

1. **기능 개발 시작**:

   - `develop`에서 새로운 feature 브랜치를 만듭니다.

   ```bash
   git checkout -b feature/authentication
   ```

## 하위 기능 브랜치 작업

- 각 기능을 개발할 때 feature/authentication, feature/post-list 등과 같은 개별 브랜치에서 작업합니다.

  ### 하위의 하위 브랜치 작업 예시

  - 하위의 하위 기능을 개발할 때는 feature/authentication-signup과 같이 하이픈(-)을 사용하여 브랜치를 구분합니다.

    1. 하위의 하위 브랜치 생성:

       - feature/authentication에서 하위의 하위 브랜치를 만듭니다.

       ```bash
       git checkout -b feature/authentication-signup
       ```

    2. 하위의 하위 브랜치에서 작업:

       - 기능 구현을 완료한 후, 하위 브랜치로 병합합니다.

       ```bash
       git checkout feature/authentication
       git merge feature/authentication-signup
       ```

    3. 하위 브랜치를 feature/full-functionality에 병합:
       - 이제 하위 브랜치를 feature/full-functionality에 병합합니다.
       ```bash
       git checkout feature/full-functionality
       git merge feature/authentication
       ```

## 하위 기능 브랜치 병합

- 각 하위 기능이 완료되면 feature/full-functionality 브랜치로 병합하여 모든 기능이 잘 동작하는지 확인합니다.

```bash
git checkout feature/full-functionality
git merge feature/authentication
git merge feature/post-list
# 필요한 모든 기능 브랜치를 병합합니다.
```

## 최종 테스트 및 통합

- feature/full-functionality에서 모든 기능을 테스트하여 문제가 없다면 develop 브랜치로 병합합니다.

```bash
git checkout develop
git merge feature/full-functionality
```

## 원격 저장소에 푸시

- 마지막으로 develop 브랜치를 원격 저장소에 푸시합니다.

```bash
git push origin develop
```

## 요약

- feature/full-functionality 브랜치는 여러 하위 기능의 통합과 테스트를 위한 브랜치입니다.
- 모든 하위 기능 작업이 완료되면 feature/full-functionality에 머지하고, 최종적으로 develop으로 병합하여 배포 준비를 할 수 있습니다.