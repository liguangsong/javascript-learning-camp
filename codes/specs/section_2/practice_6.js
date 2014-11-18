
describe('practice-2-6', function () {

    it("print string all score ！", function () {
        console.dir(logs);
        expect(logs[0]).toBe("杨璐的成绩是：131分");
        expect(logs[1]).toBe("王雪的成绩是：131分");
        expect(logs[2]).toBe("韩林霖的成绩是：127分");
        expect(logs[3]).toBe("沙龙逸的成绩是：123分");
        expect(logs[4]).toBe("李鉴学的成绩是：126分");
        expect(logs[5]).toBe("韩雨萌的成绩是：129分");
        expect(logs[6]).toBe("刘帅的成绩是：116分");
        expect(logs[7]).toBe("康惠雯的成绩是：114分");
        expect(logs[8]).toBe("刘钰婷的成绩是：115分");
        expect(logs[9]).toBe("林世博的成绩是：116分");
        expect(logs[10]).toBe(undefined);

    });

});




