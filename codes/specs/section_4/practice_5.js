describe('practice-4-5', function () {

    it("print string is 李鉴学时第几个学生，他的语文成绩为：126", function () {
        console.dir(logs);
        expect(logs[0]).toBe("李鉴学是第4个学生，他的语文成绩为：126");
        expect(logs[1]).toBe("李鉴学是第4个学生，他的数学成绩为：135");
        expect(logs[2]).toBe("李鉴学是第4个学生，他的英语成绩为：140");
        expect(logs[3]).toBe(undefined);
    });

});




