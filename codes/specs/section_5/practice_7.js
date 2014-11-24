describe('practice-5-7', function () {

    it("print 王雪的成绩为 语文131 数学136 英语144", function () {
        console.dir(logs);
        expect(logs[0]).toBe("王雪的成绩为 语文131 数学136 英语144");
        expect(logs[1]).toBe("杨璐的成绩为 语文131 数学129 英语144");
        expect(logs[2]).toBe("韩林霖的成绩为 语文127 数学139 英语142");
        expect(logs[3]).toBe("沙龙逸的成绩为 语文124 数学148 英语136");
        expect(logs[4]).toBe(undefined);
    });

});




