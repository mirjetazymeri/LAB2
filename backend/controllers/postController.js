const Post = require('../models/postModel');

const createPost = async(req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            countInStock: req.body.countInStock,
            brand: req.body.brand
        });

        const postData = await post.save();

        res.status(200).send({success: true, msg: 'Post Data', data:postData});
    } catch(error) {
        res.status(400).send({success: false, msg:error.message});
    }
}

const getPosts = async(req, res) => {
    try{
        const posts = await Post.find({});
        res.status(200).send({success:true, msg:'Posts Data', data:posts});
    } catch(error){
        res.status(400).send({success:false, msg:error.message});
    }
}

const deletePost = async(req, res) => {
    try{
        const id = req.params.id;

        await Post.deleteOne({_id:id});
        res.status(200).send({success: true, msg: 'Post deleted successfully'});
    }
    catch(error) {
        res.status(400).send({success: false, msg: error.message});
    }
}

const updatePost = async (req, res) => {
    try {
      if (req.file !== undefined) {
        var id = req.body.id;
        var title = req.body.title;
        var description = req.body.description;
        var price = req.body.price;
        var countInStock = req.body.countInStock;
        var brand = req.body.brand;
        var filename = req.file.filename;
  
        await post.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              title: title,
              description: description,
              price: price,
              image: filename,
              countInStock: countInStock,
              brand: brand,
            },
          }
        );
        res.status(200).send({ success: true, msg: 'Post updated successfully' });
      } else {
        var id = req.body.id;
        var title = req.body.title;
        var description = req.body.description;
        var price = req.body.price;
        var countInStock = req.body.countInStock;
        var brand = req.body.brand;
        var filename = req.file.filename;
  
        await Post.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              title: title,
              description: description,
              price: price,
              countInStock: countInStock,
              brand: brand,
            },
          }
        );
        res.status(200).send({ success: true, msg: 'Post updated successfully' });
      }
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  };
  

  const getPostByTitle = async (req, res) => {
    try {
      const title = req.params.title;
      const post = await Post.findOne({ title });
      if (post) {
        res.status(200).send({ success: true, msg: 'Post Data', data: post });
      } else {
        res.status(404).send({ success: false, msg: 'Post not found' });
      }
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  };

module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost,
    getPostByTitle
}
