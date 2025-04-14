let act1_p3_div;
function activity1_p3(btn) {
    btn && btn.remove();
    internal_calculation4();
    let btn_text = get_collapse_btn_text('Case 3', 'act1-p3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-p3-div'>
      <h3>Case 3</h3>
      <p style="text-align:left;">
         Estimate the heat transfer when disc is vertical.<br>
         use Nu = 0.59(GrPr)<sup>1/4</sup>
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Characteristic length (L)
      </p>
      <div id="act1-p3-L-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$ L = D =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p3-L-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p3_verify_L();' id='act1-p3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-p3-div');
    }, 150);
    act1_p3_div = document.getElementById('act1-p3-div');
}
function internal_calculation4() {
    L_3 = D;
    Gr_3 = (g * beta * del_T * Math.pow(L_3, 3)) / Math.pow(nu, 2);
    Nu_3 = 0.59 * Math.pow((Gr_3 * Pr), (1 / 4));
    h_3 = (Nu_3 * K) / L_3;
    Q_3 = h_3 * A * del_T;
    console.log('L_3', L_3);
    console.log('Gr_3', Gr_3);
    console.log('Nu_3', Nu_3);
    console.log('h_3', h_3);
    console.log('Q_3', Q_3);
}
function p3_verify_L() {
    let inp = (document.getElementById('act1-p3-L-inp'));
    console.log(L_3);
    if (!verify_values(parseFloat(inp.value), L_3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p3-L-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$L = D = ${parseFloat(L_3.toFixed(4))} \\ m $$
      </p>
      <br>
   `;
    act1_p3_div.innerHTML += `

      <div id="act1-p3-Gr-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Gr = \\frac{g\β\ΔTL^3}{\ν^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p3-Gr-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p3_verify_Gr();' id='act1-p3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p3_verify_Gr() {
    let inp = (document.getElementById('act1-p3-Gr-inp'));
    console.log(Gr_3);
    if (!verify_values(parseFloat(inp.value), Gr_3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p3-Gr-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Gr = \\frac{g\β\ΔTL^3}{\ν^2} = ${parseFloat(Gr_3.toFixed(2))} $$
      </p>
      <br>
   `;
    act1_p3_div.innerHTML += `

      <div id="act1-p3-Nu-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Nu = 0.59(GrPr)^{1/4} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p3-Nu-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p3_verify_Nu();' id='act1-p3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p3_verify_Nu() {
    let inp = (document.getElementById('act1-p3-Nu-inp'));
    console.log(Nu_3);
    if (!verify_values(parseFloat(inp.value), Nu_3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p3-Nu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Nu = 0.59(GrPr)^{1/4} = ${parseFloat(Nu_3.toFixed(2))} $$
      </p>
      <br>
   `;
    act1_p3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now,
      </p>
      <p>
         $$
            Nu = \\frac{hL}{K}
         $$
      </p>
      <div id="act1-p3-h-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\∴ h = \\frac{NuK}{L} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act1-p3-h-inp' class='form-control fs-16px' /><span style="display:contents;">W/m<sup>2</sup>-K</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p3_verify_h();' id='act1-p3-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p3_verify_h() {
    let inp = (document.getElementById('act1-p3-h-inp'));
    console.log(h_3);
    if (!verify_values(parseFloat(inp.value), h_3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p3-h-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\∴ h = \\frac{NuK}{L} = ${parseFloat(h_3.toFixed(2))} \\ W/m^2-K $$
      </p>
      <br>
   `;
    act1_p3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>
      <div id="act1-p3-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Q = hA\ΔT = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p3-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='p3_verify_Q();' id='act1-p3-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function p3_verify_Q() {
    let inp = (document.getElementById('act1-p3-Q-inp'));
    console.log(Q_3);
    if (!verify_values(parseFloat(inp.value), Q_3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p3-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = hA\ΔT  = ${parseFloat(Q_3.toFixed(2))} \\ W $$
      </p>
      <br>
   `;
    act1_p3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act1-p3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
//# sourceMappingURL=activity1_p3.js.map