# 북퀴즈 서재 · Book Quiz Hub

읽은 책을 퀴즈로 확인하는 정적 웹페이지입니다. 서버나 빌드 과정 없이 `index.html`과 `books.js` 두 파일만으로 동작하며, GitHub Pages에 그대로 올릴 수 있습니다.

## 구성

| 파일 | 역할 |
| --- | --- |
| `index.html` | 서재 · 퀴즈 · 결과 · 오답 다시보기 화면 (한 페이지 안에서 전환) |
| `books.js` | 책 목록과 책마다의 퀴즈 데이터 |

외부 CDN, 웹폰트, 이미지 요청을 쓰지 않습니다. 모든 스타일과 스크립트가 파일 안에 들어 있습니다.

객관식 보기는 문제마다 순서가 무작위로 섞여 나오고(정답 위치가 매번 달라집니다), O/X 문제는 `True → False` 순서를 그대로 유지합니다. 채점과 오답 다시보기는 섞이기 전 원래 보기 번호를 기준으로 처리됩니다.

## 책 추가하기

`books.js`의 `BOOKS` 배열에 책 객체 하나를 추가하면 서재 카드, 검색, 퀴즈가 자동으로 만들어집니다.

```js
{
  id: "my-new-book",              // 주소에 쓰는 고유 이름 (영문 소문자·하이픈)
  title: "My New Book",
  series: "Series Name",
  seriesNo: 1,                    // 없으면 null
  author: "Author Name",
  mark: "MB",                     // 표지에 들어갈 1~2글자 (생략하면 제목에서 자동 생성)
  colors: ["#16294a", "#2563eb"], // 표지 색 두 개
  blurb: "One line in English.",
  blurbKo: "한 줄 소개",
  questions: [
    {
      type: "mc",                 // "mc" 4지선다 · "ox" 참/거짓
      question: "Question in English?",
      note: "Chapter 1",
      options: ["A", "B", "C", "D"],
      correct: 0,                 // 정답 보기 번호 (0부터)
      en: "English explanation.",
      ko: "한국어 해설."
    }
  ]
}
```

## 저장되는 기록

퀴즈를 마치면 책별 최고 점수와 시도 횟수가 브라우저 `localStorage`(`bookQuizHub.v1`)에 저장됩니다. 기기나 브라우저를 바꾸면 기록은 따라가지 않습니다.
