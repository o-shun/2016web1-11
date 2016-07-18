var number = Math.floor(Math.random()*10);
var answer = parseInt(window.prompt('数あてゲーム！０～９の数字を入力してください！'));

var message;
if(answer == number){
  message = 'あたり！';
}else if(answer < number){
  message = '残念！もっと大きいです';
}else if(number < answer){
  message = '残念！もっと小さいです';
}else{
  message = '０～９の数字を入力してください';
}

document.getElementById('choice').textContent = message;
