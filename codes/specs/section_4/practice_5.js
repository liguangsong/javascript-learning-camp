describe('practice-4-5', function () {

    it("print string is 李鉴学时第几个学生，他的语文成绩为：126", function () {
        console.dir(logs);
        expect(logs[0]).toBe("第4个学生李鉴学的语文成绩为126");
        expect(logs[1]).toBe("第4个学生李鉴学的数学成绩为135");
        expect(logs[2]).toBe("第4个学生李鉴学的英语成绩为140");
        expect(logs[3]).toBe(undefined);
    });

});




