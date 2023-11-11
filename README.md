<p align="center">
<br/>
<img width="700" src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/104193739/a0436026-f30b-4d1c-9daa-97940267d30c">
<br/>
<br/>
<br/>

</p>

# wekiki

> **카카오 테크 캠퍼스 1기 3단계 프로젝트**  
> **개발 기간 : 2023.09.25 ~ 2023.11.11**

<br/>

## 목차

[🔗 배포 주소](#-배포-주소)<br/>
[👨‍👨‍👦‍👦 팀 소개](#-팀-소개) <br/>
[👀 서비스 소개](#-서비스-소개)<br/>
[🚀 주요 기능](#-주요-기능)<br/>
[📌 개발 주안점](#-개발-주안점)<br/>
[🖥️ 화면 구성](#%EF%B8%8F-화면-구성)<br/>
[⚙️ ERD](#%EF%B8%8F-erd)<br/>
[⭐ 시스템 구조도](#-시스템-구조도)<br/>
[🔧 기술 스택](#-기술-스택)<br/>
[💡 프로젝트 실행 방법](#-프로젝트-실행-방법)<br/>
[🗂️ 디렉토리 구조](#%EF%B8%8F-디렉토리-구조)<br/>
[💎 라이센스](#-라이센스)

## 🔗 배포 주소

> **프론트 서버** : https://kb70bd6b8a3f6a.user-app.krampoline.com/  
> **백엔드 서버** : https://kb70bd6b8a3f6a.user-app.krampoline.com/api/

<br/>

## 👨‍👨‍👦‍👦 팀 소개

<div align="center">

|            <img src="https://github.com/publdaze.png" width="100">            |          <img src="https://github.com/qwer15948.png" width="100">           | <img src="https://github.com/GangHub1970.png" width="100"> |
| :---------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :--------------------------------------------------------: |
|                                    김은지                                     |                                   송지혜                                    |                            윤강                            |
|                    [publdaze](https://github.com/publdaze)                    |                  [qwer15948](https://github.com/qwer15948)                  |       [GangHub1970](https://github.com/GangHub1970)        |
| Auth(카카오 API) <br> 이메일 인증 <br> 회원관리 <br> 마이페이지 <br> 퍼블리싱 | 페이지 관리 <br> 포스트(CkEditor5) <br> 댓글 <br> 페이지 링크 <br> 퍼블리싱 | 그룹 생성(s3) <br> 초대 <br> 그룹 마이페이지 <br> 퍼블리싱 |

</div>

<br/>

## 👀 서비스 소개

<p align="center"><img width="700" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/104193739/c20e5078-49de-4153-a07e-41b41137f3c9"></p>

우리만의 추억을 함께 기록하고, 즐거운 순간을 공유하며 소중한 경험을 함께 만들어보세요! 위키키는 친구, 동료와 함께 다양한 활동을 기록하며 우리만의 특별한 공간을 만들 수 있는 그룹형 커뮤니티 서비스입니다.

### 서비스 특징

1. 그룹 기반의 다양한 활동 기록 📝

   서로의 추억과 경험을 기록하고 페이지 별 목차를 통해 정보에 편리하게 접근하세요.

2. 편리한 그룹원 초대 및 편집 권한 📨

   그룹을 손쉽게 생성하고 초대링크를 통해 친구나 동료를 초대하세요. 모든 그룹원에게 페이지 편집 권한이 있어 함께 만들어가는 즐거움을 누릴 수 있습니다.

3. 비공개 그룹 옵션 🔐

   원하는 경우 비공개 그룹으로 설정하여 오직 그룹원끼리만 접근할 수 있도록 하세요. 우리만의 기록 공간을 안전하게 유지할 수 있습니다.

위키키를 통해 함께 즐거운 순간을 기록하고 공유하는 새로운 경험을 만나보세요. 다양한 활동을 즐기며 소중한 추억을 함께 쌓아가는 여정을 시작해보세요!

<br/>

## 🚀 주요 기능

### 그룹 생성

- 사용자는 그룹을 생성하고 관리할 수 있습니다. 그룹의 이름, 대표 사진, 공개 여부 등을 설정할 수 있습니다.

### 그룹 가입 및 초대

- 사용자는 그룹에 가입하거나 초대를 받아 그룹에 참여할 수 있습니다. 초대코드를 통해 그룹 가입을 할 수 있습니다.

### 그룹원 관리

- 그룹의 멤버 리스트를 확인하고 관리할 수 있습니다. 그룹원 초대, 탈퇴 등의 기능이 제공됩니다.

### 페이지 관리

- 그룹 내에서 페이지를 생성하고 수정할 수 있습니다. 각 페이지는 제목, 내용, 목차 등을 가지고 있습니다.

### 히스토리 조회

- 그룹 내에서 변경된 최근 페이지의 히스토리를 확인할 수 있습니다.

### 댓글 기능

- 사용자는 페이지에 댓글을 작성하고 수정, 삭제할 수 있습니다.

### 문서 기여 목록

- 사용자는 그룹 내에서 자신이 기여한 문서의 목록을 확인할 수 있습니다.

### 검색 기능

- 사용자는 메인 페이지에서 그룹을 검색할 수 있으며, 그룹 내에서는 페이지를 검색할 수 있습니다.
- 검색 결과를 확인하고 해당 페이지로 이동할 수 있습니다.

### 회원가입 및 로그인

- 사용자는 카카오 로그인을 통해 로그인 하거나, 회원가입을 통해 계정을 생성하고 로그인하여 서비스를 이용할 수 있습니다.

<br/>

## 📌 개발 주안점

### 협업 도구 및 개발 환경 설정

- 린터(eslint), 포맷터(prettier)를 적용하여 코드의 일관성을 유지하고, 협업 시 코드 작성 및 유지보수를 원활히 하였습니다.
- 코드의 가독성과 유지 보수를 위해 import 해야할 대상의 경로를 절대 경로로 불러올 수 있도록 하였습니다. (craco + react-app-alias 사용)
- 윈도우, 맥등 다양한 OS로 개발할 때 일관된 환경을 제공하기 위해서 모든 운영체제에서 동일한 방법으로 환경 변수를 설정할 수 있도록 하였습니다. (cross-env 사용)

### 코드 구조 및 관리

- 공통된 레이아웃을 따로 분리하여 중복된 코드를 줄이고 효율적인 유지 보수가 가능하게 했습니다.
- Recoil key, React Query key를 관리하는 상수 파일을 만들어 실수로 동일한 키를 사용하는 상황을 방지하고, 필요한 곳에서 쉽게 재사용할 수 있도록 하였습니다.
- 단일 컴포넌트 기준이 아닌 페이지 기준으로 key 값이 고유하도록 react-uuid를 사용하였습니다.
- 코드의 가독성을 위해 그룹 생성 시의 단계를 한 페이지 안에서 모두 처리하지 않고, 각 단계별로 컴포넌트를 나누어 처리하였습니다.
- 에러 바운더리를 적용하여 각 컴포넌트에서 에러 처리 로직을 분리해내고, 서비스의 에러를 전역으로 일관성있게 처리하였습니다.

### 사용자 경험(UX) 및 인터페이스(UI)

- 게시글에 집중할 수 있도록 무채색의 깔끔하고 심플한 디자인을 적용하였습니다.
- 회원가입 시 사용자의 입력에 따라 즉각적인 유효성 피드백을 제공합니다.
- 카카오 로그인 시 인가 코드 발급 후 서비스 API를 호출하는 데 걸리는 지연 시간 동안 사용자에게 로딩 화면을 보여주고, 실패 시에는 뒤로가기 버튼을 제공하였습니다.
- 그룹 및 페이지 제목에 남은 글자 수를 표기하여 사용자가 입력 가능한 글자 수의 실시간 피드백을 제공하였습니다.
- replace 옵션을 사용해 사용자의 페이지 이동 흐름이 자연스럽게 하였습니다. 예를 들어, 그룹 생성이 완료된 후 뒤로가기를 누르면 그룹 생성 페이지가 아닌 그 이전의 메인 페이지로 이동합니다.

### 검색 엔진 최적화(SEO)

- favicon 및 오픈그래프, 트위터 카드 등 기본 설정 및 메타 데이터를 이용하여 웹의 완성도를 높였습니다.

<br/>

## 🖥️ 화면 구성

| 메인 화면 (로그인 전)                                                                                                            | 메인 화면 (로그인 후)                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/37ef91f0-c047-42ea-afd7-103ffd165895" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/77ab639e-57a3-4fa6-9906-4912fac92f2e" width="400"> |
| <div align="center"><b>회원가입</b></div>                                                                                        | <div align="center"><b>로그인</b></div>                                                                                          |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/536da93c-dfc8-43c2-a900-8de90f930322" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/30799299-d07a-48ca-8bd5-dd88c7ffc8a1" width="400"> |
| <div align="center"><b>카카오 로그인 로딩 화면</b></div>                                                                         | <div align="center"><b>비밀번호 재설정</b></div>                                                                                 |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/1704ddf5-b024-44da-9396-417e4f224c89" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/7aa1d49d-6b3b-42ba-bc51-486fd402566e" width="400"> |
| <div align="center"><b>그룹 생성</b></div>                                                                                       | <div align="center"><b>그룹 페이지</b></div>                                                                                     |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/377294ba-b7de-46e9-bce6-052f0bf2abeb" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/e2721ff7-6ccc-4408-b7c5-69e3d5797b5d" width="400"> |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/287c99de-2e6b-48b2-bc95-5a9638ea6a49" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/eb2d3a1a-ccfe-4d42-b842-bf829d91124e" width="400"> |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/045e3617-2523-4a4a-b032-0c942abc3ef9" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/2be639a6-ce8a-4a31-9b4d-6360e97f317f" width="400"> |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/1cacb976-b387-4daf-bb38-62b63bdeef86" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/cb3f34b9-1111-4ca8-bbf6-c8086ff6c8be" width="400"> |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/bdd558d1-04c1-46a5-a051-5e22bd3e40bf" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/4d73c338-4965-4859-9070-cd9a9c4e7f68" width="400"> |
| <div align="center"><b>그룹 가입 페이지</b></div>                                                                                | <div align="center"><b>내 문서 기여 목록 페이지</b></div>                                                                        |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/e185380b-ca4f-499f-a8b0-3daf2b62b33a" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/def24d52-ce88-4924-b961-93bc00b322a7" width="400"> |
| <div align="center"><b>그룹원 목록 조회</b></div>                                                                                | <div align="center"><b>그룹원 초대</b></div>                                                                                     |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/cbd21b85-096c-40cf-a6bd-a875f22d7848" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/afa67564-6032-4a14-a5f2-be06ff3f93f1" width="400"> |
| <div align="center"><b>그룹 검색 결과</b></div>                                                                                  | <div align="center"><b>없는 페이지 검색 결과</b></div>                                                                           |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/4803ccef-a906-487a-add6-4991d22b66c1" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/c888a306-df4a-4783-a234-6607e4eb3986" width="400"> |
| <div align="center"><b>마이페이지</b></div>                                                                                      | <div align="center"><b>그룹 마이페이지</b></div>                                                                                 |
| <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/efa55677-5963-40f0-b043-711990bf1ad0" width="400"> | <img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/87dbe659-457a-40fb-91c7-eb87ee7f8c64" width="400"> |

<br/>

## ⚙️ ERD

<p align="center"><img width="700" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/104193739/0ec25716-2820-41e1-972b-1f1ee8ae6a95"></p>
<br>

## ⭐ 시스템 구조도

<p align="center"><img width="700" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/70485cb4-00b4-4f04-b583-6eea6d3f6aca"></p>
<br>

## 🔧 기술 스택

<img src="https://github.com/Step3-kakao-tech-campus/Team8_FE/assets/78250089/0a0dbd4f-166d-4077-9eab-bf399942b185" width="800" alt="stackticon" />

<br/>

## 💡 프로젝트 실행 방법

### FE

개발 환경에서 프로젝트를 테스트하려면 아래의 항목이 필요합니다.

- Node.js : 18.12.0

### 환경변수

<table>
  <tr>
    <td><b>environment</b></td>
    <td><b>description</b></td>
  </tr>
  <tr>
    <td>{REACT_APP_API_URL}</td>
    <td>API 통신을 위한 서버의 URL을 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_BUCKET_NAME}</td>
    <td>AWS S3 버킷의 이름을 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_REGION}</td>
    <td>AWS S3 버킷이 저장된 위치를 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_ACCESS_KEY_ID}</td>
    <td>AWS S3에 접근하기 위한 사용자의 access key를 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_SECRET_ACCESS_KEY}</td>
    <td>AWS S3에 접근하기 위한 사용자의 secret access key를 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_KAKAO_REDIRECT_URL}</td>
    <td>카카오 로그인을 위한 인가 코드를 전달받을 서비스 서버의 URL을 입력해주세요.</td>
  </tr>
  <tr>
    <td>{REACT_APP_KAKAO_REST_API_KEY}</td>
    <td>카카오 로그인의 client-id로 사용되는 앱 REST API 키를 입력해주세요.</td>
  </tr>
</table>
<br/>

- 환경 변수를 바탕으로 .env 파일을 생성합니다.

```
REACT_APP_API_URL={배포된 백엔드 API 주소}
...
```

- 위의 과정을 마치고 프로그램을 실행합니다.

```
npm install
npm start
```

</br>

## 🗂️ 디렉토리 구조

```
📦src
┣ 📂apis
┃ ┣ 📜authApi.ts
┃ ┣ 📜axios.ts
┃ ┣ 📜commentApi.ts
┃ ┣ 📜dto.ts
┃ ┣ 📜groupApi.ts
┃ ┣ 📜image.ts
┃ ┣ 📜mainApi.ts
┃ ┣ 📜pageApi.ts
┃ ┣ 📜postApi.ts
┃ ┗ 📜queryClient.ts
┣ 📂assets
┃ ┣ 📂images
┃ ┃ ┣ 📂login
┃ ┃ ┣ 📂logo
┃ ┃ ┃ ┣ 📜logo.svg
┃ ┃ ┃ ┗ 📜textLogo.svg
┣ 📂components
┃ ┣ 📂Common
┃ ┃ ┣ 📜DividerWithText.tsx
┃ ┃ ┣ 📜Pagination.tsx
┃ ┃ ┣ 📜ScrollToTop.tsx
┃ ┃ ┗ 📜SearchInput.tsx
┃ ┣ 📂Error
┃ ┃ ┣ 📜ErrorBoundary.tsx
┃ ┃ ┣ 📜ErrorFallback.tsx
┃ ┃ ┗ 📜InviteErrorFallback.tsx
┃ ┣ 📂Footer
┃ ┃ ┗ 📜Footer.tsx
┃ ┣ 📂GroupCreate
┃ ┃ ┣ 📜GroupCreateCompleteSection.tsx
┃ ┃ ┣ 📜GroupCreateNameSection.tsx
┃ ┃ ┣ 📜GroupCreateNickNameSection.tsx
┃ ┃ ┣ 📜GroupCreatePhotoSection.tsx
┃ ┃ ┗ 📜GroupCreateSearchSetting.tsx
┃ ┣ 📂Header
┃ ┃ ┣ 📜GroupSelector.tsx
┃ ┃ ┣ 📜Header.tsx
┃ ┃ ┗ 📜HeaderMenu.tsx
┃ ┣ 📂Home
┃ ┃ ┣ 📜GroupCard.tsx
┃ ┃ ┣ 📜GroupList.tsx
┃ ┃ ┗ 📜OfficialGroup.tsx
┃ ┣ 📂Invite
┃ ┃ ┗ 📜InviteFetcher.tsx
┃ ┣ 📂JoinGroup
┃ ┃ ┣ 📜OfficialGroup.tsx
┃ ┃ ┣ 📜UnOfficialClosedGroup.tsx
┃ ┃ ┗ 📜UnOfficialOpenedGroup.tsx
┃ ┣ 📂Layout
┃ ┃ ┣ 📜MainLayout.tsx
┃ ┃ ┣ 📜NoHeaderLayout.tsx
┃ ┃ ┗ 📜PageLayout.tsx
┃ ┣ 📂Modal
┃ ┃ ┣ 📜AddLinkModal.tsx
┃ ┃ ┣ 📜AuthDeleteModal.tsx
┃ ┃ ┣ 📜ConfirmCancelModal.tsx
┃ ┃ ┣ 📜GroupMemberListModal.tsx
┃ ┃ ┣ 📜GroupQuitModal.tsx
┃ ┃ ┣ 📜InviteModal.tsx
┃ ┃ ┣ 📜PageCreateModal.tsx
┃ ┃ ┣ 📜PasswordChangeModal.tsx
┃ ┃ ┣ 📜PasswordFindModal.tsx
┃ ┃ ┗ 📜PostDeleteModal.tsx
┃ ┣ 📂MyPage
┃ ┃ ┣ 📜ContributeAccordion.tsx
┃ ┃ ┗ 📜ContributeItem.tsx
┃ ┣ 📂Page
┃ ┃ ┣ 📂Common
┃ ┃ ┃ ┣ 📜IndexList.tsx
┃ ┃ ┃ ┣ 📜LikeDislikeButton.tsx
┃ ┃ ┃ ┣ 📜PageContainer.tsx
┃ ┃ ┃ ┣ 📜PageTitleSection.tsx
┃ ┃ ┃ ┗ 📜RecentChangeList.tsx
┃ ┃ ┗ 📂Post
┃ ┃ ┃ ┣ 📂Editor
┃ ┃ ┃ ┃ ┣ 📜Ckeditor.tsx
┃ ┃ ┃ ┃ ┣ 📜Ckviewer.tsx
┃ ┃ ┃ ┃ ┗ 📜Editor.css
┃ ┃ ┃ ┣ 📜AddPostButton.tsx
┃ ┃ ┃ ┣ 📜Comment.tsx
┃ ┃ ┃ ┣ 📜CommentList.tsx
┃ ┃ ┃ ┗ 📜Post.tsx
┃ ┗ 📜PostHistoryAccordion.tsx
┣ 📂constants
┃ ┣ 📜errorMsg.ts
┃ ┣ 📜queryKeys.ts
┃ ┣ 📜recoilKeys.ts
┃ ┗ 📜validationPatterns.ts
┣ 📂dummy
┃ ┣ 📜group.ts
┃ ┗ 📜page.ts
┣ 📂hooks
┃ ┣ 📜useAlert.ts
┃ ┣ 📜useJoinMutation.ts
┃ ┗ 📜useModal.ts
┣ 📂pages
┃ ┣ 📜GroupCreatePage.tsx
┃ ┣ 📜GroupJoinPage.tsx
┃ ┣ 📜GroupMainPage.tsx
┃ ┣ 📜GroupMyPage.tsx
┃ ┣ 📜GroupSearchResultPage.tsx
┃ ┣ 📜HomePage.tsx
┃ ┣ 📜InviteProcessPage.tsx
┃ ┣ 📜KakaoLoginPage.tsx
┃ ┣ 📜LoginPage.tsx
┃ ┣ 📜MyContributePage.tsx
┃ ┣ 📜MyPage.tsx
┃ ┣ 📜NotFoundPage.tsx
┃ ┣ 📜PostEditPage.tsx
┃ ┣ 📜PostHistoryPage.tsx
┃ ┣ 📜ReportPage.tsx
┃ ┣ 📜SearchResultPage.tsx
┃ ┗ 📜SignUpPage.tsx
┣ 📂recoil
┃ ┗ 📂atoms
┃ ┃ ┣ 📜auth.ts
┃ ┃ ┗ 📜group.ts
┣ 📂routes
┃ ┗ 📜PrivateRoute.tsx
┣ 📂test
┃ ┣ 📂pages
┃ ┃ ┣ 📜LoginPage.test.tsx
┃ ┃ ┗ 📜SignUpPage.test.tsx
┃ ┗ 📂utils
┃ ┃ ┗ 📜TestWrapper.tsx
┣ 📂utils
┃ ┣ 📂Form
┃ ┃ ┗ 📜nickName.ts
┃ ┣ 📜serverError.ts
┃ ┗ 📜time.ts
┣ 📜App.test.tsx
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜setupTests.ts
┗ 📜tailwind.css
```

<br/>

## 💎 라이센스

MIT License

Copyright (c) 2023 [1기] 카카오 테크 캠퍼스 (3단계) 프로젝트 8조

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
