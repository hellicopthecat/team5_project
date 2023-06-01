메뉴, footer - 서지나
쇼핑, 매장 - 장진용
이벤트, 메인 - 최준혁
스토리,헤더 - 진우

1 DEPTH - 영어
2 DEPTH - 한글

** 이미지 저장 요령
* 해당페이지_{number}
** 꼭 지키실 필요는 없고 가독과 구분이 잘되기만 하면 됩니다.

** css 요령
각 페이지 css를 작성후 style.css에 import
style.css에는 전체단위 및 전체 element단위 스타일을 제외하고는 기입 금지

** 깃 커밋 요령
본인 작업 후 -> git add .
git commit -m "(본인이름 약자 두 글자{jn,jw,jh,jy})_(커밋내용)_(넘버링)"
git pull origin main
git push origin main

** 깃허브 업로드 했으면 단톡에 알려주시길 바랍니다.

** 폰트 사용 요령
저희가 사용하는 폰트를 웹폰트 형식으로 바꾸어 파일을 저장해서 css에 사용할 수 있게 세팅해놨습니다.
메인 폰트는 "JUA"
서브 폰트는 "YACHAE" 입니다.
변수로 지정해뒀습니다. 사용하실 때 아래를 참조하세요
// font-family: var(--main-font);
// font-family: var(--sub-font);


헤더랑 푸터 하시는 분들은 html 작업은 index.html에 하시면 되고 css는 components 폴더에 하셔서 style.css에 임포트 하시면 됩니다. 

파일 업로드시 단톡에 물어보고 올리는 방법을 하고 싶습니다. 
특히 index.html 작업시 헤더 메인페이지 푸터 담당하는 사람들끼리 일정 조정하면 좋을 듯합니다.
(깃헙 업로드시 충돌 방지)


display : none은 class="hidden" 으로 지정해놨습니다. 필요하시면 hidden으로 클래스 추가 하시면 됩니다.