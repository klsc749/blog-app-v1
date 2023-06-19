class Project{
    id: string;
    name: string;
    description: string;
    url: string;
    imageURL: string;

    constructor(id: string, name: string, description: string, url: string, imageURL: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.imageURL = imageURL;
    }
}

export default Project;