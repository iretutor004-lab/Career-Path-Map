// ==========================================
// CAREER PATH MAP — Game Engine
// ==========================================
const $=id=>document.getElementById(id);
const screens={};
let state={career:null,stageIdx:0,selectedItems:[],allCollected:[],playing:false};

// --- BG PARTICLES ---
let bgCanvas,bgCtx,bgParticles=[];
function initBg(){
    bgCanvas=$('bg-canvas');bgCtx=bgCanvas.getContext('2d');resizeBg();
    bgParticles=[];
    for(let i=0;i<50;i++){
        bgParticles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,
            r:Math.random()*1.5+0.5,dx:(Math.random()-0.5)*0.3,dy:(Math.random()-0.5)*0.3,
            a:Math.random()*0.3+0.1});
    }
    animBg();
}
function resizeBg(){bgCanvas.width=innerWidth;bgCanvas.height=innerHeight;}
function animBg(){
    bgCtx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
    bgParticles.forEach(p=>{
        p.x+=p.dx;p.y+=p.dy;
        if(p.x<0)p.x=bgCanvas.width;if(p.x>bgCanvas.width)p.x=0;
        if(p.y<0)p.y=bgCanvas.height;if(p.y>bgCanvas.height)p.y=0;
        bgCtx.fillStyle=`rgba(245,166,35,${p.a})`;
        bgCtx.beginPath();bgCtx.arc(p.x,p.y,p.r,0,Math.PI*2);bgCtx.fill();
    });
    requestAnimationFrame(animBg);
}

// --- SCREENS ---
function cacheDom(){
    screens.welcome=$('welcome-screen');
    screens.career=$('career-screen');
    screens.game=$('game-screen');
    screens.result=$('result-screen');
}
function switchScreen(id){
    Object.values(screens).forEach(s=>s.classList.remove('active'));
    screens[id].classList.add('active');
}

// --- CAREER SELECT ---
function showCareerSelect(){
    const grid=$('career-grid');
    grid.innerHTML='';
    CAREERS.forEach((c,i)=>{
        const card=document.createElement('div');
        card.className='career-card';
        card.style.borderColor=c.color.replace(')',',0.3)').replace('rgb','rgba');
        card.innerHTML=`
            <div class="cc-top">
                <div class="cc-icon">${c.icon}</div>
                <div class="cc-info">
                    <div class="cc-title" style="color:${c.color}">${c.title}</div>
                    <div class="cc-subtitle">${c.titleTh}</div>
                </div>
            </div>
            <div class="cc-desc">${c.description}</div>
            <div class="cc-tags">
                <div class="cc-tag" style="color:${c.color}">💰 ${c.salary}</div>
                <div class="cc-tag" style="color:var(--green)">📈 ${c.demand}</div>
            </div>`;
        card.addEventListener('click',()=>selectCareer(c));
        grid.appendChild(card);
        card.style.opacity='0';card.style.transform='translateY(20px)';
        setTimeout(()=>{card.style.transition='all 0.3s ease';card.style.opacity='1';card.style.transform='translateY(0)';},i*100);
    });
    switchScreen('career');
}

function selectCareer(career){
    state={career:career,stageIdx:0,selectedItems:[],allCollected:[],playing:true};
    switchScreen('game');
    loadStage(0);
}

// --- GAME ---
function loadStage(idx){
    state.stageIdx=idx;
    state.selectedItems=[];
    state.playing=true;
    const career=state.career;
    const stage=career.stages[idx];
    const totalStages=career.stages.length;

    // Update HUD
    $('hud-stage').textContent=`${idx+1}/${totalStages}`;
    $('hud-collected').textContent=state.allCollected.length;
    $('hud-required').textContent=stage.requiredCount;

    // Progress bar
    $('progress-bar').style.width=((idx)/totalStages*100)+'%';

    // Banner
    $('banner-icon').textContent=career.icon;
    $('banner-title').textContent=career.title;
    $('banner-title').style.color=career.color;
    $('banner-sub').textContent=career.titleTh;
    $('career-banner').style.borderColor=career.color.replace(')',',0.3)').replace('rgb','rgba');

    // Stage header
    $('stage-tag').textContent=`STAGE ${idx+1}`;
    $('stage-title').textContent=`${stage.title} — ${stage.titleTh}`;
    $('stage-desc').textContent=stage.description;
    $('req-count').textContent=stage.requiredCount;
    $('total-count').textContent=stage.items.length;

    // Hide overlay
    $('stage-overlay').classList.add('hidden');

    // Render items
    const container=$('items-container');
    container.innerHTML='';
    stage.items.forEach((item,i)=>{
        const card=document.createElement('div');
        card.className='item-card';
        card.dataset.index=i;
        card.innerHTML=`
            <div class="item-check">○</div>
            <div class="item-body">
                <div class="item-name">
                    ${item.icon} ${item.name}
                    <span class="item-type-badge ${item.type}">${item.type==='cert'?'CERT':'SKILL'}</span>
                </div>
                <div class="item-desc">${item.desc}</div>
            </div>`;
        card.addEventListener('click',()=>{if(state.playing)toggleItem(i,card);});
        container.appendChild(card);
        card.style.opacity='0';card.style.transform='translateX(-20px)';
        setTimeout(()=>{card.style.transition='all 0.3s ease';card.style.opacity='1';card.style.transform='translateX(0)';},i*100);
    });

    updateConfirmBtn();
}

