import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ceo, medicalIllustrators as artists, alumniIllustrators } from '../data/team';
import { buildImageKitUrl, mapArtworkImageUrl } from '../utils/imagekit';

function WatermarkedImage({ src, alt, watermarkText }) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isWatermarked, setIsWatermarked] = useState(false);

  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    imgRef.current = img;
    
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement;
      let maxW = img.width, maxH = img.height;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        if (parentRect.width > 0 && parentRect.height > 0) {
          const scale = Math.min(parentRect.width / img.width, parentRect.height / img.height, 1);
          maxW = img.width * scale;
          maxH = img.height * scale;
        }
      }
      canvas.width = maxW;
      canvas.height = maxH;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, maxW, maxH);
      ctx.drawImage(img, 0, 0, maxW, maxH);

      const fontSize = Math.max(Math.floor(maxW * 0.08), 24);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 2;
      const metrics = ctx.measureText(watermarkText);
      const textX = (maxW - metrics.width) / 2;
      const textY = maxH / 2;
      ctx.strokeText(watermarkText, textX, textY);
      ctx.fillText(watermarkText, textX, textY);
      
      setIsWatermarked(true);
      setImageLoaded(true);
    };
    img.onerror = () => setImageLoaded(true);
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, watermarkText]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="object-contain w-full h-full max-w-full max-h-full"
        style={{ display: isWatermarked ? 'block' : 'none' }}
      />
      {!isWatermarked && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
    </>
  );
}

