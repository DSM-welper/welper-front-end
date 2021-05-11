import Swal from "sweetalert2";

export const confirmAlert = (title, subTitle, icon, requestFunction) => {
  return Swal.fire({
    title,
    text: subTitle,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#de2626",
    cancelButtonColor: "#022796",
    confirmButtonText: title === "잠깐!" ? "네, 탈퇴하겠습니다." : "삭제",
    cancelButtonText: title === "잠깐!" ? "아니요, 취소할게요." : "취소",
  }).then((result) => {
    if (result.value) {
      requestFunction();
    }
  });
};
