export type Flight = {
  id: number;
  flightNumber: string;
  airline: string;
  departure: FlightDetails;
  arrival: FlightDetails;
  duration: string;
  status: string;
  fare: number;
};

type FlightDetails = {
  airport: string;
  short: string;
  time: string;
  gate: string;
  terminal: string;
};