export const projects = [
                                {
                                  id: 188,
                                  title: "SLN, BCS Figure",
                                  titleKo: "SLN, BCS Figure",
                                  category: ["Figure", "Surgical Illustration"],
                                  categoryKo: ["Figure", "수술 일러스트"],
                                  tags: ["figure", "surgical-illustration"],
                                  artists: ["cheolhee-han"],
                                  year: "2023.07",
                                  image: "https://ik.imagekit.io/2cas695rs/Artworks/1_preOP.jpg",
                                  images: [
                                    "https://ik.imagekit.io/2cas695rs/Artworks/1_preOP.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/2_localization.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/3_injection.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/4_incision.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/5_retracting.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/6_excisionLine.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/7_tumorExcision.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/8_ADM.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/9_suture1.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/10_suture2.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/11_lateralview_sample4.jpg",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/SLN_sample7_final.jpg"
                                  ],
                                  video: null,
                                  descKo: "서영진 교수님 의뢰(가톨릭대학교 성빈센트 유방외과), SLN, BCS figure.",
                                  descEn: "SLN, BCS figure for Prof. Youngjin Seo (St. Vincent's Hospital, Catholic University of Korea, Breast Surgery).",
                                  client: "서영진 교수님 (가톨릭대학교 성빈센트 유방외과)",
                                  clientEn: "Prof. Youngjin Seo, St. Vincent's Hospital, Catholic University of Korea, Breast Surgery",
                                },
                              {
                                id: 50,
                                title: "Aortic Research Society Logo",
                                titleKo: "대한대동맥연구회 로고디자인",
                                category: ["Logo Design"],
                                categoryKo: ["로고디자인"],
                                tags: ["logo-design"],
                                artists: ["jeah-kim"],
                                year: "2023.05",
                                image: "https://ik.imagekit.io/2cas695rs/Artworks/50.png?updatedAt=1774574986581",
                                images: [
                                  "https://ik.imagekit.io/2cas695rs/Artworks/50.png?updatedAt=1774574986581"
                                ],
                                video: null,
                                descKo: "대한대동맥연구회 로고디자인.",
                                descEn: "Logo design for Korean Aortic Research Society.",
                                client: "대한대동맥연구회",
                                clientEn: "Korean Aortic Research Society",
                              },
                                {
                                  id: 136,
                                  title: "TICGLE",
                                  titleKo: "TICGLE",
                                  category: ["Surgical Illustration", "Figure"],
                                  categoryKo: ["수술 일러스트", "Figure"],
                                  tags: ["surgical-illustration", "figure"],
                                  artists: ["jinsoo-rhu"],
                                  year: "2020.01",
                                  image: "https://ik.imagekit.io/2cas695rs/Artworks/136-1.jpg?updatedAt=1774574987012",
                                  images: [
                                    "https://ik.imagekit.io/2cas695rs/Artworks/136-1.jpg?updatedAt=1774574987012",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/136-2.PNG?updatedAt=1774574986408",
                                    "https://ik.imagekit.io/2cas695rs/Artworks/136-3.PNG"
                                  ],
                                  video: null,
                                  descKo: "TICGLE 수술 일러스트 및 Figure.",
                                  descEn: "Transplant Surgery: TICGLE.",
                                  client: "삼성서울병원 이식외과",
                                  clientEn: "Samsung Medical Center, Transplant Surgery",
                                },
                              {
                                id: 134,
                                title: "Nephron Exosome",
                                titleKo: "Nephron Exosome",
                                category: "Figure",
                                categoryKo: "Figure",
                                tags: ["medical-illustration"],
                                artists: ["jinsoo-rhu"],
                                year: "2020.01",
                                image: "https://ik.imagekit.io/2cas695rs/Artworks/134-1.jpg?updatedAt=1774574987284",
                                images: [
                                  "https://ik.imagekit.io/2cas695rs/Artworks/134-1.jpg?updatedAt=1774574987284",
                                  "https://ik.imagekit.io/2cas695rs/Artworks/134-2.PNG?updatedAt=1774574986310"
                                ],
                                video: null,
                                descKo: "서울순천향 신장내과 의뢰, Nephron exosome 논문 Figure.",
                                descEn: "Figure of nephron exosome for Soonchunhyang University Seoul Hospital, Nephrology.",
                                client: "서울순천향 신장내과",
                                clientEn: "Soonchunhyang University Seoul Hospital, Nephrology",
                              },
                            {
                              id: 133,
                              title: "Arachnoid Trabeculae",
                              titleKo: "Arachnoid Trabeculae",
                              category: "Medical Illustration",
                              categoryKo: "메디컬 일러스트",
                              tags: ["medical-illustration"],
                              artists: ["jinsoo-rhu"],
                              year: "2020.01",
                              image: "https://ik.imagekit.io/2cas695rs/Artworks/133.jpg?updatedAt=1774574986467",
                              images: [
                                "https://ik.imagekit.io/2cas695rs/Artworks/133_wpgm7c.jpg?updatedAt=1774574986467"
                              ],
                              video: null,
                              descKo: "한양대 신경외과 의뢰, Arachnoid trabeculae 메디컬 일러스트.",
                              descEn: "Medical illustration of arachnoid trabeculae for Hanyang University Neurosurgery.",
                              client: "한양대 신경외과",
                              clientEn: "Hanyang University Neurosurgery",
                            },
                          {
                            id: 106,
                            title: "HBP-Ampullectomy, PJ anastomosis",
                            titleKo: "HBP-Ampullectomy, PJ anastomosis",
                            category: "Surgical Illustration",
                            categoryKo: "수술 일러스트",
                            tags: ["surgical-illustration"],
                            artists: ["jinsoo-rhu"],
                            year: "2020.06",
                            image: "https://ik.imagekit.io/2cas695rs/Artworks/106-1.jpg?updatedAt=1774574986939",
                            images: [
                              "https://ik.imagekit.io/2cas695rs/Artworks/106-1.jpg?updatedAt=1774574986939",
                              "https://ik.imagekit.io/2cas695rs/Artworks/106-2.jpg?updatedAt=1774574987085"
                            ],
                            video: null,
                            descKo: "한양대 의뢰, HBP-Ampullectomy, PJ anastomosis 수술 일러스트.",
                            descEn: "Surgical illustration for Hanyang University: HBP-Ampullectomy, PJ anastomosis.",
                            client: "한양대",
                            clientEn: "Hanyang University",
                          },
                        {
                          id: 9,
                          title: "Laparo Esophagojejunstomy",
                          titleKo: "Laparo Esophagojejunstomy",
                          category: ["Surgical Illustration", "Figure"],
                          categoryKo: ["수술 일러스트", "Figure"],
                          tags: ["surgical-illustration", "figure"],
                          artists: ["miseung-kim"],
                          year: "2021.09",
                          image: "https://ik.imagekit.io/2cas695rs/Artworks/9-1.jpg?updatedAt=1774574986579",
                          images: [
                            "https://ik.imagekit.io/2cas695rs/Artworks/9-1.jpg?updatedAt=1774574986579",
                            "https://ik.imagekit.io/2cas695rs/Artworks/9-2.jpg?updatedAt=1774574986602",
                            "https://ik.imagekit.io/2cas695rs/Artworks/9-3.jpg?updatedAt=1774574986313"
                          ],
                          video: null,
                          descKo: "서울대 외과 의뢰, 논문용 수술 일러스트. 논문명: Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis",
                          descEn: "Surgical illustration for Seoul National University Department of Surgery, for the paper: Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis.",
                          client: "서울대 외과",
                          clientEn: "Seoul National University Department of Surgery",
                          paperTitle: "Postoperative morbidity and quality of life between totally laparoscopic total gastrectomy and laparoscopy-assisted total gastrectomy: A propensity-score matched analysis",
                          doi: "https://doi.org/10.1186/s12885-021-08744-1",
                        },
                      {
                        id: 10,
                        title: "Pediatric Congenital Heart Surgery",
                        titleKo: "소아 심장기형 수술",
                        category: "Surgical Illustration",
                        categoryKo: "수술 일러스트",
                        tags: ["surgical-illustration"],
                        artists: ["miseung-kim"],
                        year: "2021.03",
                        image: "https://ik.imagekit.io/2cas695rs/Artworks/10.jpg?updatedAt=1774574987223",
                        images: [
                          "https://ik.imagekit.io/2cas695rs/Artworks/10.jpg?updatedAt=1774574987223"
                        ],
                        video: null,
                        descKo: "소아 심장기형 수술 일러스트.",
                        descEn: "Surgical illustration of pediatric congenital heart surgery.",
                        client: "부산대 흉부외과",
                        clientEn: "Pusan National University Thoracic Surgery",
                      },
                      {
                        id: 20,
                        title: "Aortic Surgery",
                        titleKo: "대동맥수술",
                        category: "Medical Illustration",
                        categoryKo: "의학 일러스트",
                        tags: ["medical-illustration"],
                        artists: ["miseung-kim"],
                        year: "2020.08",
                        image: "https://ik.imagekit.io/2cas695rs/Artworks/20.jpg?updatedAt=1774574986988",
                        images: [
                          "https://ik.imagekit.io/2cas695rs/Artworks/20.jpg?updatedAt=1774574986988"
                        ],
                        video: null,
                        descKo: "대동맥수술 메디컬 일러스트.",
                        descEn: "Medical illustration of aortic surgery.",
                        client: "양산부대 흉부외과",
                        clientEn: "Yangsan Armed Forces Thoracic Surgery",
                      },
                    {
                      id: 151,
                      title: "Thyroid nodule - C6 axial",
                      titleKo: "Thyroid nodule - C6 axial",
                      category: "Medical Illustration",
                      categoryKo: "의학 일러스트",
                      tags: ["medical-illustration"],
                      artists: ["soyoung-lim"],
                      year: "2023.03",
                      image: "https://ik.imagekit.io/2cas695rs/Artworks/151.jpg?updatedAt=1774574986195",
                      images: [
                        "https://ik.imagekit.io/2cas695rs/Artworks/151.jpg?updatedAt=1774574986195"
                      ],
                      video: null,
                      descKo: "갑상선 결절(C6 축면) 메디컬 일러스트.",
                      descEn: "Medical illustration of a thyroid nodule (C6 axial view).",
                      client: null,
                      clientEn: null,
                    },
                  {
                    id: 177,
                    title: "Dr. DanGam's Liver Transplantation Comic Book Cover",
                    titleKo: "닥터 단감의 간이식만화 표지 일러스트",
                    category: "Book Cover Illustration",
                    categoryKo: "Book Cover Illustration",
                    tags: ["book-cover"],
                    artists: ["jinsoo-rhu", "soyoung-lim"],
                    year: "2022.07",
                    image: "https://ik.imagekit.io/2cas695rs/Artworks/177.jpg?updatedAt=1774574986781",
                    images: [
                      "https://ik.imagekit.io/2cas695rs/Artworks/177.jpg?updatedAt=1774574986781"
                    ],
                    video: null,
                    descKo: "닥터 단감의 간이식만화 표지 일러스트",
                    descEn: "Dr. DanGam's Liver Transplantation Comic Book Cover Illustration",
                    client: null,
                    clientEn: null,
                  },
                  {
                    id: 178,
                    title: "Hanyang University Surgery Logo Design",
                    titleKo: "한양대외과 로고디자인",
                    category: "Logo Design",
                    categoryKo: "로고 디자인",
                    tags: ["logo-design"],
                    artists: ["soyoung-lim"],
                    year: "2022.08",
                    image: "https://ik.imagekit.io/2cas695rs/Artworks/178-1.jpg?updatedAt=1774574986266",
                    images: [
                      "https://ik.imagekit.io/2cas695rs/Artworks/178-1.jpg?updatedAt=1774574986266",
                      "https://ik.imagekit.io/2cas695rs/Artworks/178-2.jpg?updatedAt=1774574986397",
                      "https://ik.imagekit.io/2cas695rs/Artworks/178-3.jpg?updatedAt=1774574986511"
                    ],
                    video: null,
                    descKo: "한양대를 상징하는 사자, 의학을 상징하는 아스클레피오스의 지팡이(rod of Asclepius), 그리고 외과를 상징하는 메스를 조합하여 디자인한 한양대학교 외과 로고입니다.",
                    descEn: "This logo for Hanyang University Department of Surgery combines a lion symbolizing Hanyang University, the rod of Asclepius representing medicine, and a scalpel to signify surgery.",
                    client: "한양대학교 외과",
                    clientEn: "Hanyang University Department of Surgery",
                  },
                {
                  id: 182,
                  title: "Cardiac ultrasound exam figure",
                  titleKo: "심장 초음파 검사 figure",
                  category: "Figure",
                  categoryKo: "Figure",
                  tags: ["figure"],
                  artists: ["jeongin-choi"],
                  year: "2023.10",
                  image: "https://ik.imagekit.io/2cas695rs/Artworks/182.jpeg?updatedAt=1774574986907",
                  images: [
                    "https://ik.imagekit.io/2cas695rs/Artworks/182.jpeg?updatedAt=1774574986907"
                  ],
                  video: null,
                  descKo: "심장초음파검사를 시행하게 되면 visual analysis (qualitatative analysis)와 manual measurement를 통한 평가 (quantitative analysis)를 모두 시행하여햐하는데 초음파 검사 한건을 하기 위해서는 이 두 종류의 평가를 십여변, 많게는 수십번 반복해야한다는 것을 강조하기 위함을 화살 표를 추가하여 보여준다.",
                  descEn: "When performing a cardiac ultrasound, both visual analysis (qualitative analysis) and manual measurement-based evaluation (quantitative analysis) must be conducted. To emphasize this point, arrows are added in the illustration to show that performing a single ultrasound exam requires repeating these two types of evaluations multiple times, sometimes tens or even dozens of times. This visual representation helps highlight the repetitive nature of the process in a clear and intuitive way.",
                  client: "분당서울대학교병원 순환기내과 윤연이 교수",
                  clientEn: "Prof. Yeon Yi Yoon, Division of Cardiology, Seoul National University Bundang Hospital",
                },
              {
                id: 184,
                title: "ASDN kidney figure",
                titleKo: "ASDN kidney figure",
                category: ["Figure", "Graphical Abstract"],
                categoryKo: ["Figure", "Graphical Abstract"],
                tags: ["figure", "graphical-abstract"],
                artists: ["jeongin-choi"],
                year: "2023.10",
                image: "https://ik.imagekit.io/2cas695rs/Artworks/184-1.jpeg?updatedAt=1774574986585",
                images: [
                  "https://ik.imagekit.io/2cas695rs/Artworks/184-1.jpeg?updatedAt=1774574986585",
                  "https://ik.imagekit.io/2cas695rs/Artworks/184-2.jpeg?updatedAt=1774574986804",
                  "https://ik.imagekit.io/2cas695rs/Artworks/184-3.jpeg?updatedAt=1774574986818"
                ],
                video: null,
                descKo: "저나트륨 고칼륨 식사가 고혈압과 심혈관계 질환에 미치는 영향에 대한 일러스트.",
                descEn: "A figure that summarizes the current understanding of renal handling physiology of potassium (K+) and provides an integrated perspective on the renal response to potassium depletion caused by dietary potassium (K+) restriction.",
                client: "한양대학교 김병식 교수",
                clientEn: "Prof. Byung Sik Kim, Hanyang University",
              },
            {
              id: 166,
              title: "LDLT Donor OR figure",
              titleKo: "간이식 기증자 수술 figure",
              category: ["Surgical Illustration", "Figure", "Journal Cover"],
              categoryKo: ["수술 일러스트", "Figure", "Journal Cover"],
              tags: ["surgical-illustration", "figure", "journal-cover"],
              artists: ["jinsoo-rhu", "soyoung-lim"],
              year: "2022.08",
              image: "https://ik.imagekit.io/2cas695rs/Artworks/166-1.jpg?updatedAt=1774574988269",
              images: [
                "https://ik.imagekit.io/2cas695rs/Artworks/166-1.jpg?updatedAt=1774574988269",
                "https://ik.imagekit.io/2cas695rs/Artworks/166-2.jpg?updatedAt=1774574987129"
              ],
              video: null,
              descKo: "Liver Transplantation 2022 Journal Cover",
              descEn: "Liver Transplantation 2022 Journal Cover",
              client: null,
              clientEn: null,
            },
            {
              id: 191,
              title: "Infiltrative Lesions of the Thyroid: Benign vs. Malignant",
              titleKo: "갑상샘 침윤성 병변: 양성 대 악성",
              category: "Figure",
              categoryKo: "Figure",
              tags: ["figure"],
              artists: ["hyejeong-hong"],
              year: "2024.02",
              image: "https://ik.imagekit.io/2cas695rs/Artworks/191.jpg?updatedAt=1774574986305",
              images: [
                "https://ik.imagekit.io/2cas695rs/Artworks/191.jpg?updatedAt=1774574986305"
              ],
              video: null,
              descKo: "갑상선 내부에 침윤성 병변이 나타난 양상(좌: 양성, 우: 악성)을 비교한 Figure 일러스트. 좌측은 benign하게 thyroid 내부에 infiltration lesion이 보이고, 우측은 malignancy스럽게(무시무시하게) infiltration lesion이 표현됨.",
              descEn: "A figure illustration comparing infiltrative lesions of the thyroid: the left shows a benign-appearing infiltration within the thyroid, while the right depicts a malignant, aggressive infiltration pattern.",
              client: "고려대학교 안암병원 영상의학과 조교수 신재호",
              clientEn: "Prof. Jaeho Shin, Department of Radiology, Korea University Anam Hospital",
            },
          // {
          //   id: 194,
          //   title: "Duodenoduodenostomy for duodenal obstruction",
          //   titleKo: "십이지장 폐쇄에 따른 십이지장 문합술",
          //   category: "Surgical Illustration",
          //   categoryKo: "수술 일러스트",
          //   tags: ["surgical-illustration"],
          //   artists: ["haeun-kim"],
          //   year: "2025.03",
          //   image: "https://ik.imagekit.io/2cas695rs/Artworks/194.png?updatedAt=1774574986995",
          //   images: [
          //     "https://ik.imagekit.io/2cas695rs/Artworks/194.png?updatedAt=1774574986995"
          //   ],
          //   video: null,
          //   descKo: "십이지장 폐쇄 위치에 따른 십이지장 문합술 방법에 대해 2D 일러스트로 표현하였다.",
          //   descEn: "2D illustrations of duodenoduodenostomy techniques according to the site of duodenal obstruction.",
          //   client: "삼성서울병원 이상훈 교수",
          //   clientEn: "Prof. Sanghoon Lee, Samsung Medical Center",
          // },
        {
          id: 195,
          title: "Anatomical Layers of the Temporalis Muscle Fascia in a Postauricular Surgical View",
          titleKo: "이비인후과 관련 수술",
          category: "Surgical Illustration",
          categoryKo: "수술 일러스트",
          tags: ["surgical-illustration"],
          artists: ["haeun-kim"],
          year: "2025.08",
          image: "https://ik.imagekit.io/2cas695rs/Artworks/195.png?updatedAt=1774574987860",
          images: [
            "https://ik.imagekit.io/2cas695rs/Artworks/195.png?updatedAt=1774574987860"
          ],
          video: null,
          descKo: "귀 뒤쪽으로 접근해서 Temporalis muscle 의 fascia 를 떼는 그림이다. 가장 superficial 하게 superficial temporalis fascia 가 있고, 그 아래에 deep temporalis fascia 가 있고, 마지막 층에 temporalis muscle 이 있는 구조적 특징을 구분하기 쉽게 표현한 2D 일러스트이다.",
          descEn: "A 2D illustration depicting the harvesting of temporalis muscle fascia via a postauricular approach. The anatomical layers—including the superficial temporal fascia, the underlying deep temporal fascia, and the temporalis muscle—are clearly delineated for ease of structural identification.",
          client: null,
          clientEn: null,
        },
      {
        id: 186,
        title: "Minimally Invasive Cardiac Surgery",
        titleKo: "Minimally Invasive Cardiac Surgery",
        category: "Surgical Illustration",
        categoryKo: "수술 일러스트",
        tags: ["surgical-illustration"],
        artists: ["jeongin-choi"],
        year: "2023.05",
        image: "https://ik.imagekit.io/2cas695rs/Artworks/186.jpeg?updatedAt=1774574986285",
        images: [
          "https://ik.imagekit.io/2cas695rs/Artworks/186_izdtqk.jpg?updatedAt=1774574986285"
        ],
        video: null,
        descEn: "An illustration showing the incision for heart surgery and the scope being inserted.",
        descKo: "심장수술의 인시젼과 스콥이 들어간 그림.",
        client: "용인세브란스 흉부외과 조교수 김완기",
        clientEn: "Yongin Severance Thoracic Surgery, Prof. Wanki Kim",
      },
    {
      id: 113,
      title: "Rectal Prolapse",
      titleKo: "항문직장질환 수술 일러스트",
      category: "Surgical Illustration",
      categoryKo: "수술 일러스트",
      tags: ["surgical-illustration"],
      artists: ["jinsoo-rhu"],
      year: "2020.01",
      image: "https://ik.imagekit.io/2cas695rs/Artworks/113-1.PNG?updatedAt=1774574986527",
      images: [
        "https://ik.imagekit.io/2cas695rs/Artworks/113-1.PNG?updatedAt=1774574986527",
        "https://ik.imagekit.io/2cas695rs/Artworks/113-2.PNG?updatedAt=1774574986429",
        "https://ik.imagekit.io/2cas695rs/Artworks/113-3.PNG?updatedAt=1774574986186"
      ],
      video: null,
      descEn: "Surgical illustration of rectal prolapse for Seoul Songdo Hospital.",
      descKo: "서울송도병원 의뢰 항문직장질환 수술 일러스트.",
      client: "서울송도병원",
      clientEn: "Seoul Songdo Hospital",
    },
      
    {
      id: 123,
      title: "L-RPS",
      titleKo: "L-RPS",
      category: "Figure",
      categoryKo: "Figure",
      tags: ["figure"],
      artists: ["jinsoo-rhu"],
      year: "2020.01",
      image: "https://ik.imagekit.io/2cas695rs/Artworks/123-1.PNG?updatedAt=1774574986719",
      images: [
        "https://ik.imagekit.io/2cas695rs/Artworks/123-1.PNG?updatedAt=1774574986719",
        "https://ik.imagekit.io/2cas695rs/Artworks/123-2.PNG?updatedAt=1774574986425",
        "https://ik.imagekit.io/2cas695rs/Artworks/123-3.PNG?updatedAt=1774574986440"
      ],
      video: null,
      descEn: "Figure illustration for Samsung Medical Center.",
      descKo: "삼성서울병원 의뢰 Figure 일러스트.",
      client: "삼성서울병원",
      clientEn: "Samsung Medical Center",
    },
    {
      id: 125,
      title: "Mesorectum",
      titleKo: "직장간막",
      category: ["Surgical Illustration", "Figure"],
      categoryKo: ["수술 일러스트", "Figure"],
      tags: ["surgical-illustration", "figure"],
      artists: ["jinsoo-rhu"],
      year: "2020.01",
      image: "https://ik.imagekit.io/2cas695rs/Artworks/125-1.PNG?updatedAt=1774574986244",
      images: [
        "https://ik.imagekit.io/2cas695rs/Artworks/125-1.PNG?updatedAt=1774574986244",
        "https://ik.imagekit.io/2cas695rs/Artworks/125-2.PNG?updatedAt=1774574986389",
        "https://ik.imagekit.io/2cas695rs/Artworks/125-3.PNG?updatedAt=1774574986535"
      ],
      video: null,
      descEn: "Surgical illustration of mesorectum for Kyungpook National University.",
      descKo: "경북대 의뢰 Mesorectum 수술 일러스트.",
      client: "경북대",
      clientEn: "Kyungpook National University",
    },
  {
    id: 12,
    title: "Pediatric allergy reaction illustration for the Pediatric Society",
    titleKo: "소아과학회-소아알러지반응",
    category: ["Medical Illustration", "Infographic"],
    categoryKo: ["의학 일러스트","인포그래픽"],
    tags: ["medical-illustration", "infographic"],
    artists: ["miseung-kim"],
    year: "2020.02",
    image: "https://ik.imagekit.io/2cas695rs/Artworks/12.jpg?updatedAt=1774574987091",
    images: [
      "https://ik.imagekit.io/2cas695rs/Artworks/12.jpg?updatedAt=1774574987091"
    ],
    video: null,
    descEn: "Pediatric allergy reaction illustration for the Pediatric Society.",
    descKo: "소아과학회 의뢰 소아 알러지 반응 일러스트.",
    client: "소아과학회",
    clientEn: "The Korean Pediatric Society",
  },
   {
     id: 155,
     title: "Screening Flowchart",
     titleKo: "스크리닝 플로우차트",
     category: ["Figure", "Flowchart", "Graphical Abstract"],
     categoryKo: ["Figure",  "플로우차트", "Graphical Abstract"],
     tags: ["figure", "flowchart", "graphical-abstract"],
     artists: ["soyoung-lim"],
     year: "2022.10",
     image: "https://ik.imagekit.io/2cas695rs/Artworks/155.jpg",
     images: [
       "https://ik.imagekit.io/2cas695rs/Artworks/155.jpg"
     ],
     video: null,
     descEn: "work period: Oct 31 – Dec 16 (about 1.5 months).",
     descKo: "작업기간: 10월 31일 – 12월 16일 (약 1.5개월)",
     client: "분당서울대병원",
     clientEn: "Seoul National University Bundang Hospital",
   },
   {
     id: 181,
     title: "Double-row Suture Bridge Fixation",
     titleKo: "Double-row Suture Bridge Fixation을 사용한 치료 사례",
     category: ["Surgical Illustration", "Figure"],
     categoryKo: ["수술 일러스트", "Figure"],
     tags: ["surgical-illustration", "figure"],
     artists: ["jeongin-choi"],
     year: "2024.08",
     image: "https://ik.imagekit.io/2cas695rs/Artworks/181.jpg?updatedAt=1774574986386",
     images: [
       "https://ik.imagekit.io/2cas695rs/Artworks/181.jpg?updatedAt=1774574986386"
     ],
     video: null,
     descKo: "1. 골절 형태의 일러스트\n2. 포털을 통한 봉합 앵커 삽입 일러스트\n3. 봉합 앵커를 이용한 최종 고정 일러스트",
     descEn: "1. Illustration of the Fracture Shape\n2. Illustration of Inserting Suture Anchor through Portal\n3. Illustration of Final Fixation with Suture Anchor",
     client: "울산대학교병원 정형외과 전영대 조교수",
     clientEn: "Prof. Young Dae Jeon, Department of Orthopedic Surgery, Ulsan University Hospital",
   },
   
];
 
