import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Beneficiaries {
  created_at: Timestamp;
  enabled: Generated<boolean>;
  id: Generated<string>;
  name: string;
  updated_at: Timestamp;
}

export interface Gifts {
  beneficiary_id: string;
  created_at: Timestamp;
  description: string | null;
  id: Generated<string>;
  image: string;
  link: string | null;
  name: string;
  price: string;
  updated_at: Timestamp;
}

export interface Reservations {
  created_at: Timestamp;
  gift_id: string;
  id: Generated<string>;
  reserved_by: string;
  updated_at: Timestamp;
}

export interface Users {
  created_at: Timestamp;
  email: string;
  id: Generated<string>;
  password: string;
  updated_at: Timestamp;
}

export interface DB {
  beneficiaries: Beneficiaries;
  gifts: Gifts;
  reservations: Reservations;
  users: Users;
}
