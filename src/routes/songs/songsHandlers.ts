import { Request, Response } from "express";
import Song from "../../models/Song";
import { requestWithSong } from "../../types";
const getAllSongs =async (req:Request,res:Response) => {
    try {
        const allSongs = await Song.find();
        res.json(allSongs);
    } catch (error) {
        res.status(500).json({error})
    }
}
const getSingleSong =async (req:requestWithSong,res:Response) => {
    try {
        const song = req.songFromRequest;
        console.log(song)
        res.json(song);
    } catch (error) {
        res.status(500).json({error})
    }
}

const addSong = async (req:Request,res:Response)=>
{
    const newSong = new Song({
        name:req.body.name,
        views:req.body.views,
        singer:req.body.singer
    })

    try {
        const SongToSave = await newSong.save();
        res.json(SongToSave);
    } catch (error) {
        res.status(500).json({error})
    }
}

const deleteSong =async (req:requestWithSong,res:Response) => {
    const song =req.songFromRequest;
    try {
        await song!.deleteOne!();
        res.json("Record was deleted");
    } catch (error) {
        res.status(500).json({error});
    }
}

const updateSong = async (req:requestWithSong,res:Response) => {
    const song = req.songFromRequest;
    const name = req.body.name;
    const views = req.body.views;
    const singer = req.body.singer;
    song!.name = name?name:song!.name;
    song!.views = views?views:song!.views;
    song!.singer = singer?singer:song!.singer;
    try {
        await song!.save!();
        res.json(song);
    } catch (error) {
        res.status(500).json({error});
    }

}
export{getAllSongs,getSingleSong,addSong,deleteSong,updateSong}