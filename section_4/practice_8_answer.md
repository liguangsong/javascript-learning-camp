- 在第13行添加如下代码：

        //求这几个同学的三科的总成绩
        var chinese_sum_score = 0;
        var math_sum_score = 0;
        var english_sum_score = 0;
        //查询数组stu_names中学生的成绩，并将他们的成绩详情拼接成一整个字符串，并打印出来
        var str_stu_score_info = '下面是部分学生的成绩详情：';
        for(var i = 0; i < stu_names.length; i ++)
        {
            str_stu_score_info = str_stu_score_info + '\n' + stu_names[i] + '\t' + '语文：'+all_scores[stu_names[i]][0]+';'+'数学：'+all_scores[stu_names[i]][1]+';'+'英语：'+all_scores[stu_names[i]][2];
            chinese_sum_score += all_scores[stu_names[i]][0];
            math_sum_score += all_scores[stu_names[i]][1];
            english_sum_score += all_scores[stu_names[i]][2];
        }
        str_stu_score_info = str_stu_score_info + '\n' + '平均成绩' + '\t' + '语文：'+ chinese_sum_score/3 +';'+'数学：'+math_sum_score/3+';'+'英语：'+english_sum_score/3;
        //打印这几名学生的成绩详情
        console.log(str_stu_score_info);