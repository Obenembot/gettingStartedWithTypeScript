"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubAPIService_1 = require("./GitHubAPIService");
var _ = __importStar(require("lodash"));
var service = new GitHubAPIService_1.GitHubApiService();
var repoArray = [];
// service.getRepos('Obenembot', (repos: Repo[]) => {
//     repoArray = repos
//     console.log(repos)
// })
// service.getUserInfor('Obenembot', (user: User) => {
//     //this.user = user
//      console.log(user)
// })
// Passing username as command line argument
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument');
}
else {
    var username_1 = process.argv[2];
    service.getUserInfor(username_1, function (user) {
        //this.user = user
        service.getRepos(username_1, function (repos) {
            // Remember to use lodash to sort array
            // TO change to decending order repo.size * -1
            var sortRepos = _.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            // Filter Array
            var filter = _.take(sortRepos, 5);
            user.repos = filter;
            // console.log(repos)
            console.log(user);
        });
    });
}
