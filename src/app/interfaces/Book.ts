export interface IBook {
    BookId: string;
    BookName: string;      // Tensach
    Price: number;         // Giaban
    Description: string;   // Mota
    Image: string;         // Anhbia
    UpdateDate: string;    // Ngaycapnhat
    Quantity: number;      // Soluongton
    TopicId: string;       // MaCD
    PublisherId: string;   // MaNXB
}

export class Book {
    constructor(
        public BookId: string = "",
        public BookName: string = "",
        public Price: number = 0,
        public Description: string = "",
        public Image: string = "",
        public UpdateDate: string = "",
        public Quantity: number = 0,
        public TopicId: string = "",
        public PublisherId: string = ""
    ) { }
}
