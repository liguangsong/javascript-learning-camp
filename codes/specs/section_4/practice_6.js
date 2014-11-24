describe('practice-4-6', function () {

    it("print string is 李鉴学时第几个学生，他的语文成绩为：126", function () {
        console.dir(logs);
        expect(logs[0]).toBe("杨璐的成绩为 语文131 数学143 英语144");
        expect(logs[1]).toBe("王雪的成绩为 语文131 数学135 英语144");
        expect(logs[2]).toBe("韩林霖的成绩为 语文127 数学139 英语142");
        expect(logs[3]).toBe(undefined);
    });

});

