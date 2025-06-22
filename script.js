
document.getElementById('imageUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('preview');
  const resultBox = document.getElementById('resultBox');

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';

      // 임시 결과값
      document.getElementById('testosterone').textContent = 64;
      document.getElementById('estrogen').textContent = 36;
      document.getElementById('jawStrength').textContent = '보통';
      document.getElementById('eyeSize').textContent = '큼';
      document.getElementById('lipThickness').textContent = '보통';
      resultBox.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});
