
describe('practice-2-6', function () {

    it("print string score are 135 and 140！", function () {
        console.dir(logs[0]);
        expect(logs[0]).toBe('前两门的成绩的较高分为：135');
        expect(logs[1]).toBe('三科成绩中的最高分为：140');
        expect(logs[2]).toBe(undefined);
    });

});




