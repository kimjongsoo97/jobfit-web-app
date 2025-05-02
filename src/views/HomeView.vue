<template>
  <BaseLayout>
    <div class="relative felx flex-col mb-32">

      <!-- 히어로 섹션 -->
      <section class="bg-gradient-to-b from-point-600 to-point-700 h-[573px] rounded-br-[96px] relative">
        <div class="mx-auto px-8 relative h-full flex items-center">
          <div class="max-w-[664px]">
            <p class="font-h4 text-gry-300 mb-4">
              당신의 노력, 잘 맞는 기회에서 빛나야 하니까.
            </p>
            <h1 class="font-h1 text-gry-100 mb-8">
              설정한 채용공고와 나에 대한<br />
              지표를 더 확실하게!
            </h1>

            <div class="flex space-x-3">
              <OutLineButton variant="point" @click="handleChallengeSetting">
                챌린지 설정하기
              </OutLineButton>
              <OutLineButton variant="point" @click="handleRecruitPosting">
                채용공고 보러가기
              </OutLineButton>
            </div>
          </div>
          <div
            class="absolute right-0 -bottom-11 w-[735px] h-[558px] bg-[url('@/assets/images/hr-choosing.png')] bg-cover bg-center" />
        </div>

        <!-- 우측 이미지 -->
      </section>

      <!-- 하단 카드 섹션 -->
      <section class="mx-auto px-8 mt-32 relative z-10">
        <div class="grid grid-cols-2 gap-5">
          <!-- 첫 번째 카드 -->
          <div class="bg-gradient-to-b from-[#f6f5ff]/ 50 to-[#d2cdff]/50 rounded-xl p-8 h-[400px] relative">
            <img src="../assets/images/woman-programming.png" alt="Programming"
              class="absolute left-1/2 -translate-x-1/2 top-[-22px] w-[280px] h-[280px] object-cover" />

            <div class="absolute bottom-5">
              <h2 class="font-h2 text-gry-900 mb-3">
                스펙과 챌린지 공고를 설정하고<br />
                지표를 확인해 보세요
              </h2>
              <p class="font-h4 text-gry-700">
                사용자의 경력, 자격증, 언어능력을 바탕으로 공고에 대한 충족도를 한눈에 볼 수 있어요
              </p>
            </div>
          </div>

          <!-- 두 번째 카드 -->
          <div class="bg-gradient-to-b from-[#f6f5ff]/50 to-[#d2cdff]/50 rounded-xl p-8 h-[400px] relative">
            <img src="../assets/images/woman-programming-2.png" alt="Programming"
              class="absolute left-1/2 -translate-x-1/2 top-[-22px] w-[280px] h-[280px] object-cover" />

            <div class="absolute bottom-5">
              <h2 class="font-h2 text-gry-900 mb-3">
                향후 10년 직업군의<br />
                유망성을 확인해 보세요!
              </h2>
              <p class="font-h4 text-gry-700">
                한국 고용 노동부의 데이터를 바탕으로 150개 직업의 향후 10년간의 지표를 확인해요
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
import OutLineButton from '../common/components/button/OutLineButton.vue'

const router = useRouter();

const handleChallengeSetting = () => {
  router.push('/challenge');
}

const handleRecruitPosting = () => {
  router.push('/recruit');
}
</script>

<style></style>