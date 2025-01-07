import { httpError } from "../errors/HttpError";
import { ICreateReservation, IUpdateReservation } from "../interfaces/IReservations";
import { BookRepository } from "../repositories/BookRepository";
import { ReservationRepository } from "../repositories/ReservationsRepository";

export class ReservationService{
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly bookRepository: BookRepository
  ){}

  async getReservation(){
    const reservations = await this.reservationRepository.find()
    return reservations
  }

  async getReservationById(reservationId: number){
    const reservation = await this.reservationRepository.findById(reservationId)
    return reservation
  }

  async createReservaation(params: ICreateReservation){

    const newReservation = await this.reservationRepository.create(params)
    return(newReservation)
  }

  async updateReservation(reservationId: number, params: Partial<IUpdateReservation>){
    const reservationExists = await this.reservationRepository.findById(reservationId)
    if(!reservationExists) throw new httpError(404, "Falha na atualização, reserva não encontrada")
    const updateReservation = await this.reservationRepository.updateById(reservationId, params)
    return updateReservation
  }

  async deleteReservation(reservationId: number){
    const reservationExists = await this.reservationRepository.findById(reservationId)
    if(!reservationExists) throw new httpError(404, "Falha na deletar, reserva não encontrada")
    const deleteReservation = await this.reservationRepository.deleteById(reservationId) 
    return deleteReservation
  }

  async addBookToReservation(bookId: number, reservationId: number){
    const reservationExists = await this.reservationRepository.findById(reservationId)
    if(!reservationExists) throw new httpError(404, "Falha, reserva não encontrada")
    const bookExists = await this.bookRepository.findById(bookId)
    if(!bookExists) throw new httpError(404, "Falha, Livro não encontrada")

    const reservationWithBook = await this.reservationRepository.addBook(bookId, reservationId)
    return reservationWithBook
  }

  async removeBookToReservation(bookId: number, reservationId: number){
    const reservationExists = await this.reservationRepository.findById(reservationId)
    if(!reservationExists) throw new httpError(404, "Falha, reserva não encontrada")
    const bookExists = await this.bookRepository.findById(bookId)
    if(!bookExists) throw new httpError(404, "Falha, Livro não encontrada")

    const reservationWithBook = await this.reservationRepository.removeBook(bookId, reservationId)
    return reservationWithBook
  }
}