
describe('practice-3-2', function () {

    it("print number is 5，5，0", function () {
        console.dir(logs[0]);
        expect(logs[0]).toBe(5);
        expect(logs[1]).toBe(5);
        expect(logs[2]).toBe(0);
        expect(logs[3]).toBe(undefined);
    });

});




