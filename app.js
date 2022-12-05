"use strict";

var gQuestions = createQuests();

var gCurrQuestIdx = 0;
var gScore = 0;
function initGame() {
  createQuests();
  renderQuest();
}

function createQuests() {
  var questArr = [
    {
      id: 1,
      opts: ["Pizza", "Sabich"],
      correctOptIndex: 0,
    },
    {
      id: 2,
      opts: ["Rome, Italy", "Paris, France"],
      correctOptIndex: 1,
    },
    {
      id: 3,
      opts: ["JS", "HTML"],
      correctOptIndex: 0,
    },
  ];
  return questArr;
}

function renderQuest() {
  if (gCurrQuestIdx === gQuestions.length) {
    sendMsg();
  }

  var strHTML = "";
  var elAns = document.querySelector(".ans");
  var elImg = document.querySelector(".question img");
  elImg.src = `assets/${gCurrQuestIdx + 1}.jpg`;
  for (var i = 0; i < gQuestions[gCurrQuestIdx].opts.length; i++) {
    strHTML += `
    <button onClick="checkAnswer(${i})">${gQuestions[gCurrQuestIdx].opts[i]}</button>
    `;
  }
  elAns.innerHTML = strHTML;
}

function checkAnswer(optIdx) {
  var scoreSpan = document.querySelector("h3 span");

  if (optIdx === gQuestions[gCurrQuestIdx].correctOptIndex) {
    gScore++;
    scoreSpan.innerText = gScore;
    gCurrQuestIdx++;
    console.log(gCurrQuestIdx);
    console.log(scoreSpan);

    renderQuest();
  }
}

function reset() {
  window.location.reload();
}

function sendMsg() {
  alert("You are victorious!");
  reset();
}
