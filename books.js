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
  },
  {
    id: "mrs-jafee",
    title: "Mrs. Jafee Is Daffy!",
    series: "My Weird School Daze",
    seriesNo: 6,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "MJ",
    colors: ["#6b2d1f", "#d97706"],
    blurb: "Mr. Klutz is away for four days, and the new vice principal, Mrs. Jafee, has some very weird ideas about how kids learn.",
    blurbKo: "교장 선생님이 4일 동안 학교를 비운 사이, 새 교감 선생님이 이상한 방법으로 수업을 시작했어요.",
    questions: [
      {
        type: "mc",
        question: "What did Mr. Klutz tell everybody in the all-purpose room?",
        note: "Chapter 1",
        options: [
          "That he was leaving for four days",
          "That he was going to be a teacher",
          "That the school was closing forever",
          "That there was no more fizz ed"
        ],
        correct: 0,
        en: "Mr. Klutz was holding a suitcase. Everybody thought he was leaving for good, but he was only going away for four days, to Principal Camp.",
        ko: "Mr. Klutz는 여행 가방을 들고 있었어요. 모두가 교장 선생님이 그만두는 줄 알고 울었지만, 사실은 Principal Camp에 가려고 나흘 동안만 학교를 비우는 거였답니다."
      },
      {
        type: "mc",
        question: "Who is Mrs. Jafee?",
        note: "Chapter 2",
        options: [
          "The new vice principal",
          "The gym teacher",
          "The lunch lady",
          "The school secretary"
        ],
        correct: 0,
        en: "Mrs. Jafee is the new vice principal at Ella Mentry School. She says things like “Howdy, guys and gals!” and “You betcha!”",
        ko: "Mrs. Jafee는 Ella Mentry School의 새 교감 선생님이에요. “Howdy, guys and gals!”, “You betcha!”처럼 재미있는 말투로 이야기한답니다."
      },
      {
        type: "ox",
        question: "Mr. Klutz wanted everything to be nice and calm, so Mrs. Jafee hired a string quartet to play music in the hallway.",
        note: "Chapter 3 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "On Tuesday morning four grown-ups in black suits and dresses were playing violins in the hall. Mrs. Jafee said studies show children relax and learn better with soothing music.",
        ko: "화요일 아침, 검은 정장을 입은 어른 네 명이 복도에서 바이올린을 켜고 있었어요. Mrs. Jafee는 잔잔한 음악을 들으면 아이들이 편안해져서 더 잘 배운다는 연구 결과가 있다고 했답니다."
      },
      {
        type: "mc",
        question: "Who became the new gym (fizz ed) teacher?",
        note: "Chapter 4",
        options: [
          "Swami Havabanana",
          "Miss Small",
          "Mr. Granite",
          "Mr. Klutz"
        ],
        correct: 0,
        en: "Mrs. Jafee fired Miss Small and brought in Swami Havabanana from India. Instead of sports and games, he taught the class yoga.",
        ko: "Mrs. Jafee는 Miss Small을 내보내고 인도에서 온 Swami Havabanana를 데려왔어요. 운동 대신 요가를 가르쳤답니다."
      },
      {
        type: "ox",
        question: "Swami Havabanana's yoga class was so relaxing that all the kids fell asleep.",
        note: "Chapter 5 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "The kids lay on the floor and breathed deeply. Soon everybody was asleep, and A.J. dreamed about Yoda and Yogi doing yoga on YouTube. Mrs. Jafee was so angry that she fired Swami Havabanana!",
        ko: "아이들은 바닥에 누워 깊게 숨을 쉬었어요. 곧 모두 잠들었고, A.J.는 요다와 요기가 유튜브에서 요가하는 꿈을 꿨어요. 화가 난 Mrs. Jafee는 Swami를 해고했답니다."
      },
      {
        type: "mc",
        question: "The soldier in the gray uniform in the media center was really ...",
        note: "Chapter 6",
        options: [
          "Mrs. Roopy, the librarian",
          "Mr. Klutz",
          "Mr. Granite",
          "Mrs. Patty, the secretary"
        ],
        correct: 0,
        en: "The man said he was General Stonewall Jackson from the Civil War. But he had one arm and looked a lot like Mrs. Roopy, so the kids knew it was their librarian in a costume.",
        ko: "그 남자는 자신이 남북전쟁의 Stonewall Jackson 장군이라고 했어요. 그런데 팔이 하나뿐이고 Mrs. Roopy와 꼭 닮아서, 아이들은 사서 선생님이 분장한 걸 알아챘답니다."
      },
      {
        type: "ox",
        question: "Mrs. Jafee got the swimming pool so the kids could swim and have fun.",
        note: "Chapter 7 · True or False?",
        options: ["True", "False"],
        correct: 1,
        en: "The pool came from Rent-A-Pool, but it was not for swimming. Mrs. Jafee wanted the kids to learn Civil War spelling words underwater, and she pushed them all in!",
        ko: "수영장은 Rent-A-Pool에서 빌려온 거예요. 하지만 수영을 하려는 게 아니었어요. Mrs. Jafee는 물속에서 남북전쟁 단어의 철자를 외우게 하려고 아이들을 모두 밀어 넣었답니다."
      },
      {
        type: "mc",
        question: "What did the kids think Mrs. Jafee was planning to do?",
        note: "Chapter 8",
        options: [
          "Take Mr. Klutz's job",
          "Move to India",
          "Close the school",
          "Become a gym teacher"
        ],
        correct: 0,
        en: "The kids thought Mrs. Jafee sent Mr. Klutz away so she could take over the school. Then she showed them a letter from him at Principal Camp and her new kitten, Mister Fur Columbus.",
        ko: "아이들은 Mrs. Jafee가 교장 자리를 차지하려고 Mr. Klutz를 내보낸 줄 알았어요. 그런데 Mrs. Jafee는 Principal Camp에서 온 편지와 새끼 고양이 Mister Fur Columbus를 보여 줬답니다."
      },
      {
        type: "mc",
        question: "What was on Mrs. Jafee's desk when A.J. came to her office on Thursday?",
        note: "Chapter 9",
        options: [
          "Cake, cookies, candy, and a tub of ice cream",
          "A big pile of books",
          "A bed of nails",
          "A swimming pool"
        ],
        correct: 0,
        en: "A.J. had said kids learn better if they eat ice cream, cookies, cake, and candy. So Mrs. Jafee did an experiment and made him eat all of it while he read a book. At first it was the greatest moment of his life!",
        ko: "A.J.가 '아이들은 아이스크림, 쿠키, 케이크, 사탕을 먹으면 더 잘 배운다'고 말했었어요. 그래서 Mrs. Jafee는 실험을 한다며 책을 읽는 A.J.에게 그것들을 계속 먹였답니다. 처음에는 인생 최고의 순간이었지만 나중에는 배가 아팠어요."
      },
      {
        type: "mc",
        question: "How did Mr. Klutz come back to school on Friday?",
        note: "Chapter 11",
        options: [
          "He jumped out of a plane with a parachute",
          "He came in a taxi from the airport",
          "He rode the school bus",
          "He walked all the way home"
        ],
        correct: 0,
        en: "Mr. Klutz learned parachuting at Principal Camp. He jumped out of the plane and landed SPLASH in the swimming pool, because he can't swim! Stonewall Jackson pulled him out.",
        ko: "Mr. Klutz는 Principal Camp에서 낙하산을 배웠어요. 비행기 밖으로 뛰어내려 수영장에 첨벙 떨어졌답니다. 수영을 못 하니까 Stonewall Jackson이 그를 끌어냈어요."
      }
    ]
  }
];
