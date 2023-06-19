export class Blog{
    private _id : string;
    private _title : string;
    private _content : string;
    private _date : Date;
    private _lastModifiedDate: Date;
    private _tags : string[];
    private _category : string;
    private _views : number;

    constructor(id: string, title: string, content: string, date: Date, lastModifiedDate: Date, tags: string[], category: string, views: number) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._date = date;
        this._lastModifiedDate = lastModifiedDate;
        this._tags = tags;
        this._category = category;
        this._views = views;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get lastModifiedDate(): Date {
        return this._lastModifiedDate;
    }

    set lastModifiedDate(value: Date) {
        this._lastModifiedDate = value;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(value: string[]) {
        this._tags = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get views(): number {
        return this._views;
    }

    set views(value: number) {
        this._views = value;
    }
}