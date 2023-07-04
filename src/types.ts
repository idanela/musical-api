import { Request } from "express"

type singer =
{
    name:string,
    genre:string,
    deleteOne?:Function
    save?:Function
}

type song =
{
    views:number,
    name:string,
    singer:singer
    deleteOne?:Function
    save?:Function
}

export interface requestWithSong  extends Request
{
    songFromRequest?:song

}
export interface requestWithSinger extends Request
{
    singerFromRequest?:singer
}

export{singer,song}