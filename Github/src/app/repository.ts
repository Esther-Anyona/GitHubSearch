export class Repository {
    // properties for repositories
    constructor(
        public name: string,
        public html_url: string,
        public description: string,
        public forks: number,
        public created_at: Date,
        public languages_url: string,

    ){}
}
