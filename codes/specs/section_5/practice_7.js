describe('practice-5-7', function () {

    it("print 王雪的成绩为:语文->131数学->136英语->144", function () {
        console.dir(logs);
        expect(logs[0]).toBe("王雪的成绩为:语文->131数学->136英语->144");
        expect(logs[1]).toBe("杨璐的成绩为:语文->131数学->129英语->144");
        expect(logs[2]).toBe("韩林霖的成绩为:语文->127数学->139英语->142");
        expect(logs[3]).toBe("沙龙逸的成绩为:语文->124数学->148英语->136");
        expect(logs[4]).toBe(undefined);
    });

});




