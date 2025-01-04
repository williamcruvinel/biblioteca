import { Router } from "express";
import { userController } from "./container";

const router = Router()

router.get("/users", userController.index)
router.get("/users/:id", userController.show)
router.post("/users", userController.create)
router.put("/users/:id", userController.update)
router.delete("/users/:id", userController.delete)


//rota de teste
router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "Tudo certo!" });
  } catch (error) {
    next(error);
  }
});

export { router }