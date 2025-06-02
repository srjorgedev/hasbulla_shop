export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string[];
    stockQuantity: number;
    imageUrl: string;
    colors: string[];
    sizes: string[];
}