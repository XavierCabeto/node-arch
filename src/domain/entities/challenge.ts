import { Entity } from "../../core/domain/Entity";

type ChallengeType = {
  title: string;
  instructionURL: string;
  
}

export class Challenge extends Entity<ChallengeType> {
  private constructor(props: ChallengeType, id?: string) {
    super(props, id);
  }

  static create(props: ChallengeType, id?: string) {
    const challenge = new Challenge(props, id);

    return challenge;
  }
}