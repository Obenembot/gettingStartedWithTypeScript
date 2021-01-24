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
exports.GitHubApiService = void 0;
var request = __importStar(require("request"));
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfor = function (userName) {
        // User-Agent header
        var options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get('https://api.github.com/users/' + userName, options, function (error, response, body) {
            // console.log(response)
            // console.log(error)
            console.log(response);
        });
    };
    GitHubApiService.prototype.getRepos = function () {
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
