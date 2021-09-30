import { container } from "tsyringe";
import { ICategoriesRepository } from "../../module/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../module/cars/repositories/implementations/CategoriesRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);