
describe('practice-1-5', function () {

    it("print stu_standard_names with all names", function () {
        console.dir(logs[0]);
        var names_1 = logs[0][0];
        var names_2 = logs[0][1];
        var names_3 = logs[0][2];

        expect(names_1[0]).toBe('杨璐');
        expect(names_1[1]).toBe('王雪');
        expect(names_1[2]).toBe('韩林霖');
        expect(names_1[3]).toBe('沙龙逸');
        expect(names_1[4]).toBe(undefined);

        expect(names_2[0]).toBe('李鉴学');
        expect(names_2[1]).toBe('韩雨萌');
        expect(names_2[2]).toBe('刘帅')
        expect(names_2[3]).toBe(undefined);

        expect(names_3[0]).toBe('康惠雯');
        expect(names_3[1]).toBe('刘钰婷');
        expect(names_3[2]).toBe('林世博');
        expect(names_3[3]).toBe(undefined);

        expect(logs[0][3]).toBe(undefined);

    });

});




