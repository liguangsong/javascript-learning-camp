
describe('practice-3-5', function () {

    it("print array of scores ", function () {
        console.dir(logs[0]);
        console.dir(logs[1]);
        var array_scores = [131, 131, 127, 123, 126, 129, 116, 114, 115];
        expect(logs[0][0]).toBe(131);
        expect(logs[0][1]).toBe(131);
        expect(logs[0][2]).toBe(127);
        expect(logs[0][3]).toBe(123);
        expect(logs[0][4]).toBe(126);
        expect(logs[0][5]).toBe(129);
        expect(logs[0][6]).toBe(116);
        expect(logs[0][7]).toBe(114);
        expect(logs[0][8]).toBe(115);

        expect(logs[1]).toBe(131);
    });

});




