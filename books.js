/* ============================================================================
   로니의 북퀴즈 — 책 · 퀴즈 데이터
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
  },
  {
    id: "dr-brad",
    title: "Dr. Brad Has Gone Mad!",
    series: "My Weird School Daze",
    seriesNo: 7,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "DB",
    colors: ["#312e81", "#6366f1"],
    blurb: "A.J.'s poem makes the grown-ups cry, and now the school counselor wants to test him. What if they send him to Dork School?",
    blurbKo: "A.J.가 쓴 시를 읽고 어른들이 눈물을 흘렸어요. 상담 선생님은 A.J.가 천재인지 시험해 보겠다는데, 혹시 Dork School로 보내는 건 아닐까요?",
    questions: [
      {
        type: "mc",
        question: "What is written on the back of Andrea's new necklace?",
        note: "Chapter 1",
        options: [
          "LOVE",
          "A.J.",
          "ELLA MENTRY",
          "BEST FRIENDS"
        ],
        correct: 0,
        en: "Andrea shows Emily her new necklace and says it says “LOVE” on the back. Later in the story that same necklace becomes very important.",
        ko: "Andrea는 Emily에게 새 목걸이를 자랑하며 뒷면에 “LOVE”라고 쓰여 있다고 말해요. 이 목걸이는 나중에 아주 중요한 역할을 한답니다."
      },
      {
        type: "mc",
        question: "What was Mr. Klutz doing in his office when A.J. came in?",
        note: "Chapter 2",
        options: [
          "Playing Ping-Pong with himself",
          "Doing push-ups",
          "Eating his lunch",
          "Taking a nap"
        ],
        correct: 0,
        en: "Mr. Klutz rented a Ping-Pong table from Rent-A-Ping-Pong-Table. He hit the ball, ran around the table, and hit it back to himself. He says Ping-Pong is great for getting rid of stress.",
        ko: "Mr. Klutz는 Rent-A-Ping-Pong-Table에서 탁구대를 빌려 왔어요. 공을 치고는 탁구대를 빙 돌아가서 자기에게 다시 공을 쳤답니다. 탁구는 스트레스를 없애는 데 아주 좋다고 해요."
      },
      {
        type: "mc",
        question: "What do the kids call Dirk School?",
        note: "Chapter 3",
        options: [
          "Dork School",
          "Genius School",
          "Monkey School",
          "Space School"
        ],
        correct: 0,
        en: "Dirk School is the special school for genius kids. Everybody in town calls it Dork School, and A.J. does not want to go there.",
        ko: "Dirk School은 천재 아이들이 다니는 특별한 학교예요. 동네 사람들은 모두 그곳을 'Dork School(얼간이 학교)'이라고 부르고, A.J.는 가기 싫어한답니다."
      },
      {
        type: "mc",
        question: "What did Dr. Brad show A.J. in Room 104?",
        note: "Chapter 4",
        options: [
          "Cards with ink blots on them",
          "A monkey brain",
          "A robot that talks",
          "A bag full of candy"
        ],
        correct: 0,
        en: "Dr. Brad held up white cards with ink blots and asked A.J. what he saw. A.J. only saw ink, so Dr. Brad said he would have to do further tests.",
        ko: "Dr. Brad는 잉크가 묻은 흰 카드를 들고 A.J.에게 무엇이 보이냐고 물었어요. A.J.는 그냥 잉크밖에 보이지 않는다고 했고, Dr. Brad는 시험을 더 해 봐야겠다고 했답니다."
      },
      {
        type: "ox",
        question: "Dr. Brad told every kid to bring a favorite toy from home to school.",
        note: "Chapter 5 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Dr. Brad wanted the boys and girls to stop fighting, so he told them to bring their favorite toys. Then he made each boy give his toy to a girl, and each girl give her toy to a boy.",
        ko: "Dr. Brad는 남자아이들과 여자아이들이 싸우지 않게 하려고 좋아하는 장난감을 가져오라고 했어요. 그리고 남자아이는 여자아이에게, 여자아이는 남자아이에게 장난감을 바꿔 주게 했답니다."
      },
      {
        type: "ox",
        question: "The boys had a Barbie war, shooting rubber bands at the Barbies.",
        note: "Chapter 6 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "The boys did not want to play with Barbies, so they stood them on the table and fired rubber bands at them. A.J. shouted “Die, Ballerina Barbie!”",
        ko: "남자아이들은 Barbie 인형을 가지고 놀기 싫어서 인형을 탁자에 세워 두고 고무줄을 쏘았어요. A.J.는 “죽어라, 발레리나 Barbie!”라고 외쳤답니다."
      },
      {
        type: "mc",
        question: "In Dr. Brad's word game, what did A.J. say when Dr. Brad said “love”?",
        note: "Chapter 7",
        options: [
          "“Andrea”",
          "“Hate”",
          "“School”",
          "“Pizza”"
        ],
        correct: 0,
        en: "A.J. was saying the opposite of every word, but when Dr. Brad said “love,” A.J. said “Andrea—I mean, hate.” Dr. Brad thought that meant A.J. loved Andrea.",
        ko: "A.J.는 모든 단어의 반대말을 말하고 있었어요. 그런데 Dr. Brad가 “love”라고 하자 “Andrea—아니, hate”라고 말했답니다. Dr. Brad는 A.J.가 Andrea를 사랑한다고 생각했어요."
      },
      {
        type: "ox",
        question: "Dr. Brad really hypnotized A.J. with the shiny metal object.",
        note: "Chapter 8 · True or False?",
        options: ["True", "False"],
        correct: 1,
        en: "A.J. was only pretending. He said “I am from the planet Zorg. Take me to your leader,” and danced around like a chicken, and Dr. Brad knew he was not in a trance.",
        ko: "A.J.는 그저 연기한 거였어요. “나는 Zorg 행성에서 왔습니다. 지도자에게 데려가 주세요”라고 말하고 닭처럼 춤을 췄는데, Dr. Brad는 A.J.가 최면에 걸리지 않은 걸 알고 있었답니다."
      },
      {
        type: "mc",
        question: "How did Andrea get up on the roof of the school?",
        note: "Chapter 11",
        options: [
          "She climbed up the bricks and windowsills",
          "She used the janitor's ladder",
          "The firefighters lifted her up",
          "She jumped over from a tree"
        ],
        correct: 0,
        en: "When Mr. Klutz asked how she got up there, Andrea yelled, “I climbed.” A.J. dug his sneakers into the space between the bricks and used the windowsills to climb up after her.",
        ko: "Mr. Klutz가 어떻게 올라갔냐고 묻자 Andrea는 “걸어서 올라왔지”라고 외쳤어요. A.J.는 벽돌 사이에 운동화를 걸치고 창틀을 디뎌서 그 뒤를 따라 올라갔답니다."
      },
      {
        type: "mc",
        question: "How did A.J. help Dr. Brad stop crying at the end?",
        note: "Chapter 12",
        options: [
          "He played Ping-Pong with him",
          "He gave him a Barbie",
          "He hypnotized him",
          "He sang him a song"
        ],
        correct: 0,
        en: "A.J. ran to Room 104, grabbed the Ping-Pong paddles, and got Dr. Brad, Mr. Klutz, and Ms. Coco to play. “I feel better already!” Dr. Brad said.",
        ko: "A.J.는 Room 104로 달려가 탁구 라켓을 가져왔고, Dr. Brad, Mr. Klutz, Ms. Coco와 함께 탁구를 쳤어요. Dr. Brad는 “벌써 기분이 좋아졌어!”라고 말했답니다."
      }
    ]
  },
  {
    id: "miss-laney",
    title: "Miss Laney Is Zany!",
    series: "My Weird School Daze",
    seriesNo: 8,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "ML",
    colors: ["#4a044e", "#db2777"],
    blurb: "Ella Mentry School is closing, and the new speech teacher has her class in the girls' bathroom. Can Miss Laney really save the school?",
    blurbKo: "Ella Mentry School이 문을 닫게 되었어요. 새 말하기 선생님은 여자 화장실에서 수업을 하는데, 과연 학교를 구할 수 있을까요?",
    questions: [
      {
        type: "mc",
        question: "What bad news did Mr. Klutz tell everybody at the assembly?",
        note: "Chapter 1",
        options: [
          "Ella Mentry School will close forever in June",
          "There will be no more recess",
          "The school will get a new principal",
          "Every class will have a new teacher"
        ],
        correct: 0,
        en: "The economy was bad and the budget was cut. Mr. Klutz got a call from the Board of Education saying the school will close in June — and not for a few weeks. Forever.",
        ko: "경제가 어려워지고 예산이 줄었어요. 교육위원회에서 전화가 와서 학교가 6월에 문을 닫는다고 했는데, 몇 주 동안이 아니라 영원히 닫는 거였답니다."
      },
      {
        type: "mc",
        question: "Where is Miss Laney's speech class?",
        note: "Chapter 3",
        options: [
          "In the girls' bathroom",
          "In the art room",
          "In the library",
          "In a tent on the playground"
        ],
        correct: 0,
        en: "Because of budget cuts, the school could not give Miss Laney a regular office. She says a bathroom is perfect for speech class because it has really good acoustics.",
        ko: "예산이 줄어서 학교는 Miss Laney에게 제대로 된 사무실을 줄 수 없었어요. Miss Laney는 화장실은 소리가 잘 울려서 말하기 수업에 딱 좋다고 했답니다."
      },
      {
        type: "mc",
        question: "Who won the tongue twister game “I Bet You Can't Say This!”?",
        note: "Chapter 4",
        options: [
          "Andrea",
          "A.J.",
          "Ryan",
          "Emily"
        ],
        correct: 0,
        en: "Andrea could say “If Stu chews shoes, should Stu choose the shoes he chews?” without a mistake, so she won. A.J. got buzzed on “A skunk sat on a stump.”",
        ko: "Andrea는 “If Stu chews shoes, should Stu choose the shoes he chews?”를 한 번도 틀리지 않고 말해서 이겼어요. A.J.는 “A skunk sat on a stump”에서 벌써 딩동 소리를 냈답니다."
      },
      {
        type: "ox",
        question: "For winning round one, Andrea picked a grape smelly sticker.",
        note: "Chapter 4 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "The stickers came in grape, cool mint, tutti-frutti, and root beer. “I love smelly stickers!” Andrea said, and she chose grape.",
        ko: "스티커는 포도, 쿨민트, 투티프루티, 루트비어 향이 있었어요. Andrea는 “나는 냄새나는 스티커가 좋아!”라며 포도를 골랐답니다."
      },
      {
        type: "ox",
        question: "A.J. pretended he could not say the word “speech” and said “spooch” instead, so he could go to Miss Laney.",
        note: "Chapter 7 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "A.J. wanted to play Miss Laney's games instead of learning about saving energy. Mr. Granite thought the whole class had a speech problem and sent A.J., Ryan, Andrea, and Emily to Miss Laney right away.",
        ko: "A.J.는 에너지 절약을 배우는 대신 Miss Laney와 게임을 하고 싶었어요. Mr. Granite는 반 전체가 말하기 문제가 생긴 줄 알고 A.J., Ryan, Andrea, Emily를 바로 Miss Laney에게 보냈답니다."
      },
      {
        type: "mc",
        question: "What did A.J. win when he chose Stall Number Two in the game “What's in the Stall?”",
        note: "Chapter 8",
        options: [
          "A toilet bowl plunger",
          "A brand-new car",
          "A skateboard",
          "A paddle with a ball on a rubber band"
        ],
        correct: 0,
        en: "Miss Laney opened the stall and Ollie the Octopus said, “You won a toilet bowl plunger.” A.J. complained that it was not a prize because it was in the stall anyway.",
        ko: "Miss Laney가 칸막이 문을 열자 Ollie the Octopus가 “변기 뚫는 도구에 당첨됐어!”라고 했어요. A.J.는 원래 그 칸에 있던 물건이라면서 상이 아니라고 투덜댔답니다."
      },
      {
        type: "mc",
        question: "Which play did Miss Laney want the third graders to put on to make money?",
        note: "Chapter 9",
        options: [
          "Romeo and Juliet",
          "The Happy Bunny",
          "A Christmas Carol",
          "Peter Pan"
        ],
        correct: 0,
        en: "Miss Laney said people would pay to see a play and the school could make a million dollars. Mr. Granite suggested Romeo and Juliet, and A.J. became Romeo.",
        ko: "Miss Laney는 사람들이 연극을 보러 돈을 내면 학교가 100만 달러를 모을 수 있다고 했어요. Mr. Granite가 Romeo and Juliet을 추천해서 A.J.가 Romeo 역할을 맡게 된답니다."
      },
      {
        type: "ox",
        question: "Miss Laney told A.J. there would be kissing in the play.",
        note: "Chapter 9 · True or False?",
        options: ["True", "False"],
        correct: 1,
        en: "A.J. asked if there would be kissing, and Miss Laney said no. She told him Romeo and Juliet is a very violent story — Juliet stabs herself and Romeo drinks poison.",
        ko: "A.J.가 키스하는 장면이 있냐고 묻자 Miss Laney는 없다고 했어요. 오히려 Romeo and Juliet은 아주 폭력적인 이야기라서 Juliet은 스스로 칼에 찔리고 Romeo는 독을 마신다고 알려 줬답니다."
      },
      {
        type: "mc",
        question: "Which TV game show did the whole school watch Miss Laney on?",
        note: "Chapter 10",
        options: [
          "Win Money or Eat Bugs",
          "I Bet You Can't Say This!",
          "Deal or No Deal",
          "Wheel of Fortune"
        ],
        correct: 0,
        en: "Win Money or Eat Bugs is A.J.'s favorite show. The host was Dickie Blinkbarker, and Miss Laney told him she was playing for the kids at Ella Mentry School.",
        ko: "Win Money or Eat Bugs는 A.J.가 가장 좋아하는 프로그램이에요. 진행자는 Dickie Blinkbarker였고, Miss Laney는 Ella Mentry School 아이들을 위해 상금을 걸고 나왔다고 말했답니다."
      },
      {
        type: "mc",
        question: "How did Miss Laney save the school in the end?",
        note: "Chapter 11",
        options: [
          "She sold her speech program on TV and made a million dollars",
          "She won the lottery",
          "She found money in a bathroom stall",
          "The governor gave the school the money"
        ],
        correct: 0,
        en: "Right before she had to eat the bugs, Miss Laney did an infomercial for “Miss Laney's Amazing Zany Brainy No Painy Speech Fixer Upper.” It cost $19.99, orders poured in, and Mrs. Patty shouted that it reached a million dollars.",
        ko: "벌레를 먹기 직전 Miss Laney는 TV에서 “Miss Laney's Amazing Zany Brainy No Painy Speech Fixer Upper” 광고를 했어요. 가격은 19.99달러였고, 주문이 쏟아져서 Mrs. Patty가 100만 달러를 넘었다고 외쳤답니다."
      }
    ]
  },
  {
    id: "mrs-lizzy",
    title: "Mrs. Lizzy Is Dizzy!",
    series: "My Weird School Daze",
    seriesNo: 9,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "LZ",
    colors: ["#14532d", "#22c55e"],
    blurb: "It is Crazy Week at Ella Mentry School, and the new Recess Enrichment teacher has some very strange life skills to teach.",
    blurbKo: "Ella Mentry School에 Crazy Week가 찾아왔어요. 새 쉬는 시간 특별활동 선생님은 아주 이상한 생활 기술을 가르쳐 준다는데요.",
    questions: [
      {
        type: "mc",
        question: "What does it mean when the principal announces “Dr. Emer is in the building”?",
        note: "Chapter 1",
        options: [
          "It means there is a lockdown",
          "A doctor is visiting the school",
          "It is time for lunch",
          "School is cancelled for the day"
        ],
        correct: 0,
        en: "“Emer” is short for “emergency.” For a lockdown, everybody locks the classroom door, turns off the lights, sits on the floor in the corner, and stays very quiet.",
        ko: "“Emer”는 “emergency(비상사태)”의 줄임말이에요. Lockdown이 되면 모두 교실 문을 잠그고, 불을 끄고, 구석 바닥에 앉아 아주 조용히 있어야 한답니다."
      },
      {
        type: "mc",
        question: "What did Mr. Klutz and Mrs. Jafee wear when they announced Crazy Week?",
        note: "Chapter 2",
        options: [
          "Long blond wigs",
          "Giant clown shoes",
          "Ape suits",
          "Hats made of fruit"
        ],
        correct: 0,
        en: "Mr. Klutz has no hair at all, so everybody laughed when he poked his head in the doorway wearing a long blond wig. Mrs. Jafee had one on too.",
        ko: "Mr. Klutz는 머리카락이 하나도 없는데 긴 금발 가발을 쓰고 문가에 얼굴을 내밀어서 모두 웃었어요. Mrs. Jafee도 똑같은 가발을 쓰고 있었답니다."
      },
      {
        type: "mc",
        question: "Which day of Crazy Week was Crazy-Hat Day?",
        note: "Chapter 2",
        options: [
          "Wednesday",
          "Monday",
          "Thursday",
          "Friday"
        ],
        correct: 0,
        en: "Monday was Crazy-Hair Day, Tuesday was Crazy-Clothes Day, Wednesday was Crazy-Hat Day, Thursday was Crazy-Shoes Day, and Friday was Crazy-Everything Day.",
        ko: "월요일은 괴상한 머리날, 화요일은 괴상한 옷날, 수요일은 괴상한 모자날, 목요일은 괴상한 신발날, 금요일은 전부 괴상하게 입는 날이었어요."
      },
      {
        type: "mc",
        question: "What did Mrs. Lizzy's hair look like?",
        note: "Chapter 3",
        options: [
          "Two buns on the sides of her head, like Princess Leia",
          "A tall purple mohawk",
          "Long green dreadlocks",
          "A completely bald head"
        ],
        correct: 0,
        en: "The yellow hair on both sides of her head was curled up into buns. A.J. asked if she was Princess Leia, or if she had dinner rolls taped to her head.",
        ko: "양옆으로 노란 머리카락이 동그랗게 말려 올라가 있었어요. A.J.는 Princess Leia냐고, 아니면 머리에 저녁 빵을 테이프로 붙인 거냐고 물었답니다."
      },
      {
        type: "ox",
        question: "Mrs. Lizzy was the teacher for the new Recess Enrichment Program.",
        note: "Chapter 3 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "She told the kids the Board of Education started the Recess Enrichment Program, so they would learn new things during recess. The boys were not happy about it.",
        ko: "Mrs. Lizzy는 교육위원회가 쉬는 시간 특별활동 프로그램을 만들어서 쉬는 시간에도 새로운 것을 배우게 된 거라고 했어요. 남자아이들은 하나도 반기지 않았답니다."
      },
      {
        type: "mc",
        question: "What did Mrs. Lizzy teach the kids to make for Mother's Day?",
        note: "Chapter 4",
        options: [
          "A balloon animal",
          "A clay cup",
          "A greeting card",
          "A small pizza"
        ],
        correct: 0,
        en: "She blew up a long red balloon and twisted it into a little dog. She said she worked her way through college making balloon animals.",
        ko: "Mrs. Lizzy는 긴 빨간 풍선을 불어서 강아지 모양으로 꼬았어요. 대학 등록금을 벌려고 풍선 동물을 만들었다고도 했답니다."
      },
      {
        type: "ox",
        question: "Pootie the goat came from Rent-A-Goat.",
        note: "Chapter 4 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Mrs. Lizzy brought Pootie on a leash. “You can rent anything,” she said. Goats are her favorite animals.",
        ko: "Mrs. Lizzy는 Pootie를 목줄에 매고 데려왔어요. “무엇이든 빌릴 수 있단다”라고 했죠. 염소는 Mrs. Lizzy가 가장 좋아하는 동물이래요."
      },
      {
        type: "mc",
        question: "Why did A.J. have to milk Pootie the goat?",
        note: "Chapter 4",
        options: [
          "Because he was the only one wearing knee pads",
          "Because he lost a bet with Ryan",
          "Because the goat liked him best",
          "Because Mrs. Lizzy had to leave early"
        ],
        correct: 0,
        en: "Mrs. Lizzy said milking was hard on her knees and asked who wanted to take over. Then she saw A.J.'s knee pads from Crazy-Clothes Day and said, “How about you milk Pootie?”",
        ko: "Mrs. Lizzy는 염소 젖을 짜는 게 무릎이 아프다며 누가 대신 해 보겠냐고 물었어요. 그러다 괴상한 옷날에 A.J.가 찬 무릎 보호대를 보고 “A.J., 네가 Pootie 젖을 짜 볼래?”라고 했답니다."
      },
      {
        type: "mc",
        question: "Where did Mrs. Lizzy say yodeling came from?",
        note: "Chapter 6",
        options: [
          "Switzerland",
          "Italy",
          "England",
          "Texas"
        ],
        correct: 0,
        en: "She said yodeling was developed in Switzerland as a way for people to communicate on mountain peaks. She can even yodel with her mouth closed.",
        ko: "Mrs. Lizzy는 요들송이 스위스에서 산봉우리 사람들끼리 이야기하려고 생겨났다고 했어요. 입을 다물고도 요들송을 부를 수 있다고 한답니다."
      },
      {
        type: "mc",
        question: "Who was the real Recess Enrichment Program teacher?",
        note: "Chapter 8",
        options: [
          "Mrs. Sanford",
          "Mrs. Jafee",
          "Ms. Hannah",
          "Miss Lazar"
        ],
        correct: 0,
        en: "Officer Spence's men carried out a lady tied to a chair. She said, “I'm Mrs. Sanford. I was on my way to school on Monday to start the Recess Enrichment Program when that woman kidnapped me!”",
        ko: "Officer Spence의 부하들이 의자에 묶인 여성을 데려왔어요. 그녀는 “나는 Mrs. Sanford예요. 월요일에 쉬는 시간 특별활동을 시작하러 오다가 저 여자에게 납치됐어요!”라고 말했답니다."
      }
    ]
  },
  {
    id: "miss-mary",
    title: "Miss Mary Is Scary!",
    series: "My Weird School Daze",
    seriesNo: 10,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "MM",
    colors: ["#0b0b0f", "#9333ea"],
    blurb: "A student teacher from England dresses all in black and has a pet bat. Is she a vampire? And who keeps climbing in the window?",
    blurbKo: "영국에서 온 실습 선생님은 온통 검은 옷을 입고 박쥐를 키워요. 혹시 뱀파이어일까요? 그리고 창문으로 계속 들어오는 사람은 누구죠?",
    questions: [
      {
        type: "mc",
        question: "Why did the toilets and sinks in the boys' bathroom turn on by themselves?",
        note: "Chapter 1",
        options: [
          "Miss Lazar installed automatic toilets and sinks",
          "A ghost was in the bathroom",
          "A.J.'s friends were playing a trick",
          "Mr. Granite was fixing them"
        ],
        correct: 0,
        en: "The custodian, Miss Lazar, installed automatic sinks, hand dryers, and toilets to save water and electricity. She was just testing them out.",
        ko: "관리인 Miss Lazar가 물과 전기를 아끼려고 자동 세면대, 손 건조기, 변기를 설치했어요. 그날은 잘 작동하는지 시험해 보던 중이었답니다."
      },
      {
        type: "mc",
        question: "Who is Miss Mary?",
        note: "Chapter 2",
        options: [
          "Mr. Klutz's daughter and a student teacher from England",
          "Mr. Granite's sister",
          "Zack's mother",
          "The new vice principal"
        ],
        correct: 0,
        en: "Miss Mary came from England to do her student teaching for a year. She has black hair, black clothes, black eye makeup, and a tattoo of a black bat on her arm.",
        ko: "Miss Mary는 1년 동안 실습을 하러 영국에서 왔어요. 검은 머리, 검은 옷, 검은 화장에 팔에는 검은 박쥐 문신까지 있답니다."
      },
      {
        type: "mc",
        question: "What is the name of Zack's band?",
        note: "Chapter 3",
        options: [
          "Fish Food",
          "Heavy Metal",
          "The Rolling Stones",
          "Dirt"
        ],
        correct: 0,
        en: "Zack plays in a heavy metal band called Fish Food. He climbs in through the classroom window to see Miss Mary, and Mr. Granite hides him in the cloakroom.",
        ko: "Zack은 Fish Food라는 헤비메탈 밴드에서 활동해요. Miss Mary를 만나려고 교실 창문으로 들어오고, Mr. Granite는 그를 옷장에 숨겨 준답니다."
      },
      {
        type: "mc",
        question: "What is cheese rolling?",
        note: "Chapter 4",
        options: [
          "Rolling a round cheese down a hill and chasing it",
          "Throwing cheese at your friends",
          "Making cheese with your feet",
          "Eating cheese while you run"
        ],
        correct: 0,
        en: "Miss Mary says cheese rolling happens on the Spring Bank Holiday. Somebody rolls a round cheese down a hill, everybody chases it, and the winner is the first person to grab the cheese.",
        ko: "Miss Mary는 치즈 굴리기가 Spring Bank Holiday에 열린다고 했어요. 누군가 둥근 치즈를 언덕 아래로 굴리면 모두가 뒤쫓아가고, 치즈를 가장 먼저 잡은 사람이 이긴답니다."
      },
      {
        type: "ox",
        question: "Miss Mary has a pet bat named Roger.",
        note: "Chapter 4 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Miss Mary says she loves black spiders and insects, and back home in England she has a black bat named Roger. That is one reason the kids think she is a vampire.",
        ko: "Miss Mary는 검은 거미와 곤충을 좋아한다고 말하며, 영국 집에는 Roger라는 검은 박쥐가 있다고 했어요. 아이들이 그녀를 뱀파이어라고 의심하게 된 이유 중 하나랍니다."
      },
      {
        type: "ox",
        question: "Andrea's video of Zack singing “I Love Dirt” went viral and got Fish Food on Saturday Night Live.",
        note: "Chapter 8 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Andrea filmed Zack with her parents' video camera and put it on YouTube. Millions of people watched it, and the producer of Saturday Night Live called.",
        ko: "Andrea는 부모님의 비디오 카메라로 Zack을 찍어 YouTube에 올렸어요. 수백만 명이 보게 되었고, Saturday Night Live 제작자에게서 전화가 왔답니다."
      },
      {
        type: "mc",
        question: "Why did the man from the vacuum cleaner company want Zack's song?",
        note: "Chapter 10",
        options: [
          "He wanted to use it in TV commercials for vacuum cleaners",
          "He wanted to clean the school for free",
          "He was Zack's uncle",
          "He wanted to join the band"
        ],
        correct: 0,
        en: "Joe Navark from the Hoover Vacuum Cleaner Company wanted a cartoon vacuum cleaner to sing “I Love Dirt” in his commercials. He paid Zack two million dollars for the song.",
        ko: "Hoover Vacuum Cleaner Company의 Joe Navark는 광고에서 만화 청소기가 “I Love Dirt”를 부르게 하고 싶어 했어요. 그래서 Zack에게 그 노래 값으로 200만 달러를 주기로 했답니다."
      },
      {
        type: "mc",
        question: "Who married Zack and Miss Mary?",
        note: "Chapter 11",
        options: [
          "Mr. Louie, the crossing guard",
          "Mr. Klutz",
          "Mr. Granite",
          "Mr. Loring"
        ],
        correct: 0,
        en: "They got married on Halloween on the school playground. Mr. Louie, the crossing guard, married them because he used to be a judge.",
        ko: "두 사람은 할로윈 날 학교 운동장에서 결혼했어요. 예전에 판사였던 교통 안전 도우미 Mr. Louie가 결혼식을 진행했답니다."
      },
      {
        type: "mc",
        question: "Where did Zack and Miss Mary have their wedding?",
        note: "Chapter 11",
        options: [
          "On the school playground on Halloween",
          "In England",
          "At a church downtown",
          "In the school gym"
        ],
        correct: 0,
        en: "They got married on Halloween, and Mr. Klutz let them have the wedding right on the school playground. The kids wore their costumes, and there was a parade and a candy party first.",
        ko: "두 사람은 할로윈에 결혼했고, Mr. Klutz가 학교 운동장에서 결혼식을 올리게 해 주었어요. 아이들은 분장을 하고 나와 먼저 퍼레이드와 사탕 파티를 즐겼답니다."
      },
      {
        type: "ox",
        question: "At the very end of the story, A.J. sees a real ghost in the boys' bathroom.",
        note: "Chapter 12 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "After the wedding, A.J. runs to the bathroom and the toilet next to his flushes. This time there really is a ghost sitting there, and it says, “We eat kids for dinner.”",
        ko: "결혼식이 끝난 뒤 A.J.가 화장실에 갔더니 옆 칸 변기가 저절로 물을 내렸어요. 이번에는 정말로 유령이 앉아 있었고, 유령은 “우리는 아이들을 저녁으로 먹지”라고 했답니다."
      }
    ]
  },
  {
    id: "mr-tony",
    title: "Mr. Tony Is Full of Baloney!",
    series: "My Weird School Daze",
    seriesNo: 11,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "MT",
    colors: ["#7c2d12", "#f97316"],
    blurb: "A.J. has to go to After School Kids' Kare, and Mr. Tony wants to make the biggest pizza in the world.",
    blurbKo: "A.J.가 방과 후 돌봄교실에 다니게 되었어요. 그곳을 맡은 Mr. Tony는 세계에서 가장 큰 피자를 만들고 싶어 한답니다.",
    questions: [
      {
        type: "mc",
        question: "What is the name of A.J.'s mom's new company?",
        note: "Chapter 1",
        options: [
          "The Six Moms",
          "The Sandwich Shop",
          "McLeakey's",
          "ASKK Catering"
        ],
        correct: 0,
        en: "A.J.'s mom starts a catering company called The Six Moms with the mothers of Andrea, Michael, Ryan, Emily, and Neil. They make fancy sandwiches for parties.",
        ko: "A.J.의 엄마는 Andrea, Michael, Ryan, Emily, Neil의 엄마들과 함께 The Six Moms라는 케이터링 회사를 시작했어요. 파티용 근사한 샌드위치를 만드는 회사랍니다."
      },
      {
        type: "mc",
        question: "What does ASKK stand for?",
        note: "Chapter 3",
        options: [
          "After School Kids' Kare",
          "All Students Kids Klub",
          "After School Kids Kamp",
          "A Special Kids Klass"
        ],
        correct: 0,
        en: "ASKK is the after-school program. A.J. says it makes no sense because “care” is spelled with a C, not a K.",
        ko: "ASKK는 방과 후 프로그램 이름이에요. A.J.는 “care”는 C로 시작하는데 왜 K를 썼냐며 말이 안 된다고 투덜댔답니다."
      },
      {
        type: "mc",
        question: "What was Mr. Tony doing when he first showed up at the ASKK room?",
        note: "Chapter 3",
        options: [
          "Juggling while riding a pogo stick",
          "Riding a bicycle",
          "Eating a whole pizza",
          "Sleeping on the floor"
        ],
        correct: 0,
        en: "Mr. Tony came over on a pogo stick, juggling three balls. He said, “Mr. Tony, reporting for duty!” and saluted like he was in the army.",
        ko: "Mr. Tony는 외발자전거처럼 생긴 포고 스틱을 타고 공 세 개를 저글링하며 나타났어요. “Mr. Tony, 출두했습니다!”라고 군인처럼 경례했답니다."
      },
      {
        type: "mc",
        question: "Why does Mr. Tony want to get into The Guinness Book of World Records?",
        note: "Chapter 4",
        options: [
          "He thinks being the best in the world will give him the confidence to stop smoking",
          "He wants to be on TV",
          "He wants to win a lot of money",
          "He wants to become a teacher"
        ],
        correct: 0,
        en: "Mr. Tony is trying to quit smoking. He wears a nicotine patch and does pogo-juggling and egg-jogging. “If I was the best in the world at something, I think I would have the confidence to stop smoking.”",
        ko: "Mr. Tony는 담배를 끊으려고 노력 중이에요. 니코틴 패치를 붙이고 포고 저글링, 달걀 조깅을 하면서 “세계에서 가장 잘하는 게 있으면 담배를 끊을 자신이 생길 것 같다”고 했답니다."
      },
      {
        type: "ox",
        question: "The white Band-Aid on Mr. Tony's arm was really a nicotine patch.",
        note: "Chapter 4 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Emily thought he got hurt pogo-juggling. Mr. Tony explained that it was a nicotine patch to help him quit smoking.",
        ko: "Emily는 포고 저글링을 하다 다친 줄 알았어요. Mr. Tony는 그건 담배를 끊으려고 붙인 니코틴 패치라고 설명했답니다."
      },
      {
        type: "mc",
        question: "What did Mr. Klutz promise to do if the kids collected 3,000 pounds of food?",
        note: "Chapter 2",
        options: [
          "Jump out of an airplane in an ape suit and land on the roof of the school",
          "Dye his hair blue",
          "Eat a whole plate of bugs",
          "Sing in the third-grade play"
        ],
        correct: 0,
        en: "Mr. Klutz has been taking parachuting lessons and loves jumping out of planes. He said there is a big red circle on the roof so he can land on it.",
        ko: "Mr. Klutz는 낙하산 강습을 받아 왔고 비행기에서 뛰어내리는 걸 아주 좋아해요. 학교 지붕에 커다란 빨간 동그라미가 있어서 그 위에 내릴 수 있다고 했답니다."
      },
      {
        type: "mc",
        question: "What did A.J. tell people so he could get candy at their doors?",
        note: "Chapter 5",
        options: [
          "That it was the sequel to Halloween",
          "That it was his birthday",
          "That the school was closing",
          "That he was collecting food"
        ],
        correct: 0,
        en: "While collecting food for the food drive, A.J. started yelling “Trick or treat!” at each house. When a lady looked confused, he said good holidays get sequels, just like movies.",
        ko: "음식 모으기 활동을 하다가 A.J.는 집마다 “Trick or treat!”를 외쳤어요. 어떤 아주머니가 어리둥절해하자, 좋은 영화에 속편이 있듯이 좋은 명절에도 속편이 생겼다고 둘러댔답니다."
      },
      {
        type: "mc",
        question: "According to The Guinness Book of World Records, where was the biggest pizza in the world made?",
        note: "Chapter 8",
        options: [
          "In South Africa",
          "In Italy",
          "In New York",
          "In England"
        ],
        correct: 0,
        en: "The record pizza was made in South Africa in 1990. It was 386 feet around, with 1,764 pounds of cheese and 1,985 pounds of tomato sauce.",
        ko: "기네스 기록에 오른 피자는 1990년 남아프리카에서 만들어졌어요. 둘레가 386피트였고, 치즈 1,764파운드와 토마토소스 1,985파운드가 들어갔답니다."
      },
      {
        type: "mc",
        question: "Why did the lady from The Guinness Book of World Records refuse to give them the record?",
        note: "Chapter 10",
        options: [
          "Because two people were wrestling in the pizza",
          "Because the pizza was too small",
          "Because it had too much cheese",
          "Because the pizza was cold"
        ],
        correct: 0,
        en: "Mr. Klutz parachuted down and landed right in the pizza, and Mr. Tony dived in to save him. The rules say people are supposed to make the pizza, not wrestle in it.",
        ko: "Mr. Klutz가 낙하산을 타고 내려와 피자 한가운데에 떨어졌고, Mr. Tony가 구하려고 뛰어들었어요. 기네스 규칙에는 사람이 피자를 만들어야지, 피자 안에서 씨름하면 안 된다고 되어 있었답니다."
      },
      {
        type: "ox",
        question: "Mr. Tony dived into the giant pizza and pulled Mr. Klutz out.",
        note: "Chapter 10 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Mr. Klutz was flailing in the tomato sauce and shouting, “Help! I can't swim!” Mr. Tony dived headfirst into the pizza and pulled him out.",
        ko: "Mr. Klutz는 토마토소스 속에서 “살려 줘! 나 수영 못 해!”라고 외치고 있었어요. Mr. Tony가 피자 속으로 머리부터 뛰어들어 그를 끌어냈답니다."
      }
    ]
  },
  {
    id: "ms-leakey",
    title: "Ms. Leakey Is Freaky!",
    series: "My Weird School Daze",
    seriesNo: 12,
    author: "Dan Gutman",
    illustrator: "Jim Paillot",
    mark: "LK",
    colors: ["#365314", "#84cc16"],
    blurb: "A new health teacher wants everybody to eat right and exercise. She will even take a Twinkie out of your mouth!",
    blurbKo: "새 보건 선생님이 모두에게 바르게 먹고 운동하라고 해요. 심지어 입에 들어가던 Twinkie까지 빼앗는다는데요!",
    questions: [
      {
        type: "mc",
        question: "What did the teachers dressed up as food do on the stage?",
        note: "Chapter 2",
        options: [
          "They sword fought each other",
          "They sang a quiet song",
          "They cooked dinner for everybody",
          "They played basketball"
        ],
        correct: 0,
        en: "The banana, peanut, and carrot fought the candy bar, can of soda, and donut with swords. Ms. Leakey stabbed the donut, and chocolate syrup squirted everywhere.",
        ko: "바나나, 땅콩, 당근 분장을 한 선생님들이 초콜릿바, 콜라캔, 도넛 분장을 한 선생님들과 칼싸움을 했어요. Ms. Leakey가 도넛을 찌르자 초콜릿 시럽이 사방으로 튀었답니다."
      },
      {
        type: "mc",
        question: "Who beat Mr. Granite at arm wrestling?",
        note: "Chapter 3",
        options: [
          "Ms. Leakey",
          "Officer Spence",
          "Andrea",
          "Mr. Klutz"
        ],
        correct: 0,
        en: "Ms. Leakey slammed Mr. Granite's hand down, then beat Mr. Klutz and Officer Spence too. She says eating fruits and veggies and drinking milk makes you strong.",
        ko: "Ms. Leakey는 Mr. Granite의 손을 탁자에 내리쳤고, Mr. Klutz와 Officer Spence도 이겼어요. 과일과 채소를 먹고 우유를 마시면 힘이 세진다고 했답니다."
      },
      {
        type: "mc",
        question: "What did Ms. Leakey grab out of A.J.'s hand in the lunchroom?",
        note: "Chapter 4",
        options: [
          "His Twinkie",
          "His sandwich",
          "His juice box",
          "Andrea's carrot"
        ],
        correct: 0,
        en: "A.J. was about to bite into a Twinkie when Ms. Leakey shouted, “DROP THAT TWINKIE!” She read out the chemicals on the label, but A.J. took a bite anyway.",
        ko: "A.J.가 Twinkie를 입에 넣으려는 순간 Ms. Leakey가 “그 Twinkie 당장 놔!”라고 외쳤어요. 포장지에 적힌 화학물질 이름을 읽어 줬지만, A.J.는 결국 한입 베어 물었답니다."
      },
      {
        type: "mc",
        question: "What fell out of the punching bag in Ms. Leakey's office?",
        note: "Chapter 5",
        options: [
          "Candy, cookies, and popcorn",
          "Sand and small rocks",
          "Water",
          "Old library books"
        ],
        correct: 0,
        en: "A hole opened in the bag and treats poured out like a piñata. Ms. Leakey said the candy was for punching, not for eating.",
        ko: "펀칭백에 구멍이 생기더니 피냐타처럼 과자와 간식이 쏟아졌어요. Ms. Leakey는 그 과자는 먹으라고가 아니라 때리라고 넣어 둔 거라고 했답니다."
      },
      {
        type: "mc",
        question: "Who built Mr. Slug, the robot?",
        note: "Chapter 6",
        options: [
          "Mr. Docker and Mr. Harrison",
          "Ms. Leakey by herself",
          "Mr. Klutz",
          "The third-grade students"
        ],
        correct: 0,
        en: "Mr. Docker, the science teacher, and Mr. Harrison, the new tech guy, built Mr. Slug. Ms. Leakey inspired them: the robot shows what smoking, drinking, and eating poorly do to you.",
        ko: "과학 선생님 Mr. Docker와 새 기술 담당 Mr. Harrison이 Mr. Slug를 만들었어요. Ms. Leakey에게서 아이디어를 얻어, 담배와 술, 나쁜 식습관이 몸에 어떤 영향을 주는지 보여 주는 로봇이랍니다."
      },
      {
        type: "mc",
        question: "What does Mr. Slug run on?",
        note: "Chapter 6",
        options: [
          "Potatoes",
          "Batteries",
          "Candy",
          "Water"
        ],
        correct: 0,
        en: "Mr. Slug runs on potatoes, just like Mr. Docker's car. Mr. Slug has a cigarette in his mouth and a can of beer in one hand, and he coughs and says, “I feel lousy.”",
        ko: "Mr. Slug는 Mr. Docker의 자동차처럼 감자로 움직여요. 입에는 담배, 한 손에는 맥주캔을 들고 기침하면서 “몸이 안 좋아”라고 말한답니다."
      },
      {
        type: "mc",
        question: "What was on the menu at McLeakey's?",
        note: "Chapter 7",
        options: [
          "Broccoli burgers, meatless meatballs, and tofu",
          "Hamburgers, hot dogs, and soda",
          "Pizza and ice cream",
          "Cake and cookies"
        ],
        correct: 0,
        en: "The clown at the drive-through would not sell A.J. a hamburger, hot dog, chicken nuggets, or soda. McLeakey's had broccoli burgers, meatless meatballs, vegetarian ribs, McMelon, and ten kinds of tofu — and apples picked from a tree inside the restaurant.",
        ko: "드라이브스루의 광대는 햄버거도, 핫도그도, 치킨너겟도, 콜라도 팔지 않았어요. McLeakey's에는 브로콜리 버거, 고기 없는 미트볼, 채식 갈비, McMelon, 열 가지 두부가 있었고, 식당 안에 있는 나무에서 사과를 따 주었답니다."
      },
      {
        type: "ox",
        question: "Ms. Leakey was hiding under A.J.'s bed to take away his Hershey bar.",
        note: "Chapter 9 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "A.J. remembered a Hershey bar hidden in his closet. Just as he was about to bite it, Ms. Leakey jumped out from under his bed, took the candy, and climbed out the window.",
        ko: "A.J.는 옷장에 숨겨 둔 Hershey 초콜릿을 떠올렸어요. 막 한입 베어 물려는 순간 Ms. Leakey가 침대 밑에서 튀어나와 초콜릿을 빼앗고 창문으로 나가 버렸답니다."
      },
      {
        type: "mc",
        question: "Where did the kids find Ms. Leakey eating junk food?",
        note: "Chapter 10",
        options: [
          "In the Dumpster behind the school",
          "In her office",
          "At McLeakey's restaurant",
          "Under A.J.'s bed"
        ],
        correct: 0,
        en: "Ms. Leakey had thrown the kids' junk food into the Dumpster, so the kids went Dumpster diving. They found her sitting inside, surrounded by candy, with a Twinkie in her mouth.",
        ko: "Ms. Leakey는 아이들의 군것질거리를 쓰레기 수거함에 버렸어요. 그래서 아이들이 그 수거함을 뒤졌는데, Ms. Leakey가 과자에 둘러싸여 Twinkie를 입에 문 채 앉아 있었답니다."
      },
      {
        type: "ox",
        question: "Mr. Klutz fired Ms. Leakey because she went overboard with all the health food rules.",
        note: "Chapter 11 · True or False?",
        options: ["True", "False"],
        correct: 0,
        en: "Mr. Klutz said it is okay to have junk food once in a while as a treat, and Ms. Leakey just went too far. The new health teacher is Mr. Slug, the robot.",
        ko: "Mr. Klutz는 가끔은 군것질도 괜찮다면서 Ms. Leakey가 너무 지나쳤다고 했어요. 새 보건 선생님은 로봇인 Mr. Slug가 되었답니다."
      }
    ]
  }
];
