const title = "敦賀クイズ！";

const quizzes = {
    tourism: [
        {
            question: "緑豊かな広場と美しい海景が楽しめるスポットは？",
            choices: [
                { text: "金ヶ崎緑地", correct: true },
                { text: "赤レンガ倉庫", correct: false },
                { text: "敦賀美術館", correct: false },
                { text: "敦賀港駅", correct: false }
            ],
        },
        {
            question: "歴史ある赤レンガの建物が立ち並び、カフェやショップが充実している観光名所は？",
            choices: [
                { text: "赤レンガ倉庫", correct: true },
                { text: "金ヶ崎緑地", correct: false },
                { text: "敦賀美術館", correct: false },
                { text: "敦賀港駅", correct: false }
            ],
        },
        {
            question: "日本三大松原の一つで、静かな海岸線と松林が広がる風光明媚な場所は？",
            choices: [
                { text: "気比の松原", correct: true },
                { text: "敦賀湾", correct: false },
                { text: "護国神社", correct: false },
                { text: "魚町アーケード", correct: false }
            ],
        },
        {
            question: "地元の芸術作品や展示物を楽しめる美術館は？",
            choices: [
                { text: "敦賀美術館", correct: true },
                { text: "敦賀港駅", correct: false },
                { text: "護国神社", correct: false },
                { text: "敦賀湾", correct: false }
            ],
        },
        {
            question: "敦賀港の史実を後世に伝える資料館は？",
            choices: [
                { text: "人道の港 敦賀ムゼウム", correct: true },
                { text: "金ヶ崎宮", correct: false },
                { text: "敦賀赤レンガ倉庫", correct: false },
                { text: "木ノ芽峠", correct: false }
            ],
        },
        {
            question: "3000種の動植物が生息するラムサール条約湿地は？",
            choices: [
                { text: "中池見湿地", correct: true },
                { text: "西福寺", correct: false },
                { text: "創作和紙人形 紙わらべ資料館", correct: false },
                { text: "気比の松原", correct: false }
            ],
        }
    ],
    events: [
        {
            question: "地元の文化や歴史を祝う大規模なお祭りは？",
            choices: [
                { text: "敦賀港祭り", correct: true },
                { text: "花火大会", correct: false },
                { text: "紅葉祭り", correct: false },
                { text: "敦賀マラソン", correct: false }
            ],
        },
        {
            question: "夏の夜空を彩る華やかなイベントは？",
            choices: [
                { text: "花火大会", correct: true },
                { text: "敦賀港祭り", correct: false },
                { text: "冬のイルミネーション", correct: false },
                { text: "金ヶ崎桜祭り", correct: false }
            ],
        },
        {
            question: "秋の紅葉シーズンに合わせて行われるイベントは？",
            choices: [
                { text: "紅葉祭り", correct: true },
                { text: "冬のイルミネーション", correct: false },
                { text: "敦賀マラソン", correct: false },
                { text: "夏のフードフェス", correct: false }
            ],
        },
        {
            question: "市内を駆け抜ける参加型のスポーツイベントは？",
            choices: [
                { text: "敦賀マラソン", correct: true },
                { text: "敦賀港祭り", correct: false },
                { text: "新年参拝ツアー", correct: false },
                { text: "敦賀ビール祭り", correct: false }
            ],
        },
        {
            question: "冬の夜空を彩るライトアップイベントは？",
            choices: [
                { text: "冬のイルミネーション", correct: true },
                { text: "花火大会", correct: false },
                { text: "金ヶ崎桜祭り", correct: false },
                { text: "敦賀港祭り", correct: false }
            ],
        },
        {
            question: "春に行われる桜の美しさを楽しむお祭りは？",
            choices: [
                { text: "金ヶ崎桜祭り", correct: true },
                { text: "紅葉祭り", correct: false },
                { text: "冬のイルミネーション", correct: false },
                { text: "花火大会", correct: false }
            ],
        }
    ],
    food: [
        {
            question: "新鮮な海の幸を贅沢に使用した丼ぶりは？",
            choices: [
                { text: "海鮮丼", correct: true },
                { text: "敦賀寿司", correct: false },
                { text: "鯖寿司", correct: false },
                { text: "敦賀ラーメン", correct: false }
            ],
        },
        {
            question: "地元の新鮮な魚を使った握り寿司は？",
            choices: [
                { text: "敦賀寿司", correct: true },
                { text: "鯖寿司", correct: false },
                { text: "敦賀バーガー", correct: false },
                { text: "海鮮バーベキュー", correct: false }
            ],
        },
        {
            question: "敦賀名物の鯖を使った押し寿司は？",
            choices: [
                { text: "鯖寿司", correct: true },
                { text: "敦賀寿司", correct: false },
                { text: "敦賀ラーメン", correct: false },
                { text: "ふくいそば", correct: false }
            ],
        },
        {
            question: "福井県産の蕎麦を使用した風味豊かな蕎麦は？",
            choices: [
                { text: "ふくいそば", correct: true },
                { text: "敦賀ラーメン", correct: false },
                { text: "地元野菜の天ぷら", correct: false },
                { text: "敦賀バーガー", correct: false }
            ],
        },
        {
            question: "新鮮な海産物をその場で焼いて楽しむバーベキューは？",
            choices: [
                { text: "海鮮バーベキュー", correct: true },
                { text: "お刺身盛り合わせ", correct: false },
                { text: "金ヶ崎の名水豆腐", correct: false },
                { text: "敦賀寿司", correct: false }
            ],
        },
        {
            question: "地元の名水を使用した手作り豆腐は？",
            choices: [
                { text: "金ヶ崎の名水豆腐", correct: true },
                { text: "ふくいそば", correct: false },
                { text: "お刺身盛り合わせ", correct: false },
                { text: "敦賀バーガー", correct: false }
            ],
        }
    ]
};

