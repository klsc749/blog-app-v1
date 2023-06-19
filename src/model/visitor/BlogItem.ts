export class BlogItem{
    id: string;
    title: string;
    contentAbstract: string;
    date: string;
    lastModifiedTime: string;
    tags: string[];
    category: string;
    viewCount: number;

    constructor(id: string, title: string, contentAbstract: string, date: string, lastModifiedTime: string, tags: string[], category: string, viewCount: number) {
        this.id = id;
        this.title = title;
        this.contentAbstract = contentAbstract;
        this.date = date;
        this.lastModifiedTime = lastModifiedTime;
        this.tags = tags;
        this.category = category;
        this.viewCount = viewCount;
    }
}