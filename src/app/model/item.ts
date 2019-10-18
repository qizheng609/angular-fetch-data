export class Item {
    public userId: string;
    public id: string;
    public title: string;
    public body: string;

    constructor(userId: string, id: string, title: string, body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}
