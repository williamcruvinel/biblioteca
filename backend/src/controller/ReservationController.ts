import { Handler } from "express";
import { ReservationService } from "../service/ReservationServise";
import { CreateReservationShemas, UpdateReservationShemas } from "../Schema/ReservationSchema";

export class ReservationController{
  constructor(private readonly reservationService: ReservationService){}

  index: Handler = async (req, res, next) => {
    try {
      const reservations = await this.reservationService.getReservation()
      res.json(reservations)
    }
    catch (error) {
      next(error)  
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateReservationShemas.parse(req.body)
      const newReservation = await this.reservationService.createReservaation(body)
      res.json(newReservation)
    } catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
    try {
      const reservation = await this.reservationService.getReservationById(+req.params.id)
      res.json(reservation)
    } catch (error) {
      next(error)
    }
  }

  update: Handler = async (req, res, next) => {
    try {
      const reservationId = +req.params.id
      const body = UpdateReservationShemas.parse(req.body)
      const updateReservation = await this.reservationService.updateReservation(reservationId, body)
      res.json(updateReservation)
    } catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const reservationId = +req.params.id
      const deleteReservation = await this.reservationService.deleteReservation(reservationId)
      res.json({deleteReservation})
    } catch (error) {
      next(error)
    }
  }

  addBooks: Handler = async ( req, res, next) => {
    try {
      const reservationId = +req.params.reservationId
      const bookId = +req.params.bookId
      const reservationWithBook = await this.reservationService.addBookToReservation(bookId, reservationId)
      
      res.json(reservationWithBook)
    } catch (error) {
      next(error)
    }
  }

  removeBooks: Handler = async ( req, res, next) => {
    try {
      const reservationId = +req.params.reservationId
      const bookId = +req.params.bookId
      const reservationWithBook = await this.reservationService.removeBookToReservation(bookId, reservationId)
      
      res.json(reservationWithBook)
    } catch (error) {
      next(error)
    }
  }
}