module.exports = {
    index,
    show,
    create,
    new: newSkill, 
    delete : deleteSkill
}

const Skill = require('../models/skill')


// Index

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Skill Details'
    })
}

// Show 
function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'All skills'
    })
}

// Create

function create(req, res){
    console.log(req.body)
    // Models are responsible for CRUDing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
}

// Delete

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

// New

function newSkill(req, res){
    res.render('skills/new', {
        title: 'New Skill'
    })
}