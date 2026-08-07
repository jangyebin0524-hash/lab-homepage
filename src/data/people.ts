import type { Person, ProfessorProfile } from '../types/content'
import sungmoonParkPhoto from '../assets/people/sungmoon-park.png'

export const professor: ProfessorProfile = {
  name: {
    ko: '양진홍',
    en: 'Jinhong Yang',
  },
  role: {
    ko: '교수',
    en: 'Professor',
  },
  email: 'sunupnet@gmail.com',
  phone: '055-320-4132',
  office: '성산관(F동) 904호',
}

export const people: Person[] = [
  {
    id: 'undergraduate-kim-seowan',
    group: 'undergraduate-researchers',
    nameKo: '김서완',
    role: 'Undergraduate Researcher',
    departmentKo: '인제대학교 의료IT학과',
    departmentEn: 'Department of Medical IT, Inje University',
    email: 'gonstoro0521@gmail.com',
  },
  {
    id: 'undergraduate-park-seongmun',
    group: 'undergraduate-researchers',
    nameKo: '박성문',
    nameEn: 'Sungmoon Park',
    role: 'Undergraduate Researcher',
    departmentKo: '인제대학교 의료IT학과',
    departmentEn: 'Department of Medical IT, Inje University',
    email: 'gkridans55@oasis.inje.ac.kr',
    photo: sungmoonParkPhoto,
  },
  {
    id: 'undergraduate-kim-seungmin',
    group: 'undergraduate-researchers',
    nameKo: '김승민',
    nameEn: 'Seungmin Kim',
    role: 'Undergraduate Researcher',
    departmentKo: '인제대학교 의료IT학과',
    departmentEn: 'Department of Medical IT, Inje University',
    email: 'kimseungmin0101@gmail.com',
  },
  {
    id: 'undergraduate-lee-suhyeon',
    group: 'undergraduate-researchers',
    nameKo: '이수현',
    nameEn: 'Soohyun Lee',
    role: 'Undergraduate Researcher',
    departmentKo: '인제대학교 의료IT학과',
    departmentEn: 'Department of Medical IT, Inje University',
    email: 'sh20201716@gmail.com',
  },
  {
    id: 'undergraduate-jang-yebin',
    group: 'undergraduate-researchers',
    nameKo: '장예빈',
    nameEn: 'Yebin Jang',
    role: 'Undergraduate Researcher',
    departmentKo: '인제대학교 의료IT학과',
    departmentEn: 'Department of Medical IT, Inje University',
    email: 'jangyebin0524@gmail.com',
  },
]
