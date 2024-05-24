# Finance Teacher 개요

## 팀원
| 이름       | 역할  | GitHub                                      |
|------------|-------|---------------------------------------------|
| 여대기 (버니) | 팀장  | [daegi0923](https://github.com/daegi0923) |
| 진아현 (푸린) | 팀원  | [akeroroh](https://github.com/akeroroh)   |

## 개발 기간
- 2024.05.08 ~ 2024.05.24

# 컨셉 및 서비스 구상

## 기획 의도 및 서비스 대상
- <금선생>는 사회초년생을 대상으로 미래의 금융 계획을 세워주고 금융 정보들을 알려주는 서비스입니다. 

## 서비스 소개
### 시작 페이지
![6f815a4d-c777-4ab3-8b72-baf35e69c71e](https://github.com/daegi0923/Finance_Teacher/assets/156268579/0bc0dd67-1143-4e3c-8628-a304698e9346)
### 메인페이지
![Untitled](https://github.com/daegi0923/Finance_Teacher/assets/156268579/a747d306-c18f-4f19-aa29-43c868e429f1)


- carousel을 이용하여 핵심 기능 설명
- 금융 단어장 API를 이용한 단어장 기능
- 게시판 글 목록 제공과 링크
- 네이버 경제 뉴스 크롤링으로 실시간 뉴스 제공과 링크제공

### 예금/적금 비교
![Untitled 1](https://github.com/daegi0923/Finance_Teacher/assets/156268579/b4fd97ca-66b2-4995-837d-83aafe7476aa)

![Untitled 2](https://github.com/daegi0923/Finance_Teacher/assets/156268579/b7ddbe70-0b29-44f7-bd1a-d91b70976269)


- API를 사용하여 정보 데이터베이스에 저장
- 비교 메인 페이지에서 예금과 적금 페이지 분리
- 오름차순 내림차

### 은행찾기
![Untitled 3](https://github.com/daegi0923/Finance_Teacher/assets/156268579/14f5b6f2-323e-49b0-8aee-88a543514e82)



- 카카오맵 API 이용
- 키워드와 선택창을 이용한 검색 기능 2가지 제공
- 현위치로 이동 가능
- 마커 클릭시 관련 사이트로 이동

### 환율계산기
![Untitled 4](https://github.com/daegi0923/Finance_Teacher/assets/156268579/6d853b90-50da-4f1e-b9f3-5b5916faf3fc)


- API를 활용한 실시간 환율 정보 제공
- 환율 계산기 구현
- 나라 선택시 해당 국기 도출

### 저축도우미
![Untitled 5](https://github.com/daegi0923/Finance_Teacher/assets/156268579/e0b2f5ae-ce3c-4059-b62e-7d28d9eb3fe3)



- Gemini를 이용한 챗봇
- 제공 저축 서비스를 스크립트로 제공하여 추천 저축플레너
- 훈장님의 성격 적용
### 게시판
![Untitled 6](https://github.com/daegi0923/Finance_Teacher/assets/156268579/3a983a27-ce25-4781-af1e-7dcbc6238d7a)

### 회원 페이지
![Untitled 7](https://github.com/daegi0923/Finance_Teacher/assets/156268579/eb3da466-18ba-4002-913d-288b1eb4e4e2)


# 개발 계획 및 역할 구분
| ID | Task | 상위 페이지 | 내용  | 프론트엔드 | 백엔드 | 데이터 | 담당 | 완료여부(날짜) | 구현정도 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 초기화면 | - | - 회원가입, 로그인 페이지로 이동<br>- 프로젝트 제목, 간단한 소개글 | - 대표 이미지<br>- 회원가입 버튼<br>- 로그인 버튼 | X | X | 푸린 | 240520 | ⭐⭐⭐⭐⭐ |
| 2 | 네비게이션 바 | - | - [3, 4, 5, 6, 9, 12] 왼쪽<br>[7, 8]오른쪽 | - 로고<br>- 서비스 네비<br>- 마이페이지 및 로그아웃 버튼 | X | X | 푸린 | 240520 | ⭐⭐⭐⭐⭐ |
| 3 | 메인 페이지 | - | - 서비스 내용들을 소개할 수 있는 carousel<br>- 전체소개, 4, 9<br>- 환율 계산기 (가운데 상단)<br>- 커뮤니티 글 목록(N개, 가운데 하단)<br>- 뉴스 모음 (우측 상단)<br>- 단어장 (우측 하단) | - 페이지 레이아웃 및 디자인<br>- 커뮤니티 구역에서 게시글 클릭 시 이동<br>- 서비스 버튼들 구현 | - 커뮤니티 R | - 커뮤니티 게시글 제목, id | 푸린 | 240522 | ⭐⭐⭐⭐ |
| 4 | 예금 & 적금 금리 비교 | - | - 처음에는 전체조회 화면을 표출(예금)<br>- 예금, 적금 화면 나눠서 적절한 항목만 표출 | - 예금조회/적금조회 화면 전환할 수 있는 버튼 화면에 출력<br>- 초기화면은 예금조회 화면 출력 | - 금융상품정보 R<br>정기예금 상품정보<br>적금 상품정보<br>정기예금 옵션정보<br>적금상품 옵션정보 | 버니 | 240518 | ⭐⭐⭐⭐⭐ |
| 4-a | 전체 조회 | 예금 & 적금 금리 비교 | - 필터링 항목 : [은행]<br>- 정렬 항목 : 표 최상단의 column name을 눌렀을 때 오름차순, 내림차순 정렬 | - 전체 예금/적금 정보를 화면에 표로 출력<br>- 은행별로 필터링 할 수 있는 입력 form 구성<br>- 표 최상단의 column name을 눌렀을 때 오름차순/내림차순 정렬 기능<br>- 개별 정보 행을 클릭하면 상세 조회 페이지로 이동 기능 구현 | - 정기예금 상품정보 R<br>- 적금 상품정보 R | - | 버니 | 240517 | ⭐⭐⭐⭐⭐ |
| 4-b | 상세 조회 | 예금 & 적금 금리 비교 | - 데이터 모두 표시<br>- 가입하기 버튼: 클릭 시 해당 회원의 [가입한 상품 목록]에 상품 ID 추가<br>- 로그인된 사용자에게만 버튼 보이도록<br>- 시간 남으면 전체조회로 가는 버튼 추가 | - 개별 상품정보 전체 출력<br>- 상품정보와 연결된 옵션정보 출력<br>- @login required: 가입하기 버튼 누를 시 가입한 상품 목록에 상품 ID 추가 기능 구현<br>- 이미 가입한 상품일 경우 → 가입한 상품 목록에서 삭제 버튼 출력 | - 정기예금 상품정보 R<br>- 적금 상품정보 R<br>- 정기예금 옵션정보 R<br>- 적금 상품 옵션정보 R<br>- 가입한 상품 목록 R, D | - | 버니 | 240517 | ⭐⭐⭐⭐⭐ |
| 5 | 환율 계산기 | 메인페이지 | - 네이버 환율 계산기 참고<br>- 액수 입력받는 칸 두 칸, 통화 선택 리스트로 화면에 표출<br>- 통화가 바뀌면 3자리의 통화코드가 바뀔 수 있도록 | - 국가2, 금액2 입력창 구현 | - 환율정보 R | - 환율정보 | 푸린 | 240517 | ⭐⭐⭐⭐ |
| 6 | 주변 은행 검색 | - | - 카카오맵 API 활용<br>- 시, 군, 구 입력받아 검색<br>- 키워드 입력받아 검색<br>- 현위치 주변 은행 | - kakao 맵 화면 구성<br>- 키워드 검색창 구현<br>- 지역 및 은행종류 선택창 구현 | X | - 카카오 맵 | 푸린 | 240514 | ⭐⭐⭐⭐ |
| 7 | 프로필페이지 | - | - 회원정보 수정 버튼<br>- 기본정보 출력<br>- 내가 가입한 금융상품 리스트<br>- 가입한 상품 금리정보 그래프<br>- 상품추천알고리즘<br>- 그래프 | - 유저 정보 화면에 출력<br>- 유저가 가입한 금융상품 정보 화면에 출력<br>- 사용자가 작성한 게시글, 댓글 화면에 출력, 클릭 시 해당 페이지로 이동 기능 구현<br>- 로그인한 유저와 프로필 유저가 일치할 시 → 회원정보 수정 페이지로 이동 버튼 출력 | 유저 상세 정보 CRUD<br>- 게시글, 댓글 R | - User 정보<br>- 가입한 금융상품 정보<br>- 작성한 게시글<br>- 작성한 댓글 | 버니 | 240520 | ⭐⭐⭐⭐⭐ |
| 7-a | 상품추천 알고리즘 | 프로필페이지 | - 유저 정보 없을 시 -> 최고 금리 순으로 상품 추천 3개<br>- 유저 정보 있을 시 -> 나이, 연 수입, 목표 저축금액 구간화하여 labeling -> 회원정보와 같은 label 가진 회원들이 가장 많이 가입한 상품 3개씩 추천 | 상품 출력 | 유저 정보 기반으로 요청 후 response | - User 정보<br>- 가입한 금융상품 정보 | 버니 | 240522 | ⭐⭐⭐⭐ |
| 8 | 회원 관리 | - | - 로그인<br>- 회원가입<br>- 회원탈퇴<br>- 유저정보 수정<br>- 시간 남을 시 카카오로그인, 네이버로그인, 구글 로그인 | - 로그인된 사용자에게: 로그아웃 버튼, 프로필 정보로 이동<br>- 로그인되지 않은 사용자에게: 로그인, 회원가입 버튼 출력 | django User Model 상속받은 모델 사용 | user 정보<br>(username, password, email, 목표저축금액, 연 수입, 주 거래 은행) | 버니 | 240521 | ⭐⭐⭐⭐ |
| 8-a | 로그인 | - | 회원 로그인 기능 | 아이디, PW 입력, 로그인 버튼 구현 | 로그인 기능 구현 | - | 버니 | 240514 | ⭐⭐⭐⭐⭐ |
| 8-b | 회원가입 | - | 회원 가입 기능 | 아이디, PW 입력, PW 확인, 이메일 입력 form 구현 | 회원가입 기능 구현 - C | - | 버니 | 240514 | ⭐⭐⭐⭐ |
| 8-c | 회원정보 수정 | - | 회원 정보 수정 기능 | 회원정보 수정할 수 있는 form 구현<br>- 목표금액, 연 수입, 주거래은행 정보 수정 가능 | User Model - R, U | - | 버니 | 240514 | ⭐⭐⭐⭐ |
| 8-d | 회원탈퇴 | - | 회원탈퇴 기능 | 회원정보 수정 페이지 내에 회원탈퇴 버튼 구현 | User Model - D | - | 버니 | 240520 | ⭐⭐⭐⭐⭐ |
| 9 | 저축계획도우미 | - | - 목표 금액, 기간, 연 수입 입력받아서 한 달에 저축해야 할 금액을 계산해서 표출<br>- 저축할 금액이 월 수입에서 얼마나 비율을 차지하는지 표출<br>- 선택한 금리 이상의 금융상품 n개 하단에 표출 | - 필요 정보 입력창 구현<br>- 추천 상품 리스트 출력<br>- 유저 정보와 필요 정보 입력받아 조건 조회 | - user 정보<br>(username, 목표저축금액, 연 수입, 주 거래 은행) R | - User 예금 정보<br>- 예적금 데이터 | 푸린 | 240521 | ⭐⭐⭐ |
| 10 | 뉴스 | 메인페이지 | - https://news.naver.com/section/101 크롤링해서 화면에 표출 | - 뉴스 레이아웃 구성<br>- 크롤링 | 뉴스 R | - 뉴스 데이터 | 푸린 | 240515 | ⭐⭐⭐⭐⭐ |
| 11 | 금융 정보 | 메인페이지 | - 금융단어장<br>- 부동산단어장<br>- 단어장 랜덤으로 바뀔 수 있는 버튼(누를 시 갱신) | - 단어와 설명이 다음 버튼을 누르면 넘어가도록 구성 | 단어장 R (금융용어사전 API) | - 단어 | 푸린 | 240519 | ⭐⭐⭐⭐⭐ |
| 12 | 커뮤니티 | - | - 게시판 CRUD<br>- 댓글 CRD(수정 x) | - | - | - | 버니 | 240516 | ⭐⭐⭐⭐ |
| 12-a | 게시글 목록 | - | - | 게시글 목록 불러오기<br>한 페이지에 20개씩 로딩<br>게시글



## 기술스택 
### Frontend
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/844bf7c2-b437-493e-bd56-c8f8e2f9a0ac" width="50" height="50"> <!-- CSS -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/abf1b0c3-c9b4-4d1b-86b4-70e6b81fff14" width="50" height="50"> <!-- HTML -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/699fa91c-d9ae-4cc8-a94c-4bfd212d13ee" width="50" height="50"> <!-- JavaScript -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/3682f902-0df9-4dfd-af3d-fe7984a79adc" width="50" height="50"> <!-- NodeJS -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/a824421a-b4c6-4ede-a0a3-bc7f7b0a4eac" width="50" height="50"> <!-- Vue -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/ec6f4c82-c51f-4ec7-a9ea-bc7c0e9186a2" width="50" height="50"> <!-- Bootstrap -->

### Backend
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/8615975f-6d58-481e-8193-0dd1fe7aaf7f" width="50" height="50"> <!-- Django -->
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/255e8516-1621-46a0-8873-175dac677949" width="50" height="50"> <!-- Python -->

### Database
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/d08e0340-15d6-46cf-bd13-5667b510ba07" width="50" height="50"> <!-- SQLite -->

### Communication
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/4f360ced-a27e-4e29-bb87-f11e93792c06" width="50" height="50"> <!-- Github -->

# ERD
<img src="https://github.com/daegi0923/Finance_Teacher/assets/156268579/02ad2ba8-f6ca-400d-8b11-47d7b1f87c71"> <!-- ERD -->

# 컴포넌트 구조
![component](https://github.com/daegi0923/Finance_Teacher/assets/156268579/9b992016-9526-4b84-a1cd-64ae913d3d7d)

# 와이어 프레임
![메인](https://github.com/daegi0923/Finance_Teacher/assets/156268579/918b701b-ae0a-4265-8e46-8e602f26e59d)

# Gannt Chart
Gantt Chart : https://docs.google.com/spreadsheets/d/1_iWdYUGgrhrCgOvh__XfykpT9SQG-9DDgWWVLmndeuY/edit?usp=sharing
# 개발일지
| 날짜 | 푸린 | 버니 |
| --- | --- | --- |
| 240508 | 컨셉, 아이디어 회의, github 협업 등록 | 아이디어 회의, 프로젝트 계획 간트차트 작성, github Repository 생성 |
| 240509 | 요구사항 명세서 작성, 역할 구분  | 요구사항 명세서 작성, 팀 역할 구분   |
| 240510 | 컴포넌트 설계서 작성 | ERD 초기 작성  |
| 240511 | 와이어프레임 작성, vue-project 생성 | ERD 작성 |
| 240512 | router 지정, component 생성, view 생성 | ERD 최종 작성   |
| 240513 | 카카오맵지도 받아오기 | django skeleton code 작성, 금융상품 api 작성 |
| 240514 | 네이버기사 크롤링 | 로그인, 로그아웃, 회원가입 기능 구현   |
| 240515 | 환율 데이터 읽어오기 | - |
| 240516 | 환율 계산기 | 게시판 CRUD, 댓글 CRD 구현   |
| 240517 | 환율 계산기와 지도 마무리하기 | 금융상품목록, 상세 출력    |
| 240518 | 라우터 정리 | 금융상품 구독기능 구현    |
| 240519 | 단어장 api 읽어오기 | 회원정보 수정 api 구현   |
| 240520 | gemini 챗봇 만들기 프론트 디자인 구성 | 회원정보 수정(FE), 회원탈퇴, 회원 정보 필드 추가, 프로필 페이지 구현, 금융상품목록 에러 해결        |
| 240521 | CSS 수정 | CSS 수정, 프로필 페이지 그래프 구현 |
| 240522 | CSS 수정 | 상품 추천 알고리즘 및 페이지 구현, 프로필 페이지 네비게이션 구현, CSS 수정       |
| 240523 | CSS 수정, 챗봇 수정, 단어장 완성, 지도 완성 | CSS수정, 상품추천 페이지 오류 해결, 배포작업 수행     |
| 240524 | 발표 당일  | 발표 당일  |

# 이슈 관리
| 이름 | 내용 | 해결 여부 | 해결 과정 | 일시 |
| --- | --- | --- | --- | --- |
| 버니 | Django User Model Custom 도중 에러 발생   | O | http://settings.py 에 AUTH_USER_MODEL 등록 누락   | 240513 |
| 버니 | User Info update api 구현 중 'str' object has no attribute '_meta'에러 발생 | O | http://serializers.py 에서 AUTH_USER_MODEL 사용이 아닌 get_user_model 사용해야함     | 240519 |
| 버니 | 프로필 페이지 graph 출력에서 데이터가 연결되지 않음         | O | Vue의 Life Cycle Hook 때문에 생긴 문제, 부모 페이지의 mount 가 자식 페이지의  mount 보다 늦게 일어나는데, 이때문에 graph가 mount 될때 반응형 변수가 비어있었음. store 사용하여 해결 |240520
| 버니 | 예금, 적금 목록 필터링 중 filter메소드 사용하여 렌더링할 시 undefined 참조 에러 발생          | O | 데이터 구조 변화를 통해 deposit item 하위의 option객체를 가지는 형태가 아닌 N*M 형태의 테이블 형태로 변경(반정규화) | 240520 |
| 버니 | intr_rate가 null인 option 이 새로생김(금융감독원 api)     | O | 데이터 제약조건 변경    | 240521 |
| 푸린 | 네이버 뉴스 크롤링 Axios 에러 | O | 프론트에서 proxy를 우회하여 해결 | 240514 |
| 푸린 | 환율계산기 나라별 단위가 다르고 업데이트가 11시를 기준으로 되며 공휴일에 제공하지 않음 | O | 날짜 함수와 조건문 함수를 이용해 해결 | 240516 |
| 푸린 | chatGPT 할당량 초과 | O | Gemini를 이용하여 제작 | 240520 |
| 푸린  | 단어장  html 코드가 계속 나옴 | O | 함수를 사용해 해결 | 240523 |
| 푸린 | 챗봇 입력 오류 | O | 함수 수정 | 240523 |

# 노션 링크
[https://www.notion.so/P-B-53d3afb7de7544bfbf7cf3cbc2e06474](https://www.notion.so/P-B-53d3afb7de7544bfbf7cf3cbc2e06474)
