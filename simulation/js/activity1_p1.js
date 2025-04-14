let act1_p1_div;
function activity1_p1(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Case 1', 'act1-p1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-p1-div'>
      <h3>Case 1</h3>
      <p style="text-align:left;">
         Estimate the heat transfer when disc is horizontal with hot surface facing up.<br>
         use Nu = 0.14(GrPr)<sup>1/3</sup>
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Characteristic length (L)
      </p>
      <div id="act1-p1-L-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$ L = \\frac{A}{P} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p1-L-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p1_verify_L();' id='act1-p1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
    act1_p1_div = document.getElementById('act1-p1-div');
}
function internal_calculation2() {
    L_1 = A / (Math.PI * D);
    Gr_1 = (g * beta * del_T * Math.pow(L_1, 3)) / Math.pow(nu, 2);
    Nu_1 = 0.14 * Math.pow((Gr_1 * Pr), (1 / 3));
    h_1 = (Nu_1 * K) / L_1;
    Q_1 = h_1 * A * del_T;
    console.log('L_1', L_1);
    console.log('Gr_1', Gr_1);
    console.log('Nu_1', Nu_1);
    console.log('h_1', h_1);
    console.log('Q_1', Q_1);
}
function p1_verify_L() {
    let inp = (document.getElementById('act1-p1-L-inp'));
    console.log(L_1);
    if (!verify_values(parseFloat(inp.value), L_1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-L-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$L = \\frac{A}{P} = ${parseFloat(L_1.toFixed(4))} \\ m $$
      </p>
      <br>
   `;
    act1_p1_div.innerHTML += `

      <div id="act1-p1-Gr-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Gr = \\frac{g\β\ΔTL^3}{\ν^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p1-Gr-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p1_verify_Gr();' id='act1-p1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p1_verify_Gr() {
    let inp = (document.getElementById('act1-p1-Gr-inp'));
    console.log(Gr_1);
    if (!verify_values(parseFloat(inp.value), Gr_1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-Gr-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Gr = \\frac{g\β\ΔTL^3}{\ν^2} = ${parseFloat(Gr_1.toFixed(2))} $$
      </p>
      <br>
   `;
    act1_p1_div.innerHTML += `

      <div id="act1-p1-Nu-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Nu = 0.14(GrPr)^{1/3} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p1-Nu-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p1_verify_Nu();' id='act1-p1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p1_verify_Nu() {
    let inp = (document.getElementById('act1-p1-Nu-inp'));
    console.log(Nu_1);
    if (!verify_values(parseFloat(inp.value), Nu_1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-Nu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Nu = 0.14(GrPr)^{1/3} = ${parseFloat(Nu_1.toFixed(2))} $$
      </p>
      <br>
   `;
    act1_p1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now,
      </p>
      <p>
         $$
            Nu = \\frac{hL}{K}
         $$
      </p>
      <div id="act1-p1-h-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\∴ h = \\frac{NuK}{L} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act1-p1-h-inp' class='form-control fs-16px' /><span style="display:contents;">W/m<sup>2</sup>-K</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p1_verify_h();' id='act1-p1-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p1_verify_h() {
    let inp = (document.getElementById('act1-p1-h-inp'));
    console.log(h_1);
    if (!verify_values(parseFloat(inp.value), h_1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-h-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\∴ h = \\frac{NuK}{L} = ${parseFloat(h_1.toFixed(2))} \\ W/m^2-K $$
      </p>
      <br>
   `;
    act1_p1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>
      <div id="act1-p1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Q = hA\ΔT = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p1-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p1_verify_Q();' id='act1-p1-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p1_verify_Q() {
    let inp = (document.getElementById('act1-p1-Q-inp'));
    console.log(Q_1);
    if (!verify_values(parseFloat(inp.value), Q_1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = hA\ΔT  = ${parseFloat(Q_1.toFixed(2))} \\ W $$
      </p>
      <br>
   `;
    act1_p1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity1_p2(this);' id='act1-p1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map