- 在第六行添加如下代码：

        for(var i = 0; i < stu_scores.length; i ++)
        {
            var str_stu_score = '';
            str_stu_score = str_stu_score +stu_scores[i].name + '的成绩为:'+ '语文->' + stu_scores[i].score.chinese+ '数学->' + stu_scores[i].score.math+ '英语->' + stu_scores[i].score.english;
            console.log(str_stu_score);
        }