import { Router } from "express";
import { bookController, userController } from "./container";

const router = Router()

router.get("/users", userController.index)
router.get("/users/:id", userController.show)
router.post("/users", userController.create)
router.put("/users/:id", userController.update)
router.delete("/users/:id", userController.delete)

router.get("/books", bookController.index)
router.get("/books/:id", bookController.show)
router.post("/books", bookController.create)
router.put("/books/:id", bookController.update)
router.delete("/books/:id", bookController.delete)


//rota de teste
router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "Tudo certo!" });
  } catch (error) {
    next(error);
  }
});

export { router }