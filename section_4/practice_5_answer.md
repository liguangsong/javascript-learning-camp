- 在第15行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            if(stu_names[i] === stu_name)
            {
                for(var j = 0; j < all_scores[stu_name].length; j ++)
                {
                    if(j === 0)
                    {
                        console.log('第'+i+'个学生'+stu_name+'的语文成绩为'+all_scores[stu_name][j]);
                    }
                    if(j === 1)
                    {
                        console.log('第'+i+'个学生'+stu_name+'的数学成绩为'+all_scores[stu_name][j]);
                    }
                    if(j === 2)
                    {
                        console.log('第'+i+'个学生'+stu_name+'的英语成绩为'+all_scores[stu_name][j]);
                    }
                }
            }
        }