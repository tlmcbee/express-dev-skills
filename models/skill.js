const skills = [
  {id: 123, skill: 'Javascript', level: 4},
  {id: 456, skill: 'HTML', level: 7},
  {id: 789, skill: 'CSS', level: 7},
  {id: 1011, skill: 'Node.js', level: 2},
  {id: 1213, skill: 'Express', level: 2},
]

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id){
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}