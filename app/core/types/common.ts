import { Insertable, Selectable, Updateable } from 'kysely'
import { Beneficiaries, Gifts, Reservations, Users } from '#types/db'

export type Beneficiary = Selectable<Beneficiaries>
export type NewBeneficiary = Insertable<Beneficiaries>
export type UpdateBeneficiary = Updateable<Beneficiaries>

export type Gift = Selectable<Gifts>
export type NewGift = Insertable<Gifts>
export type UpdateGift = Updateable<Gifts>

export type Reservation = Selectable<Reservations>
export type NewReservation = Insertable<Reservations>
export type UpdateReservation = Updateable<Reservations>

export type User = Selectable<Users>
