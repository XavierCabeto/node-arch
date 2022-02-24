import { Submission } from "../../domain/entities/submission";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

class CreateChallengeSubmission {
  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const submission = Submission.create({
      studentId, 
      challengeId
    });

    return submission;
  }
}