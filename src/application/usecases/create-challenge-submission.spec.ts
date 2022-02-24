import { InMemoryChallengesRepository } from '../../../tests/repositories/in-memory-challenges-repositiry';
import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-students-repositiry';
import { Challenge } from '../../domain/entities/challenge';
import { Student } from '../../domain/entities/student';
import { CreateChallengeSubmission } from './create-challenge-submission';

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: 'Xavier',
      email: 'xavier@exemple.com',
    });

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionURL: 'http://exemple.com',
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);
    
    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id
    });

    expect(response).toBeTruthy();
  });
});