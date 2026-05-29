
// ============ WEB GAME CONTROLLER ============
var canvas, ctx, engine, p1, p2, gameLoop, lastFrame;
var gameState = {started:false, duration:120, scoringMode:'alternate'};

function $(id){ return document.getElementById(id); }

var meter = $('meter'), meterGreen = $('meterGreen'), meterFill = $('meterFill'), meterMark = $('meterMark');
var msgBox = $('msg'), msgText = $('msgText');
var joyBase = $('joyBase'), joyDot = $('joyDot'), joyArea = $('joyArea');
var btnShoot = $('btnShoot'), btnRebound = $('btnRebound'), btnDrive = $('btnDrive'), btnSteal = $('btnSteal'), btnBlock = $('btnBlock');
var setupOverlay = $('setupOverlay'), gameOverOverlay = $('gameOverOverlay');

// ============ CANVAS ============
function initCanvas() {
  canvas = $('gc');
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  var w = window.innerWidth, h = window.innerHeight;
  var dpr = window.devicePixelRatio || 1;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  if (engine) { engine.w = w; engine.h = h; engine.s = Math.min(w / COURT_W, h / COURT_H); }
}

// ============ SCREENS ============
function showScreen(id) {
  var els = document.querySelectorAll('.overlay');
  for (var i = 0; i < els.length; i++) els[i].classList.add('hidden');
  if (id) $(id).classList.remove('hidden');
}

// ============ PLAYER SELECTION ============
var selP1 = null, selP2 = null, selTeam1 = 'liaoning', selTeam2 = 'guangdong';

function getTeamPlayers(teamId) {
  return getPlayersByTeam(teamId);
}

function buildTeamSelector(containerId, side) {
  var teams = getTeams();
  var html = '';
  for (var i = 0; i < teams.length; i++) {
    var t = teams[i];
    html += '<div class="team-tab" data-team="' + t.id + '" style="border-left:3px solid ' + t.color + '">' + t.abbr + ' (' + t.count + ')</div>';
  }
  $(containerId).innerHTML = html;
  // Click handlers
  var tabs = $(containerId).querySelectorAll('.team-tab');
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].addEventListener('click', function() {
      var tid = this.getAttribute('data-team');
      if (side === 'p1') { selTeam1 = tid; selP1 = null; }
      else { selTeam2 = tid; selP2 = null; }
      // Highlight
      var all = this.parentElement.querySelectorAll('.team-tab');
      for (var k = 0; k < all.length; k++) all[k].classList.remove('sel');
      this.classList.add('sel');
      buildPlayerGrid(side === 'p1' ? 'playerGrid' : 'playerGrid2', side);
    });
  }
  // Select first by default
  if (tabs.length > 0) tabs[side === 'p1' ? 0 : 1].classList.add('sel');
}

function buildPlayerGrid(containerId, side) {
  var tid = side === 'p1' ? selTeam1 : selTeam2;
  var players = getPlayersByTeam(tid);
  var grid = $(containerId);
  grid.innerHTML = '';
  for (var i = 0; i < players.length; i++) {
    (function(p) {
      var card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = '<span class="p-num" style="color:' + p.teamColor + '">' + p.num + '</span><span class="p-name">' + p.name + '</span><span class="p-pos">' + p.pos + '</span>';
      card.addEventListener('click', function() {
        if (side === 'p1') { selP1 = p; selectInGrid(this, 'playerGrid'); }
        else { selP2 = p; selectInGrid(this, 'playerGrid2'); }
      });
      grid.appendChild(card);
    })(players[i]);
  }
}

function selectInGrid(el, gridId) {
  var cards = $(gridId).querySelectorAll('.player-card');
  for (var i = 0; i < cards.length; i++) cards[i].classList.remove('sel');
  el.classList.add('sel');
}

