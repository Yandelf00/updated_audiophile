type image = {
    mobile:string;
    tablet: string;
    desktop: string;
}

export type productType = {
    id : number;
    slut : string;
    name: string;
    shortName:string;
    image : image;
    cartImage:string;
    category : string;
    categoryImage : image;
    new : boolean;
    price:number;
    description:string;
    features: string;

}