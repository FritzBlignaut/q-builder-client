import { ControlType, Question } from '../shared/models/question';

export const QUESTIONS: Question[] = [
    {
        id: '1',
        questionText: 'What is your name?',
        subText: 'Please enter your full name',
        controlType: ControlType.Textbox,
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50
        }
    },
    {
        id: '2',
        questionText: 'What is your age?',
        subText: 'Please enter your age',
        controlType: ControlType.Textbox,
        validation: {
            required: true,
            minLength: 1,
            maxLength: 3
        }
    }
];