// Build team selectors
buildTeamSelector('teamTabs1', 'p1');
buildTeamSelector('teamTabs2', 'p2');
buildPlayerGrid('playerGrid', 'p1');
buildPlayerGrid('playerGrid2', 'p2');
selP1 = getPlayersByTeam('liaoning')[0];
selP2 = getPlayersByTeam('guangdong')[0];
setTimeout(function() {
  var c1 = $('playerGrid').querySelectorAll('.player-card');
  var c2 = $('playerGrid2').querySelectorAll('.player-card');
  if (c1[0]) c1[0].classList.add('sel');
  if (c2[0]) c2[0].classList.add('sel');
}, 200);

// ============ GAME MODE SELECTION ============
gameState.gameMode = 'ai'; // ai | local | online
$('modeAI').addEventListener('click', function() { gameState.gameMode = 'ai'; updateModeTabs(); });
$('modeLocal').addEventListener('click', function() { gameState.gameMode = 'local'; updateModeTabs(); });
$('modeOnline').addEventListener('click', function() { gameState.gameMode = 'online'; updateModeTabs(); });
function updateModeTabs() {
  var m = gameState.gameMode;
  $('modeAI').classList.toggle('on', m === 'ai');
  $('modeLocal').classList.toggle('on', m === 'local');
  $('modeOnline').classList.toggle('on', m === 'online');
}

// ============ SCORING MODE ============
function updateModeUI() {
  var m = gameState.scoringMode;
  $('modeAlt').classList.toggle('on', m === 'alternate');
  $('modeKeep').classList.toggle('on', m === 'keep');
  $('modeHint').textContent = m === 'alternate' ? '进球后交换球权' : '进球方继续进攻';
}
$('modeAlt').addEventListener('click', function() { gameState.scoringMode = 'alternate'; updateModeUI(); });
$('modeKeep').addEventListener('click', function() { gameState.scoringMode = 'keep'; updateModeUI(); });

// ============ TIME SELECTION ============
var timeBtns = document.querySelectorAll('.time-btn');
for (var i = 0; i < timeBtns.length; i++) {
  timeBtns[i].addEventListener('click', function() {
    var dur = parseInt(this.getAttribute('data-dur')) || 120;
    if (dur === 0) {
      dur = parseInt($('customTime').value) || 120;
      dur = Math.max(30, Math.min(600, dur));
      $('customTime').value = dur;
    }
    gameState.duration = dur;
    startGame();
  });
}

// ============ START GAME ============
function startGame() {
  if (!selP1 || !selP2) { alert('请先选择球员'); return; }
  p1 = selP1; p2 = selP2;

  if (gameState.gameMode === 'online') {
    // Online mode - try WebSocket connection
    showScreen(null);
    var wsHost = prompt('输入服务器地址 (格式: IP:端口):', '10.32.17.144:3456');
    if (!wsHost) { showScreen('setupOverlay'); return; }
    connectOnline(wsHost);
    return;
  }

  // AI or local mode
  showScreen(null);
  gameState.started = true;
  gameState.isAI = gameState.gameMode === 'ai';

  engine = new GameEngine(canvas, ctx, window.innerWidth, window.innerHeight, {
    gameDuration: gameState.duration,
    scoringMode: gameState.scoringMode
  });
  engine.setPlayers(p1, p2);
  engine.scoringMode = gameState.scoringMode;
  if (gameState.isAI) {
    engine._aiMode = true; // AI controls defense
  }

  $('p1name').textContent = p1.name;
  $('p1name').style.color = p1.teamColor;
  $('p2name').textContent = p2.name;
  $('p2name').style.color = p2.teamColor;
  $('score0').textContent = '0';
  $('score1').textContent = '0';
  $('gameTimer').textContent = formatTime(gameState.duration);

  lastFrame = performance.now();
  if (gameLoop) cancelAnimationFrame(gameLoop);
  gameLoop = requestAnimationFrame(tick);
}

