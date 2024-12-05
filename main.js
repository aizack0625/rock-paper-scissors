const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const result = document.getElementById('result');
const intro = document.getElementById('intro');
const retly = document.getElementById('retly');

retly.style.display = 'none';

function retlyGame() { // もう一度ボタンを表示
  retly.style.display = 'block';
}

const partnerHand = document.getElementById('partner_hand');

const choices = [
  './images/rock.png', //グー
  './images/scissors.png', //チョキ
  './images/paper.png', //パー
];

//　自分がグーを出した時
rock.addEventListener('click', () => {
  if (rock.classList.contains('btn_pushed')) { //手を出したら押せなくする
    return;
  }
  rock.classList.add('btn_pushed'); //出した手を押せないような表示にする
  scissors.style.display = 'none';
  paper.style.display = 'none';
  const random = Math.floor(Math.random() * 3);
  partnerHand.src = choices[random];
  switch(random) {
    case 0:
      result.innerHTML = '引き分け!';
    break;
    case 1:
      result.innerHTML = 'あなたの勝ち!';
    break;
    default:
      result.innerHTML = 'あなたの負け!';
  }
  intro.innerHTML = 'ポン!';
  retlyGame();
  updateScore(result.innerHTML);
  // ボタンのイベントリスナーを削除
  rock.removeEventListener('click', arguments.callee);
});

//　自分がチョキを出した時
scissors.addEventListener('click', () => {
  if (scissors.classList.contains('btn_pushed')) {
    return;
  }
  scissors.classList.add('btn_pushed');
  rock.style.display = 'none';
  paper.style.display = 'none';
  const random = Math.floor(Math.random() * 3);
  partnerHand.src = choices[random];
  switch(random) {
    case 0:
      result.innerHTML = 'あなたの負け!';
    break;
    case 1:
      result.innerHTML = '引き分け!';
    break;
    default:
      result.innerHTML = 'あなたの勝ち!';
  }
  intro.innerHTML = 'ポン!';
  retlyGame();
  updateScore(result.innerHTML);
});

//　自分がパーを出した時
paper.addEventListener('click', () => {
  if (paper.classList.contains('btn_pushed')) {
    return;
  }
  paper.classList.add('btn_pushed');
  rock.style.display = 'none';
  scissors.style.display = 'none';
  const random = Math.floor(Math.random() * 3);
  partnerHand.src = choices[random];
  switch(random) {
    case 0:
      result.innerHTML = 'あなたの勝ち!';
    break;
    case 1:
      result.innerHTML = 'あなたの負け!';
    break;
    default:
      result.innerHTML = '引き分け!';
  }
  intro.innerHTML = 'ポン!';
  retlyGame();
  updateScore(result.innerHTML);
});

retly.addEventListener('click', () => { //もう一度ボタンを押したらそのボタンを消す
  resetGame();
  retly.style.display = 'none';
});


//成績を表示する
const win = document.getElementById('win');
const draw = document.getElementById('draw');
const lose = document.getElementById('lose');

// グローバル変数で成績を管理
let winCount = 0;
let drawCount = 0;
let loseCount = 0;

// 勝敗判定後に成績をカウントし、HTMLを更新する関数
function updateScore(result) {
  if (result.includes('勝ち')) {
    winCount++;
  } else if (result.includes('負け')) {
    loseCount++;
  } else {
    drawCount++;
  }

  win.textContent = winCount;
  draw.textContent = drawCount;
  lose.textContent = loseCount;
}

function resetGame() { // 初期状態の表示に戻す
  rock.style.display = 'inline';
  scissors.style.display = 'inline';
  paper.style.display = 'inline';
  rock.classList.remove('btn_pushed');
  scissors.classList.remove('btn_pushed');
  paper.classList.remove('btn_pushed');
  intro.innerHTML = '最初はグー、じゃんけん...';
  partnerHand.src = './images/rock.png';
  result.innerHTML = '';
}
