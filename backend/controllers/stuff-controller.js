const Thing= require('../models/Thing');


exports.createThing = (req,res, next) =>{
    delete req.body._id;
    console.log('je suis la biim')
    const thing  = new Thing({
        ...req.body
    });
    thing.save(thing)
    .then(()=>{ res.status(201).json({message : 'Objec created'})})
    .catch(error => res.status(400).json({error : 'Bim'}))
}

exports.modifyThing =(req, res, next) => {
    console.log('put');
    Thing.updateOne(
        {_id : req.params.id},{...req.body, _id : req.params.id})
        .then(() => res.status(200).json({message : 'Obj ok'}))
        .catch(() => console.log('jqhsjqhdh'))
}

exports.getThings= (req, res, next) => {
    Thing.find().
    then((things) => res.status(200).json(things))
    .catch((error) => {res.status(400).json(eroor)});
}