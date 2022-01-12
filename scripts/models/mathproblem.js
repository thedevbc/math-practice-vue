export class MathProblem {
    operand1 = 0;
    operand2 = 0;
    operator = '+';
    correctAnswer = 0;

    constructor() {
        this.operator = this.generateOperator();
        let operands;
        if (this.operator == '+' || this.operator == '-') {
            operands = this.generateOperandsForAddSubtract();
        } else {
            operands = this.generateOperandsForMultiplication();
        }
        this.operand1 = operands[0];
        this.operand2 = operands[1];

        this.correctAnswer = this.calculateAnswer();
    }

    generateOperandsForAddSubtract = () => {
        let nbr1 = Math.floor((Math.random() * 899) + 100);
        let nbr2 = Math.floor((Math.random() * 899) + 100);
        return [nbr1, nbr2].sort((a, b) => b - a);
    }

    generateOperandsForMultiplication = () => {
        let nbr1 = Math.floor(Math.random() * 13);
        let nbr2 = Math.floor(Math.random() * 13);
        return [nbr1, nbr2];
    }

    generateOperator = () => {
        let operatorNbr = Math.floor(Math.random() * 3);
        let operator = "";
        if (operatorNbr == 0) {
            operator = "+";
        }
        if (operatorNbr == 1) {
            operator = "-";
        }
        if (operatorNbr == 2) {
            operator = 'x';
        }
        return operator;
    }

    checkAnswer(userProvidedAnswer) {
        return +userProvidedAnswer == this.correctAnswer;
    }

    calculateAnswer() {
        if (this.operator == '+') {
            return this.operand1 + this.operand2;
        }

        if (this.operator == '-') {
            return this.operand1 - this.operand2;
        }

        if (this.operator == 'x') {
            return this.operand1 * this.operand2;
        }
    }
}