<template>
  <div class="flex flex-col gap-y-4 w-full">
    <Button variant="kakao">
      <template #icon>
        <Icon fill="black">
          <KakaoIcon />
        </Icon>
      </template>
      <template #text>
        카카오로 시작하기
      </template>
    </Button>
    <Button variant="point">
      <template #icon>
        <Icon stroke="white">
          <LineEmailIcon />
        </Icon>
      </template>
      <template #text>
        이메일로 가입하기
      </template>
    </Button>
    <Button variant="point">
      <template #text>
        로그인
      </template>
    </Button>
    <div class="flex gap-5">
      <Button variant="point">
        <template #text>
          채용공고 보러가기
        </template>
      </Button>
      <Button variant="point">
        <template #text>
          나의 스펙등록하기
        </template>
      </Button>
    </div>
    <Button variant="gray">
      <template #text>홈으로
      </template>
    </Button>
    <Button size="sm" variant="point">
      <template #text>채용공고 보러가기
      </template>
    </Button>
    <Button size="sm" variant="point">
      <template #text>
        회원가입
      </template>
    </Button>
    <ToggleButton>
      <template #icon>
        <Icon fill="point">
          <StarIcon />
        </Icon>
      </template>
      <template #text>즐겨찾기 삭제</template>
    </ToggleButton>
    <ToggleButton>
      <template #icon>
        <Icon fill="point">
          <PlusIcon />
        </Icon>
      </template>
      <template #text>챌린지 삭제</template>
    </ToggleButton>
    <ToggleButton>
      <template #icon>
        <Icon fill="point">
          <LinePlusIcon />
        </Icon>
      </template>
      <template #text>챌린지 추가</template>
    </ToggleButton>
    <CircleButton></CircleButton>
  </div>
</template>

<script setup lang='ts'>
import Button from '../../common/components/button/MainButton.vue'
import KakaoIcon from '@/assets/icons/KakaoIcon_20.svg'
import LineEmailIcon from '@/assets/icons/LineEmailIcon_24.svg'
import Icon from '@/common/components/CustomIcon.vue'
import ToggleButton from '@/common/components/button/ToggleButton.vue'
import StarIcon from '@/assets/icons/FillStarIcon_24.svg'
import PlusIcon from '@/assets/icons/FillPlusIcon_24.svg'
import LinePlusIcon from '@/assets/icons/LinePlusIcon_24.svg'
import CircleButton from '@/common/components/button/CircleButton.vue'
</script>

<style></style>
