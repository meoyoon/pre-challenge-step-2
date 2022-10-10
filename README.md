```$shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

```shell
$ yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

## 기능 정의

### \_\_posts에 md 파일

- [ ] 파일의 마크다운 본문과 게시물에 대한 meta data를 담는가?

### 목록 페이지

- [ ] `/`로 접근할 경우, 목록페이지가 보여지는가?
- [ ] md item을 클릭하면 상세 페이지로 이동되는가?

### 상세 페이지

- [ ] `/[id]`로 접근할 경우, 상세페이지가 보여지는가?
- [ ] 없는 `/[id]`로 접근할 경우, 404가 보여지는가?
- [ ] meta data를 잘 설정 하는가?
- [ ] 마크다운이 정상적으로 랜더링되는가?

### 배포

- [ ] vercel 배포가 정상적으로 되었는가?
- [ ] (추가) 나중을 위해 CI 구축하기
  > > > > > > > 5daf447 (memo: test list 작성)
