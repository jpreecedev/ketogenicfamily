import { Router } from 'express'

import recipes from './recipes'
import posts from './posts'

const router = Router()

router.use(recipes)
router.use(posts)

export default router