function toggleItem(idx,card){
    const stage=state.career.stages[state.stageIdx];
    const isSelected=state.selectedItems.includes(idx);

    if(isSelected){
        state.selectedItems=state.selectedItems.filter(i=>i!==idx);
        card.classList.remove('selected');
        card.querySelector('.item-check').textContent='○';
    }else{
        if(state.selectedItems.length>=stage.requiredCount)return;
        state.selectedItems.push(idx);
        card.classList.add('selected');
        card.querySelector('.item-check').textContent='✓';
        card.style.animation='collectPop 0.3s ease';
        setTimeout(()=>card.style.animation='',300);
    }
    updateConfirmBtn();
}

function updateConfirmBtn(){
    const stage=state.career.stages[state.stageIdx];
    const count=state.selectedItems.length;
    const req=stage.requiredCount;
    const btn=$('btn-confirm');
    btn.disabled=count<req;
    $('btn-confirm-text').textContent=`✅ ยืนยันการเลือก (${count}/${req})`;
}

function confirmSelection(){
    if(!state.playing)return;
    state.playing=false;
    const stage=state.career.stages[state.stageIdx];
    const collected=state.selectedItems.map(i=>stage.items[i]);
    state.allCollected.push(...collected);

    // Update HUD
    $('hud-collected').textContent=state.allCollected.length;

    // Show stage complete overlay
    showStageComplete(collected);
}

function showStageComplete(collected){
    const stage=state.career.stages[state.stageIdx];
    const isLast=state.stageIdx>=state.career.stages.length-1;

    $('stage-complete-icon').textContent='🎉';
    $('stage-complete-title').textContent=`${stage.title} Complete!`;
    $('stage-complete-sub').textContent=`คุณเก็บสะสม ${collected.length} รายการสำเร็จ!`;

    const summary=$('collected-summary');
    summary.innerHTML='';
    collected.forEach(item=>{
        const div=document.createElement('div');
        div.className='collected-item';
        div.innerHTML=`<span class="ci-icon">${item.icon}</span>
            <span>${item.name}</span>
            <span class="ci-badge" style="background:${item.type==='cert'?'rgba(245,166,35,.15)':'rgba(0,229,255,.15)'};color:${item.type==='cert'?'var(--gold)':'var(--primary)'};">${item.type==='cert'?'CERT':'SKILL'}</span>`;
        summary.appendChild(div);
    });

    $('btn-next-text').textContent=isLast?'📊 ดูผลสรุป':'➡️ Stage ถัดไป';
    $('stage-overlay').classList.remove('hidden');
}

function nextStage(){
    $('stage-overlay').classList.add('hidden');
    if(state.stageIdx>=state.career.stages.length-1){
        showResults();
    }else{
        loadStage(state.stageIdx+1);
    }
}

// --- RESULTS ---
function showResults(){
    const career=state.career;
    const certs=state.allCollected.filter(i=>i.type==='cert').length;
    const skills=state.allCollected.filter(i=>i.type==='skill').length;
    const total=state.allCollected.length;

    $('result-icon').textContent='🏆';
    $('result-title').textContent='CAREER PATH COMPLETE!';
    $('result-subtitle').textContent=`คุณพิชิตเส้นทาง ${career.title} สำเร็จแล้ว!`;

    $('rcc-icon').textContent=career.icon;
    $('rcc-title').textContent=career.title;
    $('rcc-title').style.color=career.color;
    $('rcc-subtitle').textContent=career.titleTh;
    $('rcc-salary').textContent=`💰 ${career.salary}`;
    $('rcc-demand').textContent=`📈 ความต้องการ: ${career.demand}`;
    $('result-career-card').style.borderColor=career.color;

    $('final-certs').textContent=certs;
    $('final-skills').textContent=skills;
    $('final-total').textContent=total;
    $('final-stages').textContent=`${career.stages.length}/${career.stages.length}`;

    // Collected items list
    const box=$('all-collected-items');
    box.innerHTML='';
    state.allCollected.forEach(item=>{
        const div=document.createElement('div');
        div.className='knowledge-item';
        div.innerHTML=`<span class="k-icon">${item.icon}</span>
            <div><strong>${item.name}</strong><p>${item.desc}</p></div>`;
        box.appendChild(div);
    });

    // Law & Ethics
    $('result-law').textContent=career.lawNote;
    $('result-ethics').textContent=career.ethicsNote;

    // Progress bar full
    $('progress-bar').style.width='100%';

    switchScreen('result');
}

// --- INIT ---
function init(){
    cacheDom();initBg();
    window.addEventListener('resize',resizeBg);
    $('btn-start').onclick=showCareerSelect;
    $('btn-back-welcome').onclick=()=>switchScreen('welcome');
    $('btn-exit-game').onclick=()=>{state.playing=false;switchScreen('welcome');};
    $('btn-confirm').onclick=confirmSelection;
    $('btn-next-stage').onclick=nextStage;
    $('btn-other-career').onclick=showCareerSelect;
    $('btn-restart').onclick=()=>{if(state.career)selectCareer(state.career);};
    $('btn-home').onclick=()=>switchScreen('welcome');
}
init();
