
describe('practice-3-6', function () {

    it("print num of scores paragraph ", function () {
        console.dir(logs);

        expect(logs[0]).toBe('所有分数中>140分的个数：8');
        expect(logs[1]).toBe('介于130到140之间的成绩（包括130和140）的个数：13');
        expect(logs[2]).toBe('<130的成绩的个数：9');

    });

});




