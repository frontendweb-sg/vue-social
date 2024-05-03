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
