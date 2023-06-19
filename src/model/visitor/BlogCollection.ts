
class BlogCollection{
    id : string;
    title : string;
    cover: string;
    createDate : string;

    constructor(id: string, title: string, cover: string, createDate: string) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.createDate = createDate;
    }
}

export default BlogCollection;