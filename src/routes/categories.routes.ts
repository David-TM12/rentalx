import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../module/cars/useCases/createCategory"; 
import { listCategoriesController } from "../module/cars/useCases/listCategories";
import { importCategoryController } from "../module/cars/useCases/importCategory";


const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) =>{
    return listCategoriesController.handle(request,response);   
})


categoriesRoutes.post("/import", upload.single("file"),(request, response) => {
   
    return importCategoryController.handle(request, response);
})

export { categoriesRoutes };