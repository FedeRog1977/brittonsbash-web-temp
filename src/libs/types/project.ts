export type Project = {
  id: string;
  name: string;
  distance: number;
  elevation: number;
  time: string;
  companionship: number;
  islands?: string[];
  munros?: string[];
  munroTops?: string[];
  corbetts?: string[];
  corbettTops?: string[];
  grahams?: string[];
  subTwos?: string[];
  donalds?: string[];
};