function formatTime(sec) {
  var m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

// ============ GAME LOOP ============
function tick(now) {
  if (!engine || !gameState.started) { gameLoop = requestAnimationFrame(tick); return; }
  try {
    var dt = now - lastFrame;
    lastFrame = now;
    if (dt > 50) dt = 33;
    engine.update(dt);
    engine.render();
    syncUI();
    if (engine.gameOver && !engine._uiEnded) {
      engine._uiEnded = true;
      showGameOver();
    }
  } catch(e) {
    console.error('Game error:', e);
    var ld = document.getElementById('loading');
    if (ld) { ld.textContent = '出错了: ' + e.message; ld.style.display = 'block'; }
  }
  gameLoop = requestAnimationFrame(tick);
}

function syncUI() {
  var s = engine.getState();
  $('score0').textContent = s.score[0];
  $('score1').textContent = s.score[1];
  $('shotClock').textContent = s.shotClock + 's';
  $('gameTimer').textContent = formatTime(s.gameTime);

  if (s.shooting && !engine.shotReleased) {
    meter.classList.add('show');
    var pct = Math.floor(s.shotPower * 100);
    meterFill.style.width = pct + '%';
    meterMark.style.left = pct + '%';
    meterGreen.style.left = Math.floor(s.chargeZoneLo * 100) + '%';
    meterGreen.style.width = Math.floor((s.chargeZoneHi - s.chargeZoneLo) * 100) + '%';
  } else {
    meter.classList.remove('show');
  }

  if (s.messageText) {
    msgBox.classList.add('show');
    msgText.textContent = s.messageText;
  } else {
    msgBox.classList.remove('show');
  }

  var bl = s.ballLoose;
  btnShoot.classList.toggle('hidden', bl);
  btnRebound.classList.toggle('hidden', !bl);
  $('btnShootLabel').textContent = s.shooting ? '松手！' : '按住投篮';
}

function showGameOver() {
  var s = engine.getState(), w = s.winner;
  $('winText').textContent = (w === 0 ? p1.name : w === 1 ? p2.name : '') + ' 获胜！';
  $('finalScore').textContent = s.score[0] + ' - ' + s.score[1];
  $('stat1').textContent = p1.name + ': ' + (s.stats.p1.pts || 0) + '分 ' + (s.stats.p1.reb || 0) + '板 ' + (s.stats.p1.blk || 0) + '帽 ' + (s.stats.p1.stl || 0) + '断';
  $('stat2').textContent = p2.name + ': ' + (s.stats.p2.pts || 0) + '分 ' + (s.stats.p2.reb || 0) + '板 ' + (s.stats.p2.blk || 0) + '帽 ' + (s.stats.p2.stl || 0) + '断';
  showScreen('gameOverOverlay');
}

// ============ TOUCH JOYSTICK ============
var joyOn = false, joyRect = null;

function getJoyPos(touch) {
  if (!joyRect) {
    var r = joyBase.getBoundingClientRect();
    joyRect = { cx: r.left + r.width / 2, cy: r.top + r.height / 2, mr: r.width / 2 };
  }
  var dx = touch.clientX - joyRect.cx, dy = touch.clientY - joyRect.cy;
  var d = Math.sqrt(dx * dx + dy * dy);
  if (d > joyRect.mr) { dx = dx / d * joyRect.mr; dy = dy / d * joyRect.mr; }
  return { x: dx / joyRect.mr, y: dy / joyRect.mr };
}

joyArea.addEventListener('touchstart', function(e) {
  e.preventDefault(); joyOn = true;
  var p = getJoyPos(e.touches[0]);
  joyDot.style.left = (p.x * 50 + 50) + '%';
  joyDot.style.top = (p.y * 50 + 50) + '%';
  if (engine) engine.setOffMove(p.x, p.y);
});
joyArea.addEventListener('touchmove', function(e) {
  e.preventDefault();
  if (!joyOn) return;
  var p = getJoyPos(e.touches[0]);
  joyDot.style.left = (p.x * 50 + 50) + '%';
  joyDot.style.top = (p.y * 50 + 50) + '%';
  if (engine) engine.setOffMove(p.x, p.y);
});
joyArea.addEventListener('touchend', function(e) {
  e.preventDefault(); joyOn = false;
  joyDot.style.left = '50%'; joyDot.style.top = '50%';
  joyRect = null;
  if (engine) engine.setOffMove(0, 0);
});
joyArea.addEventListener('touchcancel', function() {
  joyOn = false; joyDot.style.left = '50%'; joyDot.style.top = '50%';
  joyRect = null;
  if (engine) engine.setOffMove(0, 0);
});

// ============ ACTION BUTTONS ============
btnShoot.addEventListener('touchstart', function(e) {
  e.preventDefault(); btnShoot.classList.add('on');
  if (engine) engine.startShoot();
});
btnShoot.addEventListener('touchend', function(e) {
  e.preventDefault(); btnShoot.classList.remove('on');
  if (engine) engine.releaseShoot();
});
btnShoot.addEventListener('touchcancel', function() {
  btnShoot.classList.remove('on');
  if (engine) engine.releaseShoot();
});

btnRebound.addEventListener('touchstart', function(e) {
  e.preventDefault(); btnRebound.classList.add('on');
  if (engine) engine.attemptRebound();
  setTimeout(function() { btnRebound.classList.remove('on'); }, 200);
});

function bindAction(el, action) {
  el.addEventListener('touchstart', function(e) {
    e.preventDefault(); el.classList.add('on');
    if (engine) engine[action]();
    setTimeout(function() { el.classList.remove('on'); }, 300);
  });
}
bindAction(btnDrive, 'attemptDrive');
bindAction(btnSteal, 'attemptSteal');
bindAction(btnBlock, 'attemptBlock');

// Desktop mouse support
btnShoot.addEventListener('mousedown', function(e) { e.preventDefault(); btnShoot.classList.add('on'); if (engine) engine.startShoot(); });
btnShoot.addEventListener('mouseup', function(e) { e.preventDefault(); btnShoot.classList.remove('on'); if (engine) engine.releaseShoot(); });
btnRebound.addEventListener('mousedown', function(e) { e.preventDefault(); btnRebound.classList.add('on'); if (engine) engine.attemptRebound(); setTimeout(function() { btnRebound.classList.remove('on'); }, 200); });
btnDrive.addEventListener('mousedown', function(e) { e.preventDefault(); btnDrive.classList.add('on'); if (engine) engine.attemptDrive(); setTimeout(function() { btnDrive.classList.remove('on'); }, 300); });
btnSteal.addEventListener('mousedown', function(e) { e.preventDefault(); btnSteal.classList.add('on'); if (engine) engine.attemptSteal(); setTimeout(function() { btnSteal.classList.remove('on'); }, 300); });
btnBlock.addEventListener('mousedown', function(e) { e.preventDefault(); btnBlock.classList.add('on'); if (engine) engine.attemptBlock(); setTimeout(function() { btnBlock.classList.remove('on'); }, 300); });

// ============ GAME OVER BUTTONS ============
$('btnRematch').addEventListener('click', function() {
  engine._uiEnded = false;
  gameState.started = false;
  gameOverOverlay.classList.add('hidden');
  startGame();
});
$('btnNewGame').addEventListener('click', function() {
  engine._uiEnded = false;
  gameState.started = false;
  gameOverOverlay.classList.add('hidden');
  showScreen('setupOverlay');
});

// ============ PREVENT SCROLL ============
document.addEventListener('touchmove', function(e) {
  if (e.target.closest && e.target.closest('.ov-box')) return;
  e.preventDefault();
}, { passive: false });

// ============ INIT ============
initCanvas();
showScreen('setupOverlay');
updateModeUI();
