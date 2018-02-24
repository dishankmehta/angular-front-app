export class Screen {
  id: number;
  screenTitle: string;
  screenData: string;

  constructor(id: number, screenTitle: string, screenData: string){
    this.id = id;
    this.screenTitle = screenTitle;
    this.screenData = screenData;
  }
}
