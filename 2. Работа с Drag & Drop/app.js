const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);//местно на каким находится
    placeholder.addEventListener('dragenter', dragenter);//куда помещать
    placeholder.addEventListener('dragleave', dragleave);//
    placeholder.addEventListener('drop', dragdrop);//где отпустили
}

function dragstart(event){
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0); 
}

function dragend(event){
    event.target.className = 'item';
}

function dragover(event){
    event.preventDefault();
}

function dragenter(event){
    event.target.classList.add('hoveded');
}

function dragleave(event){
    event.target.classList.remove('hoveded');
}

function dragdrop(event){
    event.target.classList.remove('hoveded');
    event.target.append(item);
}