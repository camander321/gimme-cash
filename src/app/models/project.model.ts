export class Project {
  name: string;
  description: string;
  fundGoal: number;
  founders: string[];
  donations: Donation[];
  rewards: string[];
  type: string;
  owner:string;

  constructor(name:string, desc:string, goal:number, type:string, owner:string) {
    this.name = name;
    this.description = desc;
    this.fundGoal = goal;
    this.type = type
    this.owner = owner;
  }
}

export class Donation {
  constructor(public user:string, public amount:number){}
}
