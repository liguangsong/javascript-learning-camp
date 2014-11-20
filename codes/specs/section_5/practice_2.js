describe('practice-5-2', function () {

    it("print all keys and all value", function () {
        console.dir(logs);
        expect(logs[0]).toBe("name=>王雪");
        expect(logs[1]).toBe("age=>20");
        expect(logs[2]).toBe("num=>123");
        expect(logs[3]).toBe("math_score=>136");
        expect(logs[4]).toBe(undefined);
    });

});




