export type BlogPost = {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 'prenatal-care-checklist',
    category: '산전관리',
    title: '산전관리 상담 전, 미리 확인하면 좋은 것들',
    summary: '임신 주수부터 그날의 컨디션까지, 편안한 상담을 위해 준비하면 좋은 내용을 정리했습니다.',
    date: '2026.09.09',
    readTime: '3분',
    intro: '산전관리는 프로그램을 먼저 고르는 것보다 현재의 몸 상태를 정확히 이야기하는 과정이 중요합니다. 예약 상담 전 아래 내용을 가볍게 확인해 보세요.',
    sections: [
      { heading: '현재 임신 주수와 경과', paragraphs: ['임신 주수와 최근 진료에서 들은 안내를 함께 알려주세요. 의료진에게 안정이나 활동 제한을 안내받았다면 관리 예약 전에 반드시 공유해 주셔야 합니다.'] },
      { heading: '오늘 가장 불편한 부위', paragraphs: ['목과 어깨, 등, 다리 등 평소보다 불편하게 느껴지는 부위를 구체적으로 알려주시면 상담이 수월합니다. 불편의 정도나 발생 시점도 함께 말씀해 주세요.'] },
      { heading: '관리를 미루고 먼저 진료가 필요한 경우', paragraphs: ['발열, 출혈, 갑작스러운 통증처럼 평소와 다른 증상이 있다면 관리를 예약하기보다 의료진과 먼저 상담해 주세요. 산전관리는 의료 진단이나 치료를 대신하지 않습니다.'] },
    ],
  },
  {
    id: 'postnatal-consultation-guide',
    category: '산후관리',
    title: '산후관리, 횟수보다 먼저 살펴야 할 회복의 흐름',
    summary: '출산 방법과 회복 속도는 모두 다릅니다. 상담에서 자연미가 먼저 묻는 내용을 소개합니다.',
    date: '2026.09.09',
    readTime: '4분',
    intro: '출산 후에는 빠른 변화를 목표로 하기보다 몸의 회복 단계와 일상에서 느끼는 불편을 차분히 살피는 것이 먼저입니다.',
    sections: [
      { heading: '출산 방법과 현재 회복 단계', paragraphs: ['자연분만과 제왕절개는 회복 과정에서 주의할 부분이 다를 수 있습니다. 출산 시점과 경과, 의료진의 안내를 확인한 뒤 가능한 관리 범위를 정합니다.'] },
      { heading: '수면과 수유, 하루의 생활', paragraphs: ['아기를 안는 자세와 수유, 부족한 수면은 목과 어깨, 등에 부담을 줄 수 있습니다. 일상의 움직임을 함께 살펴야 지금 필요한 부위를 구체적으로 정할 수 있습니다.'] },
      { heading: '단회 상담 후 천천히 결정하기', paragraphs: ['처음부터 횟수권을 결정할 필요는 없습니다. 단회 상담과 관리 뒤 몸의 반응, 일정, 목표를 살펴보고 다음 계획을 정할 수 있습니다.'] },
    ],
  },
  {
    id: 'comfortable-care-day',
    category: '자연미 이야기',
    title: '관리받는 날을 더 편안하게 보내는 작은 방법',
    summary: '복장, 식사, 도착 시간처럼 관리 전후에 알아두면 좋은 기본 안내입니다.',
    date: '2026.09.09',
    readTime: '3분',
    intro: '특별한 준비보다 몸과 마음이 서두르지 않도록 여유를 두는 것이 좋습니다. 자연미를 방문하는 날 참고할 수 있는 기본 안내입니다.',
    sections: [
      { heading: '조이지 않는 편안한 복장', paragraphs: ['갈아입기 쉽고 몸을 조이지 않는 옷을 권합니다. 필요한 준비물은 예약한 프로그램에 따라 상담 시 별도로 알려드립니다.'] },
      { heading: '식사 직후는 피하기', paragraphs: ['과식 직후보다 소화할 시간을 충분히 둔 뒤 방문하면 더 편안합니다. 공복으로 불편함을 느끼는 분이라면 가볍게 드신 뒤 방문해 주세요.'] },
      { heading: '몸의 반응을 바로 말하기', paragraphs: ['관리 중 자세나 강도가 불편하면 참지 말고 바로 알려주세요. 편안함을 확인하고 조절하는 과정도 관리의 중요한 일부입니다.'] },
    ],
  },
];

export function getBlogPost(id: string) {
  return blogPosts.find((post) => post.id === id);
}
