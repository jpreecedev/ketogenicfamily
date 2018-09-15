import { Router } from 'express'
import { getConfig } from './fileReader'
import { addNutritionalInformation } from './nutrition'

const router = Router()

router.get('/overview', function (req, res, next) {
  res.json(getConfig(`recipes/overview.json`))
})

router.get('/recipes/:name', function (req, res, next) {
  let recipe = getConfig(`recipes/${req.params.name}.json`)
  addNutritionalInformation(recipe)

  if (recipe.related) {
    let relatedRecipes = []

    recipe.related.forEach(r => {
      relatedRecipes.push(getConfig(`recipes/${r}.json`))
    })

    recipe.related = relatedRecipes
  }

  if (recipe) {
    res.json(recipe)
  } else {
    res.sendStatus(404)
  }
})

export default router
