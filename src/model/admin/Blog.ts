class Blog{
    id: string;
    title: string;
    content: string;
    date: string;
    lastModifiedTime: string;
    tags: string[];
    category: string;
    viewCount: number;
    status: string;
    visibility: string;

    constructor(id: string, title: string, content: string, date: string, lastModifiedTime: string, tags: string[], category: string, viewCount: number, status: string, visibility: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.lastModifiedTime = lastModifiedTime;
        this.tags = tags;
        this.category = category;
        this.viewCount = viewCount;
        this.status = status;
        this.visibility = visibility;
    }
}

export default Blog;