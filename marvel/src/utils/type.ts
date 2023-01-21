export interface ICharacter {
    thumbnail: { extension: string, path: string }
    name: string
    description: string
}
export interface ICharacterCard {
    thumbnail: string
    description: string
    name: string,
    onClick?: any
}
export interface Idata {
    data: { results: ICharacter[] }
}