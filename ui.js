function Ui(){
    this.state = {
        playing : 0,
    }
    
    
}

const startBtn = document.querySelector('#startBtn');

var ui = new Ui();

startBtn.addEventListener('click', function(e){
    console.log(e);
    if(ui.state.playing == 0){
        ui.state.playing = 1;
        startBtn.disabled = true;
    }
})