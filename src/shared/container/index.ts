import { container } from "tsyringe";
import { ICategoriesRepository } from "../../module/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../module/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../module/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../module/cars/repositories/ISpecificationsRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", 
    SpecificationsRepository
)