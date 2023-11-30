const skills = [
  {id: 123456, skill: 'Javascript', level: 4},
  {id: 456789, skill: 'HTML', level: 7},
  {id: 789554, skill: 'CSS', level: 7},
  {id: 101135, skill: 'Node.js', level: 2},
  {id: 121367, skill: 'Express', level: 2},
]

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id){
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}

function create(skill) {
  skill.id = Date.now() % 1000000
  skills.push(skill)
}

function deleteOne(id) {
  id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id)
  skills.splice(idx, 1)
}