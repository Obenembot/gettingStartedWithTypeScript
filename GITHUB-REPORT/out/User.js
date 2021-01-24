"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse, repos) {
        this.login = '';
        this.fullName = '';
        this.repoCount = 0;
        this.followerCount = 0;
        this.repos = [];
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        // this.repos = repos
    }
    return User;
}());
exports.User = User;
