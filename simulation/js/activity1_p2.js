let act1_p2_div;
function activity1_p2(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Case 2', 'act1-p2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-p2-div'>
      <h3>Case 2</h3>
      <p style="text-align:left;">
         Estimate the heat transfer when disc is horizontal with hot surface facing down.<br>
         use Nu = 0.27(GrPr)<sup>1/4</sup>
      </p>
      <br>

      <div id="act1-p2-Nu-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Nu = 0.27(GrPr)^{1/4} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p2-Nu-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p2_verify_Nu();' id='act1-p2-vf-btn1'>Verify</button>
      </div>
      
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-p2-div');
    }, 150);
    act1_p2_div = document.getElementById('act1-p2-div');
}
function internal_calculation3() {
    Nu_2 = 0.27 * Math.pow((Gr_1 * Pr), (1 / 4));
    h_2 = (Nu_2 * K) / L_1;
    Q_2 = h_2 * A * del_T;
    console.log('Nu_2', Nu_2);
    console.log('h21', h_2);
    console.log('Q21', Q_2);
}
function p2_verify_Nu() {
    let inp = (document.getElementById('act1-p2-Nu-inp'));
    console.log(Nu_2);
    if (!verify_values(parseFloat(inp.value), Nu_2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p2-Nu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Nu = 0.14(GrPr)^{1/3} = ${parseFloat(Nu_2.toFixed(2))} $$
      </p>
      <br>
   `;
    act1_p2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now,
      </p>
      <p>
         $$
            Nu = \\frac{hL}{K}
         $$
      </p>
      <div id="act1-p2-h-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\∴ h = \\frac{NuK}{L} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act1-p2-h-inp' class='form-control fs-16px' /><span style="display:contents;">W/m<sup>2</sup>-K</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p2_verify_h();' id='act1-p2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p2_verify_h() {
    let inp = (document.getElementById('act1-p2-h-inp'));
    console.log(h_2);
    if (!verify_values(parseFloat(inp.value), h_2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p2-h-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\∴ h = \\frac{NuK}{L} = ${parseFloat(h_2.toFixed(2))} \\ W/m^2-K $$
      </p>
      <br>
   `;
    act1_p2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>
      <div id="act1-p2-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Q = hA\ΔT = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p2-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p2_verify_Q();' id='act1-p2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p2_verify_Q() {
    let inp = (document.getElementById('act1-p2-Q-inp'));
    console.log(Q_2);
    if (!verify_values(parseFloat(inp.value), Q_2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p2-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = hA\ΔT  = ${parseFloat(Q_2.toFixed(2))} \\ W $$
      </p>
      <br>
   `;
    act1_p2_div.innerHTML += `

         <button class='btn btn-info btn-sm std-btn' onclick='activity1_p3(this);' id='act1-p2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map