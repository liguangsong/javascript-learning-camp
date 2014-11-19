- 在第14行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            var sum_score = 0;
            for(var j = 0; j < all_scores[stu_names[i]].length; j ++)
            {
                sum_score += all_scores[stu_names[i]][j];
            }
            var average_score = sum_score / all_scores[stu_names[i]].length;
            console.log(stu_names[i]+'的平均成绩为：'+average_score);
        }