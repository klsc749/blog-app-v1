
export class Blog{
    id: string;
    title: string;
    content: string;
    date: Date;
    lastModifiedTime: Date;
    tags: string[];
    category: string;
    viewCount: number;

    constructor(id: string, title: string, content: string, date: Date, lastModifiedTime: Date, tags: string[], category: string, viewCount: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.lastModifiedTime = lastModifiedTime;
        this.tags = tags;
        this.viewCount = viewCount;
        this.category = category;
    }
}