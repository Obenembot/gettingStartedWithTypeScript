import {Repo} from './Repo'
export class User {

    login: string = ''
    fullName: string = ''
    repoCount: number = 0
    followerCount: number = 0
    repos: Repo[] = []

}