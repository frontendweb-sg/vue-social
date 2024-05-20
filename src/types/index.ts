export type Color =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'default'
  | 'gray'
  | 'danger'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export interface Media {
  public_id: string
  url: string
  resource_type?: string
  access_mode?: string
  folder?: string
  version?: string
  signature: string
}

export interface IUser {
  id?: string
  firstname: string
  lastname: string
  email: string
  password: string
  mobile: string
  avatar: Media
  role: string
  active: string
  emailVerify: boolean
  accessToken: string
  createdAt?: string
  updatedAt: string
}

export interface Language {
  code: string
  name: string
  options: {
    read: boolean
    write: boolean
    speak: boolean
  }[]
}
export interface Social {
  youtube: string
  twitter: string
  facebook: string
  linkedin: string
  instagram: string
}
export interface Skill {
  language: string
  rating: number
}

export interface Project {
  name: string // vue-social
  role: string // developer
  duration: string // 1 year
  frontendIn: string // react
  backendIn: string // nodejs
  teamSize?: number // 5
  database?: string // mongodb
  cssOrFramework?: string // tailwind css
  helperTechnologies?: [string] // [pinia, vue-router, vueuse]
  projectUrl?: string // http://vue-social.com
}
export interface Employment {
  company: string // rsystems
  designation: string // team leader
  skills: string[] // [html,css,scss]
  award: string // []
  from: Date | null // 14-dec-2018
  to?: Date | null // null
  location?: string // Noida
  current?: boolean // true
  active?: boolean // true
  projects?: Project[]
}
export interface Education {
  id?: string
  instituteName: string // kic
  degree: string // BCA
  fieldOfStudy: string
  current?: boolean
  activityAndSocial?: string
  from: string
  to: null | string
  location?: string
  summary?: string
  grade?: string
}

export interface Profile {
  id?: string
  user: string | IUser
  company: string
  designation: string
  gender: string
  dob: string
  summary: string
  hobbies: string[]
  website: string
  resume?: string
  address: string
  qualification: string
  gitusername: string
  totalExp: number
  noticeperiod?: number
  languages: Language[] | null
  skills?: Skill[]
  salary?: number
  employment?: Employment[]
  education?: Education[]
  social: Social
  active: boolean
}
export interface Address {}
