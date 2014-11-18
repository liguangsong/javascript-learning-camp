
describe('practice-2-6', function () {

    it("print string all score ！", function () {
        console.dir(logs);
        expect(logs[0]).toBe("杨璐的平均成绩是：139分");
        expect(logs[1]).toBe("王雪的平均成绩是：137分");
        expect(logs[2]).toBe(undefined);
    });

});
