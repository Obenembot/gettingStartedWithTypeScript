import * as request from 'request'
import { User } from './User';
import { Repo } from './Repo';

// User-Agent header
const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },  //DO this or the JSON.parse(body)
    json: true
}
export class GitHubApiService {

    // THe below method is asych 
    // create a signature in the second parameter
    getUserInfor(userName: string, cb: (user: User) => any) {

        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {

            // console.log(body)// console.log(error) //console.log(body) // let user = new User(JSON.parse(body))

            let user = new User(body)
            // console.log(user)
            cb(user)
        })
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repoArray = body;
            repoArray = repoArray.map((repo: any) => new Repo(repo))
            cb(repoArray)
        })
    }
}