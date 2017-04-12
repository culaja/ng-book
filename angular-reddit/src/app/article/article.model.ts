export class Article {
    title: string;
    link: string;
    private votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }

    getVotes() {
        return this.votes;
    }
}