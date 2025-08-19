
        let input = document.getElementById("task")
        let submitb = document.getElementById("submitbtn")
        submitb.addEventListener("click", function(){
            if(input.value == ""){
                alert("please enter a task first, before submission")
            }
            else{
                let taskVal = input.value.trim();
                // console.log(taskVal);
                
               let uls = document.getElementById("taskvalues")
               let li = document.createElement("li")
               li.innerHTML = taskVal
               uls.appendChild(li)
               li.addEventListener("click", function(){
                   li.classList.toggle("cut")
                   uls.removeChild(li)
                })
                input.value = "";
            }
        });
       


