describe('practice-6-2', function () {

    it("print string 下面是某班部分学生的成绩：... ", function () {
        var stu_scores = [{name:'王雪雪',chinese:131,math:136,english:144},
            {name:'杨璐璐',chinese:131,math:129,english:144},
            {name:'韩林霖',chinese:126,math:139,english:142},
            {name:'沙龙逸',chinese:124,math:148,english:136}];
        print_stu_scores(stu_scores);
        expect(logs[0]).toBe("下面是某班部分学生的成绩\n王雪雪\t语文131 数学136 英语144\n杨璐璐\t语文131 数学129 英语144\n韩林霖\t语文126 数学139 英语142\n沙龙逸\t语文124 数学148 英语136");
        expect(logs[1]).toBe(undefined);
    });

});




