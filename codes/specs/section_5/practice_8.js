describe('practice-5-8', function () {

    it("print 下面是某班部分学生的成绩：....", function () {
        console.dir(logs);
        expect(logs[0]).toBe("下面是某班部分学生的成绩\n王雪雪\t语文131 数学136 英语144\n杨璐璐\t语文131 数学129 英语144\n韩林霖\t语文126 数学139 英语142\n沙龙逸\t语文124 数学148 英语136\n===============================\n平均分\t语文128 数学138 英语141.5");
        expect(logs[1]).toBe(undefined);
    });

});




