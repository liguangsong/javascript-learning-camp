describe('practice-4-6', function () {

    it("print string is 李鉴学时第几个学生，他的语文成绩为：126", function () {
        console.dir(logs);
        expect(logs[0]).toBe("杨璐的成绩为：语文：131;数学：143;英语：144;");
        expect(logs[1]).toBe("王雪的成绩为：语文：131;数学：135;英语：144;");
        expect(logs[2]).toBe("韩林霖的成绩为：语文：127;数学：139;英语：142;");
        expect(logs[3]).toBe(undefined);
    });

});

