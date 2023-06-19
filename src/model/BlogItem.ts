export class BlogItem{
    id: string;
    title: string;
    contentAbstract: string;
    date: Date;
    tags: string[];
    category: string;

    constructor(id: string, title: string, contentAbstract: string, date: Date, tags: string[], category: string) {
        this.id = id;
        this.title = title;
        this.contentAbstract = contentAbstract;
        this.date = date;
        this.tags = tags;
        this.category = category;
    }
}