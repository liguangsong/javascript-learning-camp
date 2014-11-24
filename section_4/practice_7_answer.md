- 在第15行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            str_stu_score_info = str_stu_score_info + '\n' + stu_names[i] + '\t' + '语文'+all_scores[stu_names[i]][0]+' 数学'+all_scores[stu_names[i]][1]+' 英语'+all_scores[stu_names[i]][2];
        }