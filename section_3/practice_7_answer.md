- 在第14行添加如下代码：

        for(var i = 0; i < stu_names.length; i ++)
        {
            if(stu_names[i] == stu_name)
            {
                for(var j = 0; j < all_scores[stu_name].length; j ++)
                {
                    if(j === 0)
                    {
                        console.log('第'+i+'个学生的语文成绩是：'+all_scores[stu_name][j]+'分');
                    }
                    if(j === 1)
                    {
                        console.log('第'+i+'个学生的数学成绩是：'+all_scores[stu_name][j]+'分');
                    }
                    if(j === 2)
                    {
                        console.log('第'+i+'个学生的英语成绩是：'+all_scores[stu_name][j]+'分');
                    }
                }
            }
        }