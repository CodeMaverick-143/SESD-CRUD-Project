class Pagination {
    public page: number;
    public limit: number;
    public skip: number;

    constructor(query: any) {
        this.page = Number(query.page) || 1;
        this.limit = Number(query.limit) || 10;
        this.skip = (this.page - 1) * this.limit;
    }
}

export { Pagination };
