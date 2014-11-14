
describe('practice-1-2', function () {

    it("print number with scores 131,131,127,123,126,129,116,114,115,116", function () {
        console.dir(logs[0]);
        var arr = logs[0];
        expect(arr[0]).toBe(131);
        expect(arr[1]).toBe(131);
        expect(arr[2]).toBe(127);
        expect(arr[3]).toBe(123);
        expect(arr[4]).toBe(126);
        expect(arr[5]).toBe(129);
        expect(arr[6]).toBe(116);
        expect(arr[7]).toBe(114);
        expect(arr[8]).toBe(115);
        expect(arr[9]).toBe(116);
        expect(arr[10]).toBe(undefined);
    });

});




