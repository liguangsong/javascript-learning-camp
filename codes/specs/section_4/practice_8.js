describe('practice-4-8', function () {

    it("print string is 学生成绩详情和平均分", function () {
        console.dir(logs);
        expect(logs[0]).toBe("下面是部分学生的成绩详情：\n沙龙逸\t语文：124;数学：148;英语：137\n刘钰婷\t语文：115;数学：139;英语：135\n韩林霖\t语文：127;数学：139;英语：142\n平均成绩\t语文：122;数学：142;英语：138");
        expect(logs[1]).toBe(undefined);
    });

});