export default function ProjectGrid({ lang, artistFilter = null }) {
  const isKo = lang === 'ko';
  const [selected, setSelected] = useState(null);
  const [activeTag, setActiveTag] = useState('all');
  const [activeArtist, setActiveArtist] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const normalizedProjects = useMemo(
    () => projects.map((project) => ({
      ...project,
      image: mapArtworkImageUrl(project.image),
      images: project.images ? project.images.map(mapArtworkImageUrl) : project.images
    })),
    []
  );

  // 이미지 해상도 최적화 함수
  const getOptimizedImageUrl = (url, width = 1200) => {
    if (!url) return url;
    
    // 모바일/데스크톱 구분
    const isMobile = window.innerWidth < 768;
    const dpr = window.devicePixelRatio || 1;
    
    // 모바일에서는 더 작은 해상도 사용, 데스크톱에서는 고해상도 사용
    let optimizedWidth = width;
    if (isMobile) {
      // 모바일: 화면 너비의 2배 정도 (충분한 품질 + 빠른 로딩)
      optimizedWidth = Math.ceil(window.innerWidth * 2 * dpr);
      // 최대값: 1200px (모바일에서는 불필요)
      optimizedWidth = Math.min(optimizedWidth, 1200);
    } else {
      // 데스크톱: DPR 고려한 고해상도
      optimizedWidth = Math.ceil(width * dpr);
    }
    
    return buildImageKitUrl(url, { width: optimizedWidth, quality: 80, format: 'webp' });
  };

  // 모달에서 키보드 좌우 화살표로 이미지 넘기기
  useEffect(() => {
    if (!selected || !(selected.images && selected.images.length > 1)) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, imageIndex]);

  useEffect(() => {
    setActiveArtist(artistFilter || null);
    // Reset tag filter when a specific artist is selected from outside
    if (artistFilter) {
      setActiveTag('all');
    }
  }, [artistFilter]);

  const closeModal = () => {
    setSelected(null);
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1));
    }
  };

  const handleNextImage = () => {
    if (selected && selected.images && selected.images.length > 0) {
      setImageIndex((prev) => (prev === selected.images.length - 1 ? 0 : prev + 1));
    }
  };

  const tagLabels = useMemo(() => ({
    en: {
      all: 'All',
      'surgical-illustration': 'Surgical Illustration',
      'scientific-illustration': 'Scientific Illustration',
      '2d-3d-animation': '2D/3D Animation',
      'figure': 'Figure',
      'logo-design': 'Logo Design',
      'flowchart': 'Flowchart',
      poster: 'Poster',
      infographic: 'Infographic',
      diagrams: 'Diagrams',
      editorial: 'Editorial'
    },
    ko: {
      all: '전체',
      'surgical-illustration': '수술 일러스트',
      'scientific-illustration': '과학 일러스트',
      '2d-3d-animation': '2D/3D 애니메이션',
      'figure': 'Figure',
      'logo-design': '로고 디자인',
      'medical-illustration': '메디컬 일러스트',
      'graphical-abstract': 'Graphical Abstract',
      'flowchart': '플로우차트',
      poster: '포스터',
      infographic: '인포그래픽',
      diagrams: '다이어그램',
      editorial: '에디토리얼'
    }
  }), []);

  // 전체보기일 때만 랜덤 정렬
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const filteredByTag = activeTag === 'all'
    ? shuffle(normalizedProjects)
    : normalizedProjects.filter((p) => p.tags.includes(activeTag));

  const alumniIds = useMemo(() => alumniIllustrators.map((a) => a.id), []);

  const visibleProjects = activeArtist === 'alumni-group'
    ? filteredByTag.filter((p) => p.artists && p.artists.some((id) => alumniIds.includes(id)))
    : activeArtist
      ? filteredByTag.filter((p) => p.artists && p.artists.includes(activeArtist))
      : filteredByTag;

  const artistOptions = useMemo(() => {
    const list = [ceo, ...artists, ...alumniIllustrators];
    return [...list].sort((a, b) =>
      isKo
        ? a.nameKo.localeCompare(b.nameKo, 'ko')
        : a.name.localeCompare(b.name, 'en')
    );
  }, [isKo]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="flex items-end justify-between border-b border-black/10 pb-6">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">
              Projects.
            </h2>
            <span className="hidden md:block font-mono text-sm">( {visibleProjects.length.toString().padStart(2, '0')} )</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['all', ...Array.from(new Set(normalizedProjects.flatMap((p) => p.tags)))].map((tag) => {
              // dash(-)를 띄어쓰기로, 각 단어 첫 글자 대문자로 변환
              const formatTag = (str) => str === 'all'
                ? (isKo ? '전체' : 'All')
                : (isKo
                  ? (tagLabels.ko[tag] || tag)
                  : (tagLabels.en[tag] || str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
                );
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                    activeTag === tag
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-200 hover:border-black'
                  }`}
                >
                  {formatTag(tag)}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm text-neutral-500 font-medium">{isKo ? '일러스트레이터' : 'Illustrators'}</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveArtist(null)}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  !activeArtist
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                {isKo ? '전체' : 'All'}
              </button>
              <button
                onClick={() => setActiveArtist('alumni-group')}
                className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                  activeArtist === 'alumni-group'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-neutral-200 hover:border-black'
                }`}
              >
                Alumni
              </button>
              {[ceo, ...artists].map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => setActiveArtist(artist.id)}
                  className={`px-3 py-2 rounded-full text-sm border transition-colors ${
                    activeArtist === artist.id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-black border-neutral-200 hover:border-primary'
                  }`}
                >
                  {isKo ? artist.nameKo : artist.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visibleProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer cursor-scale"
              onClick={() => setSelected(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 rounded-sm mb-6">
                <img
                  src={getOptimizedImageUrl(project.image, 600)}
                  alt={isKo ? project.titleKo : project.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 bg-white"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-black/10 pt-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-1">
                    {isKo ? project.titleKo : project.title}
                  </h3>
                  <p className="text-neutral-500">
                    {(() => {
                      const cat = isKo ? project.categoryKo : project.category;
                      if (Array.isArray(cat)) return cat.join(' / ');
                      return cat;
                    })()}
                  </p>
                </div>
                <span className="font-mono text-sm text-neutral-400">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white text-black w-[85vw] max-w-[1100px] max-h-[95vh] overflow-y-auto scrollbar-none rounded-2xl shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fixed md:absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors z-50 bg-white/90"
                onClick={closeModal}
                aria-label="Close"
                style={{boxShadow:'0 2px 8px 0 rgba(0,0,0,0.08)'}}
              >
                <X size={28} />
              </button>
              <div className="relative h-auto min-h-0 bg-neutral-100 flex flex-row items-center justify-center overflow-hidden gap-2">
                {/* 이미지 영역 */}
                <div className="flex-shrink-0 flex items-center justify-center bg-white p-0 w-[60vw] h-[60vh] min-w-0 min-h-0 relative overflow-hidden">
                  {selected.video ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={selected.video}
                      title={isKo ? selected.titleKo : selected.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : selected.images && selected.images.length > 0 ? (
                    <div className="relative flex items-center justify-center w-full h-full">
                      <WatermarkedImage
                        src={selected.images[imageIndex] ? getOptimizedImageUrl(selected.images[imageIndex], 1600) : ''}
                        alt={`${isKo ? selected.titleKo : selected.title} ${imageIndex + 1}`}
                        watermarkText="© Gleedoc Studio"
                        className="object-contain w-full h-full"
                        style={{objectFit:'contain'}}
                      />
                      {/* 이미지가 2장 이상일 때만 좌우 버튼 렌더링 */}
                      {selected.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-40"
                            aria-label="Previous image"
                            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-40"
                            aria-label="Next image"
                            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                      {selected.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                          {selected.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setImageIndex(i)}
                              className={`w-3 h-3 rounded-full border-2 border-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                                i === imageIndex
                                  ? 'bg-lime-400 scale-110 drop-shadow-lg'
                                  : 'bg-white/70 opacity-80'
                              }`}
                              style={{ outline: '2px solid rgba(0,0,0,0.18)' }}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <WatermarkedImage
                      src={selected.image ? getOptimizedImageUrl(selected.image, 1600) : ''}
                      alt={isKo ? selected.titleKo : selected.title}
                      watermarkText="© Gleedoc Studio"
                      className="object-contain w-full h-full max-w-full max-h-full min-w-0 min-h-0"
                      style={{objectFit:'contain',width:'100%',height:'100%',maxWidth:'100%',maxHeight:'100%'}}
                    />
                  )}
                </div>
              </div>
              
              {/* 설명 + 타이틀 + 클라이언트 + 아티스트 영역 */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-8">
                  {/* 설명 + Medical Illustrator 영역 */}
                  <div className="w-full flex flex-col gap-6 px-4 md:px-8 items-center text-center">
                    {/* 타이틀 */}
                    <h3 className="text-2xl font-bold text-center mb-2 mt-2">{selected && (isKo ? selected.titleKo : selected.title)}</h3>
                    {/* 설명 */}
                    <p className="text-base text-neutral-700 leading-relaxed mb-2 text-left break-words max-w-2xl mx-auto" style={{textAlign:'left'}}>
                      {selected && (isKo ? selected.descKo : selected.descEn)}
                    </p>
                    {/* 클라이언트 (작업기간/Year는 삭제) */}
                    {selected && selected.client && (
                      <div className="text-lg text-neutral-700 font-semibold flex flex-col items-center mb-2 gap-1">
                        <span>
                          {isKo
                            ? <>클라이언트: <span className="font-bold">{selected.client}</span></>
                            : <>Client: <span className="font-bold">{selected.clientEn || selected.client}</span></>
                          }
                        </span>
                      </div>
                    )}
                    {selected && selected.year && (
                      <div className="text-base text-neutral-500 font-normal flex flex-col items-center mb-2">
                        {isKo ? `작업기간: ${selected.year}` : `Work period: ${selected.year}`}
                      </div>
                    )}
                    {/* Medical Illustrator */}
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2 mt-2 mb-2">
                      <span className="text-base font-semibold text-neutral-700 mr-2">
                        {isKo
                          ? '담당 일러스트레이터'
                          : (selected.artists.length === 1 ? 'Medical Illustrator' : 'Medical Illustrators')}
                      </span>
                      {selected.artists.map((artistId) => {
                        const artist = artists.find(a => a.id === artistId)
                          || alumniIllustrators.find(a => a.id === artistId)
                          || (ceo && ceo.id === artistId ? ceo : null);
                        return artist ? (
                          <span
                            key={artistId}
                            className="px-4 py-2 bg-primary/10 text-primary text-base rounded-full font-medium shadow-sm"
                          >
                            {isKo ? artist.nameKo : artist.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
