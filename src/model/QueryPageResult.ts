
export class QueryPageResult<T>{
    data: T[];
    currentPage: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;

    constructor(data: T[], currentPage: number, pageSize: number, totalElements: number, totalPages: number) {
        this.data = data;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }
}