// script ทายเลข
let count = 0;

function checkLotto() {
  count++;
  let lotto_number = document.getElementById("lotto_number").value;
  let random_number = Math.floor(Math.random() * 100);

  console.log(lotto_number)
  console.log(random_number)

  document.getElementById("lotto").innerText = lotto_number;
  document.getElementById("random").innerText = random_number;
  document.getElementById("count").innerText = "สุ่มไปแล้ว: " + count + " ครั้ง";

  if (lotto_number == random_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วย!!! คุณถูกรางวัล";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "เสียใจด้วย!!! คุณไม่ถูกรางวัล";
    document.getElementById("result").style.color = "red";
  }
}

console.log("By:Parnuphong Sanponmueang");
