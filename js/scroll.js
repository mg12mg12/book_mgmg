window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.scro');

    for(var i =0; i<reveals.length; i++){
        var window_height = window.innerHeight;
        var reveal_top = reveals[i].getBoundingClientRect().top;
        var reveal_point = 150;

        if(reveal_top < window_height - reveal_point){
            reveals[i].classList.add('active');
        }
    }
}



// 如果想要回去也會在一次消失,加在if後面
// else{
//     reveals[i].classList.remove('active');
// }