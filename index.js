var name = prompt("あなたの名前は？");
var answer
var qize = prompt(name+"さん、これからクイズを出します。日本で一番大きな都道府県は？");
var answer = [qize];
var qize2 = prompt("二問目です。地球に一番近い惑星は？");
answer.push(qize2)
var qize3 = prompt("三問目です。世界で二番目に高い山は？");
answer.push(qize3);
var result = ["北海道", "金星", "ゴドウィンオースチン"];

if (answer.toString() == result.toString()) {
  alert(name+"さん、全問正解！おめでとうございます！");
}else{
  alert(name+"さん、おつかれさま。次回は全問正解目指してがんばろう！");
}
