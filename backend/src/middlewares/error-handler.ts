import { ErrorRequestHandler } from "express";
import { httpError } from "../errors/HttpError";


export const _errorHandler: ErrorRequestHandler = (error, req, res, nest) => {
  if (error instanceof httpError) {
    res.status(error.status).json({message: error.message})
  }
  else if (error instanceof Error) {
    res.status(500).json({message: error.message})
  }
  else {
    res.status(500).json({ message: "Erro desconhecido no servidor!" })
  }
}
