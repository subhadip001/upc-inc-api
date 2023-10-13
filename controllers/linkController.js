const asyncHandler = require("express-async-handler");
const Link = require("../models/LinkModel");


const getAllLinks = asyncHandler(async (req, res) => {
    const links = await Link.find({});
    if (!links) {
      return res.json({
        message: "no links found yet",
      });
    } else {
      res.json({ links: links });
      console.log(links);
    }
  });

  const createNewLink = asyncHandler(async (req, res) => {
    console.log(req.body);
  
    const { link } = await req.body;
  
    const linkObject = link;
  
    const newLink = await Link.create(linkObject);
  
    if (newLink) {
      res.status(201).json({ message: `new link added` });
    } else {
      res.status(400).json({ message: `Invalid link data received` });
    }
  });

  const deleteLink = asyncHandler(async (req, res) => {
    const { id } = await req.query;
    console.log(id)
    try {
      await Link.findOneAndRemove({ _id:id });
      res.json({ message: "Link deleted Successfully!" });
    } catch (err) {
      res.json({ message: err });
    }
  });
  const deleteAll=asyncHandler(async(req,res)=>{
    try{
      await Link.deleteMany({})
      res.json({message:"All links deleted successfully!"})
    }catch(err){
      res.json({message:err})
    }
  })

  const testController = (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "This is a link controller updated 1"
    });
  };

  module.exports={
    createNewLink,
    deleteLink,
    getAllLinks,
    testController,
    deleteAll
  }