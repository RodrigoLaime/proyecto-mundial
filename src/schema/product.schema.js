const Joi = require('joi');

/* const id = Joi.string().uuid(); */
const team_1 = Joi.string().max(15);
const goal_team_1 = Joi.number().integer().max(31);
const team_2 = Joi.string().max(15);
const goal_team_2 = Joi.number().integer().max(9);
const phase = Joi.string().max(15);
/* const goal = Joi.number().integer().min(1); */

const createProductSchema = Joi.object({
  team_1: team_1.required(),
  goal_team_1: goal_team_1.required(),
  team_2: team_2.required(),
  goal_team_2: goal_team_2.required(),
  phase: phase.required()
})

module.exports = createProductSchema; 