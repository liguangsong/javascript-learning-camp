describe('practice-4-7', function () {

    it("print string is 学生成绩详情", function () {
        console.dir(logs);
        expect(logs[0]).toBe("下面是部分学生的成绩详情\n沙龙逸\t语文123 数学148 英语136\n刘钰婷\t语文115 数学139 英语135\n韩林霖\t语文127 数学139 英语142");
        expect(logs[1]).toBe(undefined);
    });

});

