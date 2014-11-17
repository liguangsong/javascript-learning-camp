- 分别在不同的注释后面添加如下两段代码
- 1.第一段

        for(var i = 0; i < stu_names.length; i ++)
        {
            scores.push(stu_scores[stu_names[i]]);
        }

- 2.第二段

        for(var j = 0; j < scores.length; j ++)
        {
            if(highest_score < scores[j])
            {
                highest_score = scores[j];
            }
        }