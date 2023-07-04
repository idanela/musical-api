import { Request, Response } from "express";
import Singer from '../../models/Singer'
import { requestWithSinger, singer } from "../../types";

const getAllSingers =async (req:Request,res:Response) => {
    try {
        const allSingers = await Singer.find();
        res.status(200).json(allSingers);
    } catch (error) {
        res.status(500).json({error});
    }
}

const getSingleSinger = async (req:requestWithSinger,res:Response) => {
    try {
        // const allSingers = await Singer.findById(req.params.id);
        res.status(200).json(req!.singerFromRequest);
    } catch (error) {
        res.status(500).json({error});
    }
}

const addSinger = async(req:Request,res:Response)=>
{
    const newSinger = new Singer({
        name:req.body.name,
        genre:req.body.genre
    })

    try {
        const singerToSave = await newSinger.save()
        res.json(singerToSave);
    } catch (error) {
        res.status(500).json({error})
    }
}

const deleteSinger = async(req:requestWithSinger,res:Response)=>
{
    try {
        const singer = req.singerFromRequest as singer;
        await singer!.deleteOne!();
        //await Singer.findByIdAndDelete(req.params.id);
        res.status(202).json("singer deleted")
    } catch (error) {
        res.status(500).json({error})
    }
}

const updateSinger = async(req:requestWithSinger, res:Response)=>
{
    //const singer = await Singer.findById(req.params.id) as singer;
    const singer = req.singerFromRequest;
    const name = req.body.name;
    const genre = req.body.genre;

    if(name)
    {
        singer!.name=name
    }
    if(genre)
    {
        singer!.genre = genre;
    }
    try {
        await singer!.save!();
        res.json(`Player with name ${name} was updated`);
    } catch (error) {
        res.status(500).json({error})
    }

}

export{getAllSingers,getSingleSinger,addSinger,deleteSinger,updateSinger}