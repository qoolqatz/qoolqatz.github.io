// script ทายเลข
let count = 0;

function checkLotto() {
  let lotto_number = document.getElementById("lotto_number").value;

  // ตรวจสอบว่าค่าเป็นตัวเลข 2 หลักหรือไม่
  if (!/^\d{1,2}$/.test(lotto_number)) {
    alert("ระบุตัวเลขได้เท่านั่น โดยเป็น 1 หรือ 2 หลัก");
    return;
  }

  count++;
  let random_number = Math.floor(Math.random() * 100);

  console.log(lotto_number);
  console.log(random_number);

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
