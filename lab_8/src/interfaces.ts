export interface ICartGood extends IGood {
    amount: number;
}

export interface IGood {
    id: number;
    title: string;
    price: number;
    sale: boolean;
    img: string;
    hoverImg?: string;
    category: string;
}

export interface ICategories {
    id: number;
    title: string;
}