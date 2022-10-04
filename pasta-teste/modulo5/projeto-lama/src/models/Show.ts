export interface IShowDB {
    id: string;
    band: string;
    starts_at: Date,
     tikets: number
}

export class Show {
  constructor(
    private id: string,
    private band: string,
    private startsAt: Date,
    private tikets: number
  ) {}

  public getId = () => {
    return this.id;
  };

  public getBand = () => {
    return this.band;
  };

  public getStartsAt = () => {
    return this.startsAt;
  };

  public getTikets = () => {
    return this.tikets;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setBand = (newBand: string) => {
    this.band = newBand;
  };

  public setStartAt = (newStartAt: Date) => {
    this.startsAt = newStartAt;
  };

  public setTikets = (newTikets: number) => {
    this.tikets = newTikets;
  };
}

export interface ISubsbandInputDTO {
    band:string, 
    startsAt:Date 
    
}


export interface ISubsbanpOutputDTO {
    message: string;
    token: string;
  }