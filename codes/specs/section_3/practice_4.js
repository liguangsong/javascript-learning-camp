
describe('practice-3-4', function () {

    it("print string name 刘帅,康惠雯 ,杨璐,沙龙逸,王雪", function () {
        console.dir(logs[0]);
        expect(logs[0]['刘帅']).toBe(116);
        expect(logs[0]['康惠雯']).toBe(114);
        expect(logs[0]['杨璐']).toBe(131);
        expect(logs[0]['沙龙逸']).toBe(123);
        expect(logs[0]['王雪']).toBe(131);
    });

});




