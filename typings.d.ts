interface Message {
    text: string;
    createdAt: admin.firestore.Timestmap;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}