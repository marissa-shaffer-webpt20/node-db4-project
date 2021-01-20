const db = require("../data/config")

function find() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("recipes as r")
        .where("r.id", id)
        .innerJoin("steps as s", "r.id", "s.recipe_id")        
        .innerJoin("recipe_ingredients as ri", "ri.step", "s.step_number")
        .innerJoin("ingredients as i")
        .where("i.id", "ri.ingredient_id")
        .select("r.id", "ri.quantity", "i.name")
}

function getInstructions(id) {
    
}

module.exports = {
    find,
    getShoppingList,
    getInstructions,
}