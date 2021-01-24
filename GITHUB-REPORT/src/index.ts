import { GitHubApiService } from './GitHubAPIService'
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash'

let service = new GitHubApiService()


var repoArray: Repo[] = []

// service.getRepos('Obenembot', (repos: Repo[]) => {
//     repoArray = repos
//     console.log(repos)
// })

// service.getUserInfor('Obenembot', (user: User) => {
//     //this.user = user
//      console.log(user)
// })

// Passing username as command line argument
if(process.argv.length < 3){
    console.log('Please pass the username as an argument')
}else {
    let username = process.argv[2]
service.getUserInfor(username, (user: User) => {
    //this.user = user
    service.getRepos(username, (repos: Repo[]) => {
        // Remember to use lodash to sort array
        // TO change to decending order repo.size * -1
        let sortRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1])
        // Filter Array
        let filter = _.take(sortRepos,5)
        user.repos = filter
        // console.log(repos)
        console.log(user)
    })

})
}


