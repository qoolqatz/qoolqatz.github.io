
// script ทายเลข
{
  let lotto_number = prompt("กรอกเลขที่ต้องการ 2 ตัว");
  let random_number = Math.floor(Math.random() * 100)

  document.getElementById("lotto").innerHTML = lotto_number;
  document.getElementById("random").innerHTML = random_number;

  if (lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดูด้วย!!! คุณถูกรางวัล"
  } else {
    document.getElementById("result").innerHTML = "เสียใจด้วย!!! คุณไม่ถูกรางวัล"
  }
}
// หมด script ทายเลข


console.log("By:Parnuphong Sanponmueang");
