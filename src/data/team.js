// src/data/team.js

import { mapArtistImageUrl } from '../utils/imagekit';

const mapMemberImages = (member) => ({
  ...member,
  image: mapArtistImageUrl(member.image),
  imageList: member.imageList ? member.imageList.map(mapArtistImageUrl) : member.imageList
});

const rawCeo = {
  id: 'jinsoo-rhu',
  name: 'Jinsoo Rhu',
  nameKo: '유진수',
  title: 'CEO',
  titleKo: '대표',
  image: 'https://ik.imagekit.io/2cas695rs/Artist/CEO2.jpg?updatedAt=1774575083520',
  imageList: [
    'https://ik.imagekit.io/2cas695rs/Artist/CEO2.jpg?updatedAt=1774575083520',
    'https://ik.imagekit.io/2cas695rs/Artist/CEO.jpg?updatedAt=1774575084229'
  ],
  bio: {
    en: 'Founder & CEO of Gleedoc. Associate Professor of Surgery at Samsung Medical Center and Sungkyunwon University School of Medicine. Medical illustrator and webtoon author with passion for medical education and visual storytelling.',
    ko: 'Gleedoc 대표이자 창업자. 삼성서울병원 성균관대학교 외과 부교수이며, 메디컬 일러스트레이션과 웹툰을 통해 의학 교육과 시각적 이야기 전달에 열정을 가지고 있습니다.'
  },
  credentials: [
    'Associate Professor, Department of Surgery, Samsung Medical Center & Sungkyunwon University',
    'Founder & Representative, Greendoc Medical Illustration Studio',
    'Webtoon Creator, "Dr. DanGam\'s Medical Stories"',
    'Education Director (Medical), Korean Medical Artists Association'
  ],
  credentialsKo: [
    '삼성서울병원 성균관대학교 외과 부교수',
    '메디컬일러스트 그리닥 대표',
    '메디컬웹툰 닥터단감 작가',
    '대한메디컬아티스트학회 교육이사(의학)'
  ],
  publications: [
    'Dr. DanGam\'s Medical Stories Vol. 1, 2',
    'Dr. DanGam\'s Comic Psychiatry',
    'Dr. DanGam\'s Liver Transplantation Comic'
  ],
  publicationsKo: [
    '닥터단감의 의학이야기 1권, 2권',
    '닥터단감의 만화정신의학',
    '닥터단감의 간이식만화'
  ],
  serializations: [
    'Dong-A Ilbo: \'Doctors Who Draw Comics\' series',
    'InterMD: \'DRDG\' (ongoing)',
    'Various medical comic serials'
  ],
  serializationsKo: [
    "동아일보 만화그리는 의사들 '닥터단감의 퓨처메디' '닥터단감의 도시서바이벌', '닥터단감의 캔서카툰' 연재 중",
    "인터엠디 'DRDG' 연재 중",
    '기타 다양한 의학 만화 연재 경험 및 연재 중'
  ],
  linkedin: 'https://www.linkedin.com/in/jinsoorhu/',
  projectIds: [1, 2, 3] // 참여한 프로젝트 IDs
};

export const ceo = mapMemberImages(rawCeo);

