describe('practice-4-3', function () {

    it("print string 杨璐成绩单 语文 131 数学：143 英语：144", function () {
        console.dir(logs[0]);

        expect(logs[0]).toBe('杨璐成绩单\n语文 131\n数学 143\n英语 144');
        expect(logs[1]).toBe(undefined);
    });

});




