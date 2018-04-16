import {BookingModel} from './booking.model';
import {PictureModel} from './picture.model';

export interface PlayerModel {
  bookingList: BookingModel[];
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  birthDay: string;
  phoneNumber: string;
  picture: PictureModel;
}

