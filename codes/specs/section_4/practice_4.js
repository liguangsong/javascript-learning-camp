describe('practice-4-4', function () {

    it("print string 杨璐成绩单：chinese:131 math:143 english:144", function () {
        console.dir(logs);
        expect(logs[0]).toBe("杨璐的平均成绩为139");
        expect(logs[1]).toBe("王雪的平均成绩为137");
        expect(logs[2]).toBe("韩林霖的平均成绩为136");
        expect(logs[3]).toBe("沙龙逸的平均成绩为136");
        expect(logs[4]).toBe("李鉴学的平均成绩为134");
        expect(logs[5]).toBe("韩雨萌的平均成绩为133");
        expect(logs[6]).toBe("刘帅的平均成绩为133");
        expect(logs[7]).toBe("康惠雯的平均成绩为132");
        expect(logs[8]).toBe("刘钰婷的平均成绩为130");
        expect(logs[9]).toBe("林世博的平均成绩为129");

        expect(logs[10]).toBe(undefined);
    });

});




