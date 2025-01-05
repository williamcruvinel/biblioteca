import { Router } from "express";
import { authorController, bookController, reservationController, userController } from "./container";

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

router.get("/authors", authorController.index)
router.get("/authors/:id", authorController.show)
router.post("/authors", authorController.create)
router.put("/authors/:id", authorController.update)
router.delete("/authors/:id", authorController.delete)

router.get("/reservations", reservationController.index)
router.get("/reservations/:id", reservationController.show)
router.post("/reservations", reservationController.create)
router.put("/reservations/:id", reservationController.update)
router.delete("/reservations/:id", reservationController.delete)

//rota de teste
router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "Tudo certo!" });
  } catch (error) {
    next(error);
  }
});

export { router }