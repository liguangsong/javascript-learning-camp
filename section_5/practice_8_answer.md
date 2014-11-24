- 在第6行添加如下代码：

        var c_sum_score = 0;
        var m_sum_score = 0;
        var e_sum_score = 0;
        //将学生成绩的信息拼接成一整个字符串，并打印出来
        for (var i = 0; i < stu_scores.length; i ++)
        {
            str_stu_score = str_stu_score + '\n'+stu_scores[i].name+'\t'+'语文'+stu_scores[i].chinese+' 数学'+stu_scores[i].math+' 英语'+stu_scores[i].english;
            c_sum_score += stu_scores[i].chinese;
            m_sum_score += stu_scores[i].math;
            e_sum_score += stu_scores[i].english;
        }
        str_stu_score = str_stu_score + '\n'+'===============================';
        str_stu_score = str_stu_score + '\n'+'平均分'+'\t'+'语文'+c_sum_score/stu_scores.length+' 数学'+m_sum_score/stu_scores.length+' 英语'+e_sum_score/stu_scores.length;