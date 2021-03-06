export class User {
    // User profile properties
    constructor(
        public login: string,
        public name: string,
        public avatar_url: string,
        public id: number,
        public html_url: string,
        public public_repos: number,
        public followers: number,
        public following: number,
        public created_at: Date
    ){}
}
