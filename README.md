# movieDB-vue3
 
- Vue.js와 영화 검색 API를 활용해 프로젝트 만들기

배포: https://splendid-churros-52cd3d.netlify.app/

### 기본 요구사항

- [x] 검색어를 입력해 영화를 검색할 수 있어야 합니다.
- [x] 검색된 결과를 통해 영화의 상세 정보를 볼 수 있어야 합니다.
- [x] 클라이언트에서 API Key가 노출되지 않아야 합니다.
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

## 👩‍💻 요구 사항과 구현 내용

- [x] API 요청(Request)에 대한 로딩 애니메이션 추가
- [x] 영화 상세 검색으로 출력할 영화 포스터를 더 높은 해상도 사용.

![image](https://user-images.githubusercontent.com/105067764/206696864-fd03e1df-11fe-4998-afff-856939c7b8d9.png)

영화 제목을 입력시 영화 리스트를 출력합니다.
한 페이지에 출력할 최대 포스터의 개수를 선택가능합니다. 
(default: 10)

![image](https://user-images.githubusercontent.com/105067764/206697805-63c98586-71e1-4eea-b3a0-56f15c8e1b65.png)

페이지네이션을 통해 다음 영화 리스트를 출력합니다.

![image](https://user-images.githubusercontent.com/105067764/206698255-aa219e4c-a4c4-4fa9-a082-33e571a9c3b9.png)

API 요청에 대한 로딩 애니메이션을 출력합니다.

![image](https://user-images.githubusercontent.com/105067764/206697433-74e70091-5016-4d26-a7c7-e03e97803d26.png)

포스터를 선택하면 영화 정보페이지로 이동합니다.
헤더 메뉴의 details를 누르면 가장 최근에 방문한 영화 정보페이지로 이동합니다.

![image](https://user-images.githubusercontent.com/105067764/209298828-53e10339-3bb0-4374-8355-fd25a715752d.png)

영화 검색을 실패했을때 기존 영화 목록을 삭제하고
에러 메시지를 출력합니다.
