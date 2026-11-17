/* ============================================================================
   북퀴즈 서재 (Book Quiz Hub) — 책 · 퀴즈 데이터
   ============================================================================
   새 책을 추가하는 방법

   1) 아래 BOOKS 배열 안에 책 객체 하나를 통째로 복사해 붙여 넣습니다.
   2) id, title, series, seriesNo, author, mark, colors, blurb(영어),
      blurbKo(한국어), questions 를 새 책 내용으로 바꿉니다.
   3) 저장하면 끝! 서재 카드, 검색, 퀴즈 화면, 결과 화면이 모두 자동으로 만들어집니다.

   책 객체 설명
   ----------------------------------------------------------------------------
   id           : 주소에 쓰이는 고유 이름 (영문 소문자와 하이픈, 중복 금지)
                  예) "officer-spence"  →  주소 #/play/officer-spence
   title        : 책 제목
   series       : 시리즈 이름 (없으면 "")
   seriesNo     : 시리즈 몇 번째 권인지 (숫자, 없으면 null)
   author       : 지은이
   illustrator  : 그린이 (없으면 이 줄을 지우거나 "")
   mark         : 표지에 들어갈 짧은 글자 1~2개 (비워 두면 제목에서 자동으로 만듦)
   colors       : 표지 색 두 개 ["앞색", "뒤색"] (#RRGGBB)
   blurb        : 영어 한 줄 소개
   blurbKo      : 한국어 한 줄 소개
   questions    : 문제 배열 (아래 문제 객체를 원하는 만큼)

   문제 객체 설명
   ----------------------------------------------------------------------------
   type     : "mc" = 4지선다, "ox" = 참/거짓
   question : 영어 질문
   note     : 챕터 표기 (예: "Chapter 1", 없으면 "")
   options  : 보기 배열 ("ox"는 ["True", "False"] 처럼 두 개)
   correct  : 정답 보기 번호 (0부터 시작: 첫 번째 보기 = 0)
   en       : 영어 해설 (정답을 고른 뒤 바로 보여 줍니다)
   ko       : 한국어 해설 ("한국어 해설 보기" 버튼으로 펼쳐집니다)
   ============================================================================ */

