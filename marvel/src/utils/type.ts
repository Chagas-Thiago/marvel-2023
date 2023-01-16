export interface ICharacter {
    thumbnail: { extension: string, path: string }
    name: string
    description: string
    id: number
}
export interface ICharacterCard {
    thumbnail: string
    description: string
    name: string,
    onClick?: any
    id: number
}
export interface Idata {
    data: { results: ICharacter[] } | undefined
}
export interface IComics {
    title: string
    images: [{ extension: string, path: string }]
    description: string
}
export interface IDataComics {
    data: { results: IComics[] }
}