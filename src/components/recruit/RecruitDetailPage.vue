<template>
  <div class="min-h-screen bg-white">
    <!-- 메인 컨텐츠 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 채용공고 제목 -->
      <h1 class="text-2xl font-semibold text-[#1b1c1f] mb-2">김포 더힐 실버케어 요양원</h1>
      <p class="text-base font-semibold text-[#6f727c] mb-4">
        김포 더힐 실버케어 요양원에서 함께 근무하실 남/여 요양보호사(퐁당당, 주간) 모집합니다.
      </p>

      <!-- 북마크/챌린지 버튼 -->
      <div class="flex justify-end space-x-2 mb-8">
        <button class="w-11 h-10 bg-[#f4f4f6] rounded-full flex items-center justify-center">
          <span class="material-icons text-[#babdc3]">star_border</span>
        </button>
        <button class="h-10 px-4 bg-[#e8e5ff] rounded-full flex items-center space-x-2">
          <span class="material-icons text-[#5b4af4]">add_box</span>
          <span class="text-base text-[#5b4af4]">챌린지 추가</span>
        </button>
      </div>

      <!-- 구인 정보 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#1b1c1f] mb-4">구인 정보</h2>
        <div class="bg-white border border-[#dedee4] rounded-lg">
          <div class="grid grid-cols-2 gap-x-8">
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">모집직종</span>
                <span class="text-base text-[#1b1c1f]">간병인(재가제외)</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">모집인원</span>
                <span class="text-base text-[#1b1c1f]">2명</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">학력</span>
                <span class="text-base text-[#1b1c1f]">관계없음</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">전공</span>
                <span class="text-base text-[#1b1c1f]">-</span>
              </div>
            </div>
          </div>

          <!-- 직무내용 -->
          <div class="p-4 border-b border-[#dedee4]">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">직무내용</span>
              <div class="flex-1 text-base text-[#1b1c1f]">
                김포시 마송에 위치한 프리미엄급 요양원입니다. 함께 근무하실 요양보호사 선생님들을 모십니다.
                <br /><br />
                &lt;퐁당당 근무 : 식대포함 급여 2,420,000원&gt;
                <br />
                09:00 ~ 익일 09:00 (실근무시간 16시간 / 휴게시간 8시간)
                <br /><br />
                &lt;주간 근무 : 식대포함 급여 2,300,000&gt;
                <br />
                09:00 ~ 18:00(실근무시간 8시간 / 휴게시간 1시간)
                <br /><br />
                많은 지원 부탁드립니다.
              </div>
            </div>
          </div>

          <!-- 근무 조건 -->
          <div class="grid grid-cols-3 gap-x-8">
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">근무형태</span>
                <span class="text-base text-[#1b1c1f]">주간</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">근무일수</span>
                <span class="text-base text-[#1b1c1f]">주5일</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">총 근무 시간</span>
                <span class="text-base text-[#1b1c1f]">-</span>
              </div>
            </div>
          </div>

          <div class="p-4 border-b border-[#dedee4]">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">근무시간</span>
              <span class="text-base text-[#1b1c1f]">
                퐁당당 근무 09:00 ~ 익일 09:00 (실근무시간 16시간 / 휴게시간 8시간) 주
              </span>
            </div>
          </div>

          <div class="p-4 border-b border-[#dedee4]">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">급여</span>
              <span class="text-base text-[#1b1c1f]">
                (월급) 230만원 상여금 : 0% - 연봉 또는 월급에 미포함
              </span>
            </div>
          </div>

          <div class="p-4 border-b border-[#dedee4]">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">경력조건</span>
              <span class="text-base text-[#1b1c1f]">무관</span>
            </div>
          </div>

          <div class="p-4">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">필요자격</span>
              <span class="text-base text-[#1b1c1f]">자격증.외국어능력등등</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 기업 정보 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#1b1c1f] mb-4">기업 정보</h2>
        <div class="bg-[#fafafc] border border-[#efeff3] rounded-lg p-4">
          <div class="space-y-4">
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">사업장명</span>
              <span class="text-base text-[#1b1c1f]">김포더힐실버케어요</span>
            </div>
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">대표자</span>
              <span class="text-base text-[#1b1c1f]">강주대</span>
            </div>
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">근로자수</span>
              <span class="text-base text-[#1b1c1f]">40명</span>
            </div>
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">가입보험</span>
              <span class="text-base text-[#1b1c1f]">고용보험,산재보험,건강보험,국민연금</span>
            </div>
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">사업요약내용</span>
              <span class="text-base text-[#1b1c1f]">요약내용</span>
            </div>
            <div class="flex">
              <span class="w-[120px] text-base font-semibold text-[#404249]">주소</span>
              <span class="text-base text-[#1b1c1f]">경기도 김포시 통진읍 마송로 김포더힐실버케어요양원</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 전형사항 -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-[#1b1c1f] mb-4">전형사항</h2>
        <div class="bg-white border border-[#dedee4] rounded-lg">
          <div class="grid grid-cols-2 gap-x-8">
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">전형방법</span>
                <span class="text-base text-[#1b1c1f]">서류,면접</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">접수방법</span>
                <span class="text-base text-[#1b1c1f]">전자우편</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-x-8">
            <div class="p-4">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">제출 서류및 준비물</span>
                <span class="text-base text-[#1b1c1f]">기타..</span>
              </div>
            </div>
            <div class="p-4">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">접수 마감</span>
                <span class="text-base text-[#1b1c1f]">마감일</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 담당자 -->
      <section>
        <h2 class="text-2xl font-semibold text-[#1b1c1f] mb-4">담당자</h2>
        <div class="bg-white border border-[#dedee4] rounded-lg">
          <div class="grid grid-cols-3 gap-x-8">
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">성명</span>
                <span class="text-base text-[#1b1c1f]">최원민</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">부서</span>
                <span class="text-base text-[#1b1c1f]">-</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">휴대전화</span>
                <span class="text-base text-[#1b1c1f]">010-1234-5678</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-x-8">
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">전화번호</span>
                <span class="text-base text-[#1b1c1f]">031-1234-5678</span>
              </div>
            </div>
            <div class="p-4 border-b border-[#dedee4]">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">팩스</span>
                <span class="text-base text-[#1b1c1f]">031-1234-5678</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-x-8">
            <div class="p-4">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">이메일</span>
                <span class="text-base text-[#1b1c1f]">aaaa123@naver.com</span>
              </div>
            </div>
            <div class="p-4">
              <div class="flex">
                <span class="w-[120px] text-base font-semibold text-[#404249]">접수 마감</span>
                <span class="text-base text-[#1b1c1f]">마감일</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 플로팅 버튼 -->
      <button
        class="fixed right-40 bottom-10 w-[60px] h-[60px] bg-white border border-[#efeff3] rounded-full flex items-center justify-center">
        <span class="material-icons">add</span>
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>
