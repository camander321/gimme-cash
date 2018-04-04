export class Project {
  name: string;
  description: string;
  fundGoal: number;
  founders: string[];
  donations: Donation[];
  rewards: string[];
  type: string;

  constructor(name:string, desc:string, goal:number, type:string) {
    this.name = name;
    this.description = desc;
    this.fundGoal = goal;
    this.type = type
  }
}

export class Donation {
  constructor(public user:string, public amount:number){}
}
