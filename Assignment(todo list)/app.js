const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

    if(input.value==""){
        alert("Please Enter a Task");
        return;
    }

    taskList.innerHTML += `
    <li>
        <span>${input.value}</span>

        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </li>
    `;

    input.value="";

    let editBtns = document.querySelectorAll(".edit");

    editBtns.forEach(function(btn){

        btn.onclick = function(){

            let text = this.parentNode.parentNode.children[0];

            let newTask = prompt("Edit Task", text.innerText);

            if(newTask){
                text.innerText = newTask;
            }

        }

    });

    let deleteBtns = document.querySelectorAll(".delete");

    deleteBtns.forEach(function(btn){

        btn.onclick = function(){

            let check = confirm("Delete this task?");

            if(check){
                this.parentNode.parentNode.remove();
            }

        }

    });

}