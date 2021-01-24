import * as request from 'request'

export class GitHubApiService {


    getUserInfor(userName: string) {
        // User-Agent header
        let options: any = {
            headers: {
                'User-Agent': 'request'
            }
        }
        request.get('https://api.github.com/users/' + userName, options, (error: any, response: any, body: any) => {

            // console.log(body)
            // console.log(error)
            console.log(response)
        })
    }

    getRepos() {

    }
}