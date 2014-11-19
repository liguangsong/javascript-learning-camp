describe('practice-4-3', function () {

    it("print string 王雪的英语成绩是：131分", function () {
        console.dir(logs[0]);

        expect(logs[0]).toBe('杨璐成绩单：\nchinese:131\nmath:143\nenglish:144');
        expect(logs[1]).toBe(undefined);
    });

});




