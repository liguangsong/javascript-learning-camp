describe('practice-6-7', function () {

    it("print 变量的作用域 ", function () {

        expect(logs[0]).toBe("作用在test_print_varible函数体内");
        expect(logs[1]).toBe("作用在print_varible函数体内");
    });

});
