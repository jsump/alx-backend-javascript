import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arraySizeOfRooms = [19, 20, 34];
  const arrayOfRooms = arraySizeOfRooms.map((size) => new ClassRoom(size));

  return arrayOfRooms;
}
