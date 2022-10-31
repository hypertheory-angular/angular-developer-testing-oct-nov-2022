describe('Basic Unit Testing With Angular', () => {
        it('Can add two numbers', () => {
            const a = 10, b = 20;

            const answer = a + b;

            expect(answer).toBe(30);
        })
})