const rawMedicalIllustrators = [
  {
    id: 'haeun-kim',
    name: 'Haeun Kim',
    nameKo: '김하은',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_haeun.jpg.png?updatedAt=1774575084215',
    email: 'haeunhannah1230@gmail.com',
    bio: {
      en: 'Medical Illustrator\nProviding visualization solutions that elevate the value of research. I specialize in translating complex medical information into clear visual language.',
      ko: '연구의 가치를 높이는 시각화 솔루션을 제공하고,  복잡한 의학 정보를 명확한 시각 언어로 전달하는 메디컬 일러스트레이터 김하은입니다.'
    },
    website: '',
    tool: [
      'Adobe Programs (Illustrator, Photoshop, After Effect, Substance 3D Painter)',
      'Procreate',
      'Figma',
      'MAYA',
      'Zbrush'
    ],
    interests: [
      'Surgical Illustration',
      'Visual Abstract',
      'Graphical Abstract',
      'Medical Information Design'
    ],
    projectIds: []
  },
  {
    id: 'soyoung-lim',
    name: 'Soyoung Lim',
    nameKo: '임소영',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
      image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_soyoung.png?updatedAt=1774575084225',
    email: 'syl942511@gmail.com',
    bio: {
      en: 'Majored in design at university and studied Biomedical Art in graduate school. I aim to deliver complex medical information in an accurate and easily understandable visual language.',
      ko: '대학에서 디자인을 전공하고, 대학원에서 바이오메디컬아트를 공부했으며 복잡한 의학 정보를 정확하고 이해하기 쉬운 시각 언어로 전달하는 작업을 지향합니다.'
    },
    website: ['https://imsso.tistory.com/', 'https://www.linkedin.com/in/soyounglim/'],
    tool: [
      '3D Slicer',
      'Clipstudio Paint',
      'Adobe Programs (Illustrator, Photoshop, InDesign, After Effects, Premiere)',
      'Blender3D',
      'three.js',
      'React',
      'VScode'
    ],
    interests: [
      'Surgical Illustration',
      'Web3D Visualization',
      'Video Abstract',
      'Graphical Abstract',
      'Women’s Health Visualization'
    ],
    projectIds: []
  },
  {
    id: 'jeongin-choi',
    name: 'Jeongin Choi',
    nameKo: '최정인',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_jeongin.png?updatedAt=1774575102268',
    email: 'jeongin9248@gmail.com',
    website: '', // 포트폴리오 링크는 추후 업데이트 예정
    bio: {
      en: 'I create medical illustrations tailored for surgery and research purposes. I value the balance between medical accuracy and visual completeness.',
      ko: '수술 및 연구 목적에 맞춘 의학 일러스트를 제작합니다.\n의학적 정확성과 시각적 완성도 사이의 균형을 중요하게 생각합니다.'
    },
      tool: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe InDesign',
        'Adobe After Effect',
        'Premiere Pro',
        'Procreate',
        'Blender3D',
        '3D Slicer'
      ],
    interests: [
      'Medical Illustration',
      'Graphical Abstract',
      'Human Anatomy',
      'Medical Education',
      '3D printing'
    ],
    projectIds: []
  },
  {
    id: 'hyejeong-hong',
    name: 'Hyejeong Hong',
    nameKo: '홍혜정',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
      image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_hyejeong2.png',
    email: 'hedgehogs@kakao.com',
    bio: {
      en: 'I majored in Psychology and completed a Master\'s degree in Biomedical Art. I am interested in structuring complex information logically and visualizing it in an accessible way, with a particular focus on neuroscience and biopsychology.',
      ko: '심리학 전공 후 바이오메디컬아트 석사를 마쳤습니다. 복잡한 정보를 논리적으로 구조화하고 이해하기 쉽게 시각화하는 작업을 선호하며, 뇌과학과 생물심리학 분야에 관심을 두고 있습니다.'
    },
    website: '',
      tool: [
        'Adobe Programs (Illustrator, Photoshop, After Effect)',
        'Blender3D',
        'Procreate',
        'Zbrush',
        '3D Slicer'
      ],
    interests: [
      'Neuroscience',
      'Biopsychology',
      'Neuroanatomy',
      'Educational Material Visualization'
    ],
    projectIds: []
  }
];

export const medicalIllustrators = rawMedicalIllustrators.map(mapMemberImages);

const rawAlumniIllustrators = [
    {
    id: 'jeah-kim',
    name: 'Jeah Kim',
    nameKo: '김지아',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: '/images/team/artist-alumni-5.jpg',
    website: '',
    experience: ['Biomedical Visualization', 'Patient Education'],
    projectIds: []
  },
  {
    id: 'miseung-kim',
    name: 'Miseung Kim',
    nameKo: '김미승',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_miseung.png?updatedAt=1774575083801',
    website: 'https://miseung.artstation.com/',
    experience: ['Infographic Design', 'Medical Illustration', 'Surgical Illustration'],
    projectIds: []
  },
  {
    id: 'cheolhee-han',
    name: 'Cheolhee Han',
    nameKo: '한철희',
    role: 'Medical Illustrator',
    roleKo: '메디컬 일러스트레이터',
    image: 'https://ik.imagekit.io/2cas695rs/Artist/profile_cheolheehan.jpg?updatedAt=1774575084109',
    website: 'https://teammedicalpolygon.com/',
    experience: ['Medical Illustration'],
    projectIds: []
  }
];

export const alumniIllustrators = rawAlumniIllustrators.map(mapMemberImages);
