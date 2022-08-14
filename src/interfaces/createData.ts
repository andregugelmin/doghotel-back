import { Dog, Host, Hosting, Photo, User, Request } from '@prisma/client';

export type CreateUserData = Omit<User, 'id' | 'isHost' | 'photoUrl' | 'city' | 'address'>;
export type CreateDogData = Omit<Dog, 'id'>;
export type CreateHostData = Omit<Host, 'id'>;
export type CreateHostingData = Omit<Hosting, 'id'>;
export type CreateRequestData = Omit<Request, 'id' | 'isActive' | 'isAccepted'>;
export type CreatePhotoData = Omit<Photo, 'id'>;
