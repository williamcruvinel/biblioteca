import { httpError } from "../errors/HttpError";
import { ICreateReservation, IUpdateReservation } from "../interfaces/IReservations";
import { ReservationRepository } from "../repositories/ReservationsRepository";

export class ReservationService{
  constructor(private readonly reservationRepository: ReservationRepository){}

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
}