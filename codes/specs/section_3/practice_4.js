
describe('practice-3-4', function () {

    it("print string name 刘帅,康惠雯 ,杨璐,沙龙逸,王雪", function () {
        console.dir(logs);
        expect(logs[0]).toBe("刘帅成绩：116");
        expect(logs[1]).toBe("康惠雯成绩：114");
        expect(logs[2]).toBe("沙龙逸成绩：123");
        expect(logs[3]).toBe("王雪成绩：131");
        expect(logs[4]).toBe("杨璐成绩：131");
    });

});




