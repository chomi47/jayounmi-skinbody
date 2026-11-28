export type CareProgram = {
  name: string;
  description: string;
  price: number;
  packagePrice?: number;
  durationMinutes?: number;
  path: '/face-care' | '/prenatal' | '/postnatal' | '/body-care';
};

export const CARE_PROGRAMS: CareProgram[] = [
  {
    name: '얼굴윤곽 집중관리',
    description: '그날의 피부 상태와 얼굴선을 살피는 손 관리',
    durationMinutes: 40,
    price: 45000,
    packagePrice: 400000,
    path: '/face-care',
  },
  {
    name: '얼굴윤곽 & 등 관리',
    description: '얼굴윤곽과 등을 함께 관리하는 프로그램',
    durationMinutes: 90,
    price: 80000,
    packagePrice: 700000,
    path: '/body-care',
  },
  {
    name: '약손 바디 밸런스',
    description: '옷을 입고 받는 전신 수기 관리',
    durationMinutes: 60,
    price: 80000,
    packagePrice: 700000,
    path: '/body-care',
  },
  {
    name: '전신 바디 밸런스',
    description: '얼굴·등·복부·하체를 함께 관리하는 전신 프로그램',
    durationMinutes: 120,
    price: 150000,
    packagePrice: 1300000,
    path: '/body-care',
  },
  {
    name: '산전관리',
    description: '현재 상태에 맞춘 편안한 자세와 부위별 관리',
    durationMinutes: 70,
    price: 110000,
    path: '/prenatal',
  },
  {
    name: '산후관리',
    description: '회복 시기와 생활 리듬을 고려한 맞춤 관리',
    durationMinutes: 80,
    price: 120000,
    path: '/postnatal',
  },
  {
    name: '약손 시그니처 토탈케어',
    description: '얼굴과 바디를 함께 살피는 시그니처 토탈케어',
    durationMinutes: 150,
    price: 200000,
    path: '/body-care',
  },
];

export function formatProgramPrice(price: number) {
  return `${price.toLocaleString('ko-KR')}원`;
}

export function formatProgramSummary(program: CareProgram) {
  const duration = program.durationMinutes ? `약 ${program.durationMinutes}분 · ` : '';
  const single = `1회 ${formatProgramPrice(program.price)}`;
  return program.packagePrice
    ? `${duration}${single} · 10회 ${formatProgramPrice(program.packagePrice)} (회당 ${formatProgramPrice(program.packagePrice / 10)})`
    : `${duration}${single}`;
}
