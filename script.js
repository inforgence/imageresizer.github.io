// 기존 코드...
function shareNaver() {
  const url = encodeURIComponent(location.href);
  const title = encodeURIComponent(document.title);
  window.open(`https://share.naver.com/web/shareView.nhn?url=${url}&title=${title}`, "_blank");
}

function shareKakao() {
  Kakao.init('YOUR_KAKAO_APP_KEY');
  Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
      title: document.title,
      description: 'Description here',
      imageUrl: canvas.toDataURL(),
      link: {
        mobileWebUrl: location.href,
        webUrl: location.href
      },
    },
  });
}

function shareFacebook() {
  const url = encodeURIComponent(location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareTwitter() {
  const text = encodeURIComponent(document.title);
  const url = encodeURIComponent(location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
}

function shareInstagram() {
  alert('인스타그램은 직접 이미지 업로드를 해주셔야 합니다.');
}
