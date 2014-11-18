
describe('practice-3-7', function () {

    it("print num of scores paragraph ", function () {
        console.dir(logs);

        expect(logs[0]).toBe("第4个学生的语文成绩是：126分");
        expect(logs[1]).toBe("第4个学生的数学成绩是：135分");
        expect(logs[2]).toBe("第4个学生的英语成绩是：140分");

    });

});




