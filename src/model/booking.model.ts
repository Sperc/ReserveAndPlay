import {PlaygroundModel} from './playground.model';
import {PlayerModel} from './player.model';

export interface BookingModel {
  playground: PlaygroundModel;
  players: PlayerModel[];
  id: number;
  date: string;
  endDate: string;
  startOrderHour: number;
  startOrderMinutes: number;
  endOrderHour: number;
  endOrderMinutes: number;
  maxNumberOfPlayer: number;
  available: boolean;
  leaderName: string;
}
