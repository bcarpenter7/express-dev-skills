const skills = [
    {id: 125223, skill: 'HTML'},
    {id: 127904, skill: 'CSS'},
    {id: 139608, skill: 'Javascript'}
]

module.exports ={
getAll,
getOne, 
create,
deleteOne,
}

function getAll() {
    return skills
}

function getOne(id) {
    let cur = parseInt(id)
    return skills.find(skill => skill.id === cur)
  }

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

function deleteOne(id){
    id = parseInt(id)
    //Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

