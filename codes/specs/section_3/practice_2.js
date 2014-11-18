
describe('practice-3-2', function () {

    it("print number is 5，5，0", function () {
        console.dir(logs[0]);
        expect(logs[0]).toBe('140分以上的学生的个数：5');
        expect(logs[1]).toBe('130～140分之间的学生的个数：5');
        expect(logs[2]).toBe('130分以下的学生的个数：0');
        expect(logs[3]).toBe(undefined);
    });

});




