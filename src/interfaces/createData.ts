import { Dog, Host, Hosting, Photo, User } from '@prisma/client';

export type CreateUserData = Omit<User, 'id' | 'isHost'>;
export type CreateDogData = Omit<Dog, 'id'>;
export type CreateHostData = Omit<Host, 'id'>;
export type CreateHostingData = Omit<Hosting, 'id'>;
export type CreateRequestData = Omit<Request, 'id'>;
export type CreatePhotoData = Omit<Photo, 'id'>;
