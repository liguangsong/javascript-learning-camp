function print_varible()
{
    var str_value = '作用在print_varible函数体内';
    function test_print_varible()
    {
        var str_value = '作用在test_print_varible函数体内';

    }
    test_print_varible();

}
print_varible();