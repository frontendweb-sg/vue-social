export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'default' | 'gray'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export enum Gender {
  male = 'Male',
  female = 'Female',
  unknown = 'Unknown'
}
export enum Proficiency {
  beginer = 'Beginer',
  intermediate = 'Intermediate',
  expert = 'expert'
}

export interface LoginRequest {
  email: string
  password: string
}
export interface LoginResponse {
  user: IUser
  accessToken: string
  expireIn: number
}

export interface Signup {
  name: string
  email: string
  password: string
  mobile: string
}
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
  name: string
  email: string
  password: string
  mobile: string
  avatar: Media
  role: string
  active: string
  emailVerify: boolean
  accessToken: string
}
interface Auth {
  loading: boolean
  user: IUser | null
  token: string
  avatar?: string
  redirectedUrl: string
}
interface AuthResponse {
  user: IUser | null
  accessToken: string
  expireIn: number
}
