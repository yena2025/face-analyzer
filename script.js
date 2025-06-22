document.getElementById('imageUpload').addEventListener('change', async function (e) {
  const file = e.target.files[0];
  if (!file) return;
  alert('이미지 업로드됨! 향후 분석 기능이 여기에 추가됩니다.');
});