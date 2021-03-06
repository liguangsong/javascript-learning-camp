var logs = [];
(function(){
    var console_count = 0;
    console.log = function (arg) {
        var color;
        switch (typeof(arg)) {
            case "undefined":
                color = "dimgray";
                break;
            case "object":
                arg === null ? color = "dimgray" : color = "#000000";
                break;
            case "number":
                color = "darkblue";
                break;
            case "string":
                color = "#000000";
                break;
            case "boolean":
                color = "#000000";
                break;
            case "function":
                color = "#000000";
                break;
        }
        if(console_count>=0){
            logs[console_count] = arg;
            console_log_on_web_page(arg,color);
        }
        console_count++;
    };

    function console_log_on_web_page(arg, color){
//    document.write("<h4 style='padding:15px;color: " + color + "'>" + arg + "</h4>");
        if(parent.log) {
            parent.log(arg);
        } else {
            console.info(arg);
        }
    }
})();
