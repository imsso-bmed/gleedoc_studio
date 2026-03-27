// src/data/clients.js

import { mapClientImageUrl } from '../utils/imagekit';

const rawClients = [
    {
      id: 'yongin-severance',
      name: 'Yongin Severance Hospital',
      nameKo: '용인세브란스병원',
      logo: 'https://ik.imagekit.io/2cas695rs/Clients/yongin_severance_hospital.png?updatedAt=1774575058006'
    },
  {
    id: 'korean-pediatric-society',
    name: 'The Korean Pediatric Society',
    nameKo: '대한소아청소년과학회',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/korean-pediatric-association.png?updatedAt=1774575015390'
  },
  {
    id: 'pnuh',
    name: 'Pusan National University Hospital',
    nameKo: '부산대학교병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/pnuh.png?updatedAt=1774575015431'
  },
  {
    id: 'asan-medical-center',
    name: 'Asan Medical Center',
    nameKo: '서울아산병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/asan-medical-center.png?updatedAt=1774575015120'
  },
  {
    id: 'chungang-university-hospital',
    name: 'Chung-Ang University Hospital',
    nameKo: '중앙대학교병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/chungang-university-hospital.png?updatedAt=1774575015290'
  },
  {
    id: 'kaist',
    name: 'KAIST',
    nameKo: 'KAIST',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/kaist.png?updatedAt=1774575015401'
  },
  {
    id: 'chonnam-university-hospital',
    name: 'Chonnam National University Hospital',
    nameKo: '전남대학교병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/kaist.png?updatedAt=1774575015401'
  },
  {
    id: 'hallym-dongtan',
    name: 'Hallym University Dongtan Sacred Heart Hospital',
    nameKo: '한림대학교동탄성심병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/hallym-dongtan.png?updatedAt=1774575015500'
  },
  {
    id: 'korean-liver-cancer-assoc',
    name: 'The Korean Liver Cancer Association',
    nameKo: '대한간암학회',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/korean-liver-cancer-assoc.png?updatedAt=1774575015486'
  },
  {
    id: 'hanyang-college-medicine',
    name: 'Hanyang University College of Medicine',
    nameKo: '한양대학교 의과대학',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/hanyang-college-medicine.png?updatedAt=1774575015383'
  },
  {
    id: 'snuh',
    name: 'Seoul National University Hospital',
    nameKo: '서울대학교병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/snuh.png?updatedAt=1774575015321'
  },
  {
    id: 'smc',
    name: 'Samsung Medical Center',
    nameKo: '삼성서울병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/smc.png?updatedAt=1774575015294'
  },
  {
    id: 'dongguk-university-hospital',
    name: 'Dongguk University Hospital',
    nameKo: '동국대학교병원',
    logo: 'https://ik.imagekit.io/2cas695rs/Clients/dongguk-university-hospital.png?updatedAt=1774575015330'
  },
];

export const clients = rawClients.map((client) => ({
  ...client,
  logo: mapClientImageUrl(client.logo)
}));

export const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/gleedoc',
    icon: 'Facebook',
    label: { en: 'Facebook', ko: 'Facebook' }
  },
  {
    name: 'Blog',
    url: 'https://blog.naver.com/jsr4ever',
    icon: 'FileText', // or custom blog icon
    label: { en: 'Naver Blog', ko: '네이버 블로그' }
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/gleedoc',
    icon: 'Linkedin',
    label: { en: 'LinkedIn', ko: 'LinkedIn' }
  }
];
