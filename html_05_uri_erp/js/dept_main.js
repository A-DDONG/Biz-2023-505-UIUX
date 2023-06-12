document.addEventListener("DOMContentLoaded", () => {
  /*
    dept_main 에서 입력하는 요소 중에서
    거래처코드, 거래처명, 대표전화, 담당자명, 담당자연락처는 
    반드시 입력해야 하는 요소이다

    각 요소를 입력하지 않고 저장을 할 경우
    alert 경고를 띄우고, 값을 입력하도록 하는 front validation(유효성 검사)를 실행하시오
    */
  const d_code = document.querySelector(".dept#d_code");
  const btn_save = document.querySelector("#btn_save");

  const btnSaveOnClick = () => {
    const dCodeText = d_code.value;

    if (!dCodeText) {
      alert("거래처코드는 반드시 입력해야 합니다");
    }
  };
});
