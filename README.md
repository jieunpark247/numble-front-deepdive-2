```bash
npm install

npm run dev

npm run storybook
```

## 프로젝트 설명

Dummy JSON 데이터를 바탕으로 만들어진 이커머스 서비스 입니다.  
<br />
다소 아주 투박한 디자인 형태일 수 있음을 말씀드립니다.

## 프로젝트 구조

```
이게 어떤 정답을 갖고 있는 구조라기보다는
아 이런 구조로 프로젝트를 구성하기도 하는구나 하는
하나의 케이스 정도로 봐주시면 될것같습니다.
```

- api: fetch 관련 파일들이 있습니다.
- app: app routing 을 사용합니다.
- components: 전역적으로 사용될 수 있는 아토믹한 컴포넌트 모음입니다.
- constants: 프로젝트내에서 필요한 상수들을 정의한 폴더입니다.
- container: 페이지 단위로 지역적으로 필요한 컴포넌트들을 정의합니다.
- hooks: 커스텀 훅을 정의합니다.
- providers: 전역에서 주입할 프로바이더를 정의합니다
- types: 각종 타입을 정의합니다.
- utils: 유틸성 함수를 정의합니다.

### 참고자료

- [Javascript Error Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
  - 자바스크립트에선 이렇게 다양한 에러가 발생할 수 있습니다. 이 중 대부분은 린트나 타입스크립트 그리고 vscode 같은 코드 작성 에디터에서 걸러지기도해서 참고용으로 봐주세요
