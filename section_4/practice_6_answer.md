- 在第14行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            var str_stu_score = stu_names[i]+'的成绩为 '+'语文'+all_scores[stu_names[i]][0]+' 数学'+all_scores[stu_names[i]][1]+' 英语'+all_scores[stu_names[i]][2];
            console.log(str_stu_score);
        }