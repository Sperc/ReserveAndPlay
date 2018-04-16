import {CityModel} from './city.model';
import {BookingModel} from './booking.model';

export interface PlaygroundModel {
  id: number;
  name: string;
  streetName: string;
  streetNumber: string;
  longitude: number;
  latitude: number;
  description: string;
  category: string;
  startHour: number;
  startMinutes: number;
  endHour: number;
  endMinutes: number;
  phoneNumber: number;
  city: CityModel;
  bookingSet: BookingModel[];
}
