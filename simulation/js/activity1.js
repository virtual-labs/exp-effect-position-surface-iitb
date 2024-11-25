let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Forced and Natural Convection (Heat & Mass Transfer): Effect of position of surface</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      

      <p style="text-align:left">
         A circular disc insulated from one side and having diameter ${D}m is exposed to air at T<sub>f</sub> = ${Tf}&deg;C. <br>
         The disc surface is maintained at T<sub>s</sub> = ${Ts}&deg;C
      </p>
      <br>
      <ol style="text-align:left" type="i">
         Estimate the heat transfer when
         <li>
            disc is horizontal with hot surface facing up.<br>
            use Nu = 0.14(GrPr)<sup>1/3</sup>
         </li>
         <li>
            disc is horizontal with hot surface facing down. <br>
            use Nu = 0.27(GrPr)<sup>1/4</sup>
         </li>
         <li>
            disc is vetical. <br>
            use Nu = 0.59(GrPr)<sup>1/4</sup>
         </li>
      </ol>

      <br>

      <div>
         <div style="text-align:left">
            use following properties at mean temperature
         </div>
         <div class="row justify-content-center">
            <div class="col-md-3">
               K = 0.03 W/m-K
            </div>
            <div class="col-md-3">
               Pr = 0.697
            </div>
            <div class="col-md-3">
               &nu; = ${nu / Math.pow(10, -6)}&times;10<sup>-6</sup> m<sup>2</sup>/s
            </div>
         </div>
      </div>

      <br>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Mean temperature
      </p>

      <div id="act1-Tm-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$T_m = \\frac{T_s + T_f}{2} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:60%" id='act1-Tm-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Tm();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    D = parseFloat(random(0.25, 0.35).toFixed(2));
    let temp = random1(0, 11);
    Ts = 120 + temp;
    Tf = 20 - temp;
    Tm = (Ts + Tf) / 2;
    beta = 1 / (Tm + 273);
    del_T = Ts - Tf;
    A = (Math.PI / 4) * Math.pow(D, 2);
    console.log('D', D);
    console.log('temp', temp);
    console.log('Ts', Ts);
    console.log('Tf', Tf);
    console.log('Tm', Tm);
    console.log('beta', beta);
    console.log('del_T', del_T);
    console.log('A', A);
}
function a1_verify_Tm() {
    let inp = (document.getElementById('act1-Tm-inp'));
    console.log(Tm);
    if (!verify_values(parseFloat(inp.value), Tm)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Tm-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_m = \\frac{T_s + T_f}{2} = ${Tm} \°C $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Thermal coefficient of expansion
      </p>

      <div id="act1-beta-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\β = \\frac{1}{T_m} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-beta-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;K<sup>-1</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_beta();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_beta() {
    let inp = (document.getElementById('act1-beta-inp'));
    console.log(beta);
    if (!verify_values(parseFloat(inp.value), beta)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-beta-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\β = \\frac{1}{T_m} =  ${parseFloat(beta.toFixed(4))} \°K^{-1} $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity1_p1(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
    // <div class="fs-16px" style="color:red;">
    //          Note: enter value till 6 decimal places.
    //       </div>
    // <span style="display:contents;">&deg;K<sup>-1</sup></span>
}
activity1();
//# sourceMappingURL=activity1.js.map