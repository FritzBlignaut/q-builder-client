export interface Question {
    id: string;
    questionText: string;
    subText: string;
    controlType: ControlType;
    validation: Validation;
}

export enum ControlType {
    Textbox = 'text',
    Radiobox = 'radio',
    Checkbox = 'checkbox',
    Selectbox = 'select'
}

interface Validation {
    required: boolean;
    minLength?: number;
    maxLength?: number;
}

// Example of a Question object
// const question: Question = {
//     id: '1',
//     questionText: 'What is your name?',
//     subText: 'Please enter your full name',
//     controlType: ControlType.Textbox,
//     validation: {
//         required: true,
//         minLength: 3,
//         maxLength: 50
//     }
// };