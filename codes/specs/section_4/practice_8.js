describe('practice-4-8', function () {

    it("print string is 学生成绩详情和平均分", function () {
        console.dir(logs);
        expect(logs[0]).toBe("下面是部分学生的成绩详情\n沙龙逸\t语文124 数学148 英语137\n刘钰婷\t语文115 数学139 英语135\n韩林霖\t语文127 数学139 英语142\n平均成绩\t语文122 数学142 英语138");
        expect(logs[1]).toBe(undefined);
    });

});

