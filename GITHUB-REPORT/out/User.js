"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this.login = '';
        this.fullName = '';
        this.repoCount = 0;
        this.followerCount = 0;
        this.repos = [];
    }
    return User;
}());
exports.User = User;