window.BOOKS = [
  {
    id: "officer-spence",
    title: "Officer Spence Makes No Sense!",
    series: "My Weird School Daze",
    seriesNo: 5,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "OS",
    colors: ["#16294a", "#2563eb"],
    blurb: "A.J.'s sandwich is missing! Somebody is stealing peanut butter and jelly sandwiches at Ella Mentry School.",
    blurbKo: "A.J.의 도시락에서 샌드위치가 사라졌어요. 과연 범인은 누구일까요?",
    questions: [
      {
        type: "mc",
        question: "At the start of the story, what was missing from A.J.'s lunch box?",
        note: "Chapter 1",
        options: [
          "A peanut butter and jelly sandwich",
          "A bag of chips",
          "A bottle of juice",
          "A chocolate cookie"
        ],
        correct: 0,
        en: "A.J.'s mom packed him a peanut butter and jelly sandwich. But when he opened his lunch box, he found only juice and a bag of chips. His sandwich was gone!",
        ko: "A.J.의 엄마는 땅콩버터 젤리 샌드위치를 싸 줬어요. 그런데 도시락을 열어 보니 주스와 과자뿐, 샌드위치만 사라졌답니다."
      },
      {
        type: "mc",
        question: "Who is Officer Spence?",
        note: "Chapter 2",
        options: [
          "The school security guard",
          "The school principal",
          "The lunch lady",
          "The bus driver"
        ],
        correct: 0,
        en: "Officer Spence is the security guard at Ella Mentry School. He carries a walkie-talkie, handcuffs, and a club on his belt.",
        ko: "Officer Spence는 Ella Mentry School의 경비원이에요. 허리띠에 무전기와 수갑, 곤봉을 차고 다닌답니다."
      },
      {
        type: "mc",
        question: "What does Officer Spence shout when he arrests someone?",
        note: "Chapter 2",
        options: [
          "“Freeze, dirtbag!”",
          "“Time for lunch!”",
          "“Sit down, please!”",
          "“You're it!”"
        ],
        correct: 0,
        en: "Officer Spence shouts “Freeze, dirtbag!” just like police officers on TV. He even shouts it at Mr. Klutz, the principal!",
        ko: "Officer Spence는 TV 속 경찰처럼 “Freeze, dirtbag!”이라고 소리쳐요. 그 무서운 말을 교장 선생님한테도 외쳤답니다."
      },
      {
        type: "ox",
        question: "Andrea's mom packed her tofu for lunch, and the boys shouted “TOE FOOD!”",
        note: "Chapter 1 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Andrea's lunch was tofu. A.J. and his friends heard “TOE FOOD!” and thought her lunch was made of toes. Yuck!",
        ko: "Andrea의 도시락 반찬은 두부(tofu)였어요. 아이들은 그 말을 '발가락 음식(TOE FOOD)'으로 듣고 깜짝 놀랐답니다."
      },
      {
        type: "mc",
        question: "Who is the principal of Ella Mentry School? (He has no hair at all!)",
        note: "Chapter 2",
        options: [
          "Mr. Klutz",
          "Mr. Macky",
          "Mr. Granite",
          "Dr. Brad"
        ],
        correct: 0,
        en: "Mr. Klutz is the principal. He has no hair at all, and his head is so shiny you can see yourself in it.",
        ko: "Mr. Klutz는 교장 선생님이에요. 머리카락이 하나도 없어서 머리가 아주 반짝반짝, 얼굴이 비칠 정도랍니다."
      },
      {
        type: "mc",
        question: "Why did Officer Spence arrest Mr. Macky, the reading teacher?",
        note: "Chapter 7",
        options: [
          "Because he read the word “but” in a book",
          "Because he stole a sandwich",
          "Because he was late for school",
          "Because he ate Andrea's tofu"
        ],
        correct: 0,
        en: "Mr. Macky was reading a story called The Happy Bunny. Officer Spence heard the word “but” and said you can't say B-U-T-T in a children's book!",
        ko: "Mr. Macky가 《The Happy Bunny》를 읽고 있었어요. Officer Spence는 'but'을 'butt(엉덩이)'으로 잘못 듣고는 동화책에 그런 말을 쓰면 안 된다며 체포했답니다."
      },
      {
        type: "mc",
        question: "What did A.J. pull in the nurse's office?",
        note: "Chapter 8",
        options: [
          "The fire alarm",
          "The door handle",
          "Officer Spence's club",
          "A chair"
        ],
        correct: 0,
        en: "A.J. pulled the fire alarm to get everybody out of the school. The little red box on the wall said FIRE: IN CASE OF EMERGENCY, BREAK GLASS.",
        ko: "A.J.는 모두를 학교 밖으로 나오게 하려고 화재경보기를 눌렀어요. 간호사실 벽의 빨간 상자에 'FIRE'라고 쓰여 있었거든요."
      },
      {
        type: "mc",
        question: "How did Mr. Klutz and Mrs. Jafee get out of jail?",
        note: "Chapter 11",
        options: [
          "They tunneled out with yogurt spoons",
          "They climbed out of a window",
          "A dog opened the door for them",
          "They used a key"
        ],
        correct: 0,
        en: "They dug a tunnel with their yogurt spoons and came up through the stage floor! Mr. Klutz's shiny head popped up first, and A.J. thought it was a beach ball.",
        ko: "두 사람은 요거트 스푼으로 땅굴을 파서 무대 바닥을 뚫고 올라왔어요. 제일 먼저 반짝이는 Mr. Klutz의 머리가 나와서, A.J.는 그것을 비치볼인 줄 알았답니다."
      },
      {
        type: "ox",
        question: "Skippy and Jif are dogs that sniff out bombs.",
        note: "Chapter 11 · True or False?",
        options: ["True", "False"],
        correct: 1,
        en: "Skippy and Jif are peanut butter–sniffing dogs from “Rent-A-Peanut-Butter–Sniffing-Dog.” Both names are real peanut butter brands!",
        ko: "Skippy와 Jif는 땅콩버터 냄새를 맡는 개예요. 'Rent-A-Peanut-Butter-Sniffing-Dog'에서 빌려 왔대요. 두 이름 모두 실제 땅콩버터 브랜드 이름이랍니다."
      },
      {
        type: "mc",
        question: "Who was the real peanut butter and jelly bandit?",
        note: "Chapter 11 · The big surprise",
        options: [
          "Officer Spence",
          "Mr. Klutz, the principal",
          "Mr. Macky",
          "Andrea"
        ],
        correct: 0,
        en: "Skippy pulled a peanut butter and jelly sandwich out of Officer Spence's pocket! Why did he do it? When he was little, his mommy never let him eat peanut butter, so he was angry and hurt. Dr. Brad said he needs help, not jail.",
        ko: "Skippy가 Officer Spence의 주머니에서 땅콩버터 젤리 샌드위치를 끄집어냈어요. 범인은 바로 Officer Spence! 어릴 때 엄마가 땅콩버터를 한 번도 먹게 해 주지 않아서 마음이 아프고 화가 났던 거래요. 그래서 Dr. Brad는 감옥이 아니라 도움이 필요하다고 했답니다."
      }
    ]
  }
];
