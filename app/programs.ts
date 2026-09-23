export type CareProgram = {
  name: string;
  description: string;
  price: number;
  durationMinutes?: number;
  path: '/prenatal' | '/postnatal' | '/body-care';
};

export const CARE_PROGRAMS: CareProgram[] = [
  {
    name: '산전관리',
    description: '현재 상태에 맞춘 편안한 자세와 부위별 관리',
    durationMinutes: 70,
    price: 130000,
    path: '/prenatal',
  },
  {
    name: '산후관리',
    description: '회복 시기와 생활 리듬을 고려한 맞춤 관리',
    durationMinutes: 80,
    price: 150000,
    path: '/postnatal',
  },
  {
    name: '전신 바디 밸런스',
    description: '얼굴관리를 포함한 전신 밸런스 관리',
    durationMinutes: 120,
    price: 170000,
    path: '/body-care',
  },
  {
    name: '약손 바디 밸런스',
    description: '몸의 상태와 불편한 부위를 살피는 약손관리',
    price: 90000,
    path: '/body-care',
  },
  {
    name: '약손 시그니처 토탈케어',
    description: '얼굴과 바디를 함께 살피는 시그니처 토탈케어',
    durationMinutes: 150,
    price: 220000,
    path: '/body-care',
  },
  {
    name: '약손 페이스&백 밸런스',
    description: '얼굴과 등 부위를 함께 관리하는 약손 프로그램',
    price: 70000,
    path: '/body-care',
  },
];

export function formatProgramPrice(price: number) {
  return `${price.toLocaleString('ko-KR')}원`;
}

export function formatProgramSummary(program: CareProgram) {
  const price = formatProgramPrice(program.price);
  return program.durationMinutes ? `${program.durationMinutes}분 · ${price}` : price;
}