let currentQuizIndex = 0;
let selectedTheme = "";
let results = [];

document.addEventListener("DOMContentLoaded", () => {
  const themeSelect = document.getElementById("theme-select");
  const startButton = document.getElementById("start-quiz");
  const restartButton = document.getElementById("restart-quiz");
  const resultContainer = document.getElementById("result");

  // index.html用の処理
  if (themeSelect && startButton) {
      themeSelect.addEventListener("change", () => {
          selectedTheme = themeSelect.value;
          startButton.disabled = !selectedTheme;
      });

      startButton.addEventListener("click", startQuiz);
  }

  // result.html用の処理
  if (restartButton) {
      restartButton.addEventListener("click", () => {
          window.location.href = 'index.html';
      });
  }

  if (resultContainer) {
      displayResults();
  }
});

function startQuiz() {
  localStorage.setItem("selectedTheme", selectedTheme);
  displayQuiz(currentQuizIndex);
}

function displayQuiz(index) {
  const quiz = quizzes[selectedTheme][index];
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Clear existing content

  const quizDiv = document.createElement('div');
  quizDiv.classList.add('quiz');
  quizDiv.innerHTML = `
      <h1>${title}</h1>
      <div class="quiz">
          <p>${quiz.question}</p>
          <div class="answers">
            ${shuffle(quiz.choices.map((choice, i) => `<button onclick="submitAnswer(${index}, ${i})">${choice.text}</button>`)).join('')}
          </div>
      </div>
  `;
  container.appendChild(quizDiv);
}

function submitAnswer(quizId, choiceIndex) {
    const isCorrect = quizzes[selectedTheme][quizId].choices[choiceIndex].correct;
    results[quizId] = { id: quizId, choiceIndex: choiceIndex, isCorrect: isCorrect };

    if (quizId === quizzes[selectedTheme].length - 1) {
        localStorage.setItem("quizResults", JSON.stringify(results));
        location.href = 'result.html';
    } else {
        currentQuizIndex++;
        displayQuiz(currentQuizIndex);
    }
}

function displayResults() {
  results = JSON.parse(localStorage.getItem("quizResults")) || [];
  selectedTheme = localStorage.getItem("selectedTheme") || "tourism"; // デフォルトのテーマを設定
  const correctCount = results.filter(result => result.isCorrect).length;
  const container = document.getElementById("result");
  if (container) {
      container.innerHTML = `<p>正解数: ${correctCount} / ${quizzes[selectedTheme].length}</p>`;
  }
}

function shuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}