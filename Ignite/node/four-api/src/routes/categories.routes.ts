import { Router } from "express";

import { CategoryRepositoryy } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoryRepositoryy = new CategoryRepositoryy();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    categoryRepositoryy.create({ name, description });
    return response.status(201).send();
});

export { categoriesRoutes };
