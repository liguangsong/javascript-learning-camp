describe('practice-4-3', function () {

    it("print string 杨璐成绩单：chinese:131 math:143 english:144", function () {
        console.dir(logs[0]);

        expect(logs[0]).toBe('杨璐成绩单：\nchinese:131\nmath:143\nenglish:144');
        expect(logs[1]).toBe(undefined);
    });

});




