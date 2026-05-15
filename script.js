const EPISODES = [
    {
        id: 1,
        label: "Episode 1: Mencari Tuhan",
        scenes: [
            {
                icon: "🏠", title: "Keluarga Pembuat Berhala",
                narasi: "Ibrahim kecil tumbuh di kota Ur, Babylonia. Ayahnya bernama Azar, seorang pengrajin patung berhala. Setiap hari Ibrahim melihat orang menyembah berhala batu dan kayu yang mati.",
                nilai: "Ibrahim selalu berpikir kritis dan tidak ikut-ikutan buta terhadap kebiasaan masyarakat.",
                choices: [
                    { text: "Ikut menyembah berhala agar disukai keluarga", isCorrect: false, feedback: "Ibrahim tidak mau begitu. Ia tahu mengikuti kebiasaan yang salah bukanlah kebenaran." },
                    { text: "Bertanya dalam hati: 'Apakah benda mati ini benar-benar Tuhan?'", isCorrect: true, feedback: "Tepat! Ibrahim menggunakan akal dan hatinya mencari kebenaran sejati." }
                ]
            },
            {
                icon: "🌟", title: "Merenungi Alam Semesta",
                narasi: "Ibrahim mengamati langit. Ia melihat bintang, lalu bulan, dan matahari. Namun semuanya terbit dan tenggelam. Ia mencari Tuhan yang abadi.",
                nilai: "Menggunakan akal untuk mengenal Allah — Tuhan yang kekal dan tidak pernah lenyap.",
                choices: [
                    { text: "Menyembah matahari karena paling besar dan terang", isCorrect: false, feedback: "Matahari pun terbenam. Sesuatu yang tenggelam tidak bisa menjadi Tuhan semesta alam." },
                    { text: "Meyakini Tuhan sejati adalah yang menciptakan langit dan bumi", isCorrect: true, feedback: "Benar! Ibrahim menemukan tauhid melalui akal dan renungan mendalam." }
                ]
            }
        ]
    },
    {
        id: 2,
        label: "Episode 2: Menegakkan Tauhid",
        scenes: [
            {
                icon: "🗿", title: "Di Hadapan Patung",
                narasi: "Saat penduduk kota pergi merayakan hari besar, Ibrahim masuk ke kuil yang penuh berhala untuk membuktikan kelemahan patung-patung tersebut.",
                nilai: "Keberanian mengambil risiko demi menyadarkan kaumnya dari kesesatan.",
                choices: [
                    { text: "Membiarkan saja karena takut dihukum", isCorrect: false, feedback: "Ibrahim tidak bisa tinggal diam. Ia merasa bertugas menyampaikan kebenaran." },
                    { text: "Menghancurkan berhala kecil & menaruh kapak di patung terbesar", isCorrect: true, feedback: "Tepat! Ini adalah strategi cerdas untuk memancing logika kaumnya agar berpikir." }
                ]
            },
            {
                icon: "⚖️", title: "Ibrahim Diadili Namrud",
                narasi: "Penduduk marah. Raja Namrud yang sombong menginterogasi Ibrahim: 'Apakah kamu yang menghancurkan tuhan-tuhan kami?'",
                nilai: "Menjawab dengan tenang, cerdas, dan membalikkan logika lawan tanpa kekerasan.",
                choices: [
                    { text: "Menjawab: 'Tanyakan saja pada patung terbesar itu jika ia bisa bicara'", isCorrect: true, feedback: "Brilian! Dengan ini para penyembah berhala sadar bahwa tuhan mereka bisu dan lemah." },
                    { text: "Mengaku bersalah dan memohon ampun", isCorrect: false, feedback: "Iman Ibrahim kuat. Ia tidak gentar menghadapi ancaman tiran seperti Namrud." }
                ]
            }
        ]
    },
    {
        id: 3,
        label: "Episode 3: Mukjizat Api",
        scenes: [
            {
                icon: "🔥", title: "Hukuman Terberat",
                narasi: "Namrud murka dan memerintahkan Ibrahim dibakar hidup-hidup dalam api raksasa. Ibrahim diikat dan dilemparkan ke kobaran api.",
                nilai: "Saat krisis memuncak, seorang mukmin hanya berserah diri kepada Allah (Tawakkal).",
                choices: [
                    { text: "Berdoa: 'Hasbiyallah wa ni'mal wakiil' (Cukuplah Allah pelindungku)", isCorrect: true, feedback: "Inilah puncak ketauhidan. Ibrahim menyerahkan urusannya seratus persen kepada Allah." },
                    { text: "Meminta bantuan kepada manusia di sekitarnya", isCorrect: false, feedback: "Ibrahim tahu manusia tidak ada yang bisa menyelamatkannya dari api sebesar itu." }
                ]
            },
            {
                icon: "❄️", title: "Api Menjadi Dingin",
                narasi: "Allah berfirman: 'Wahai api, jadilah dingin dan penyelamat bagi Ibrahim!' Ibrahim keluar dari api tanpa luka sedikitpun. Semua orang terpana.",
                nilai: "Tidak ada hukum alam yang bekerja tanpa izin Allah. Allah Maha Kuasa atas segala sesuatu.",
                choices: [
                    { text: "Ini adalah mukjizat tanda kekuasaan Allah", isCorrect: true, feedback: "Benar! Api kehilangan sifat panasnya karena perintah Penciptanya. Ujian ini dilewati dengan sempurna." },
                    { text: "Ini hanya trik sulap atau kebetulan", isCorrect: false, feedback: "Tidak ada manusia yang bisa selamat dari api sebesar itu tanpa campur tangan Ilahi." }
                ]
            }
        ]
    },
    {
        id: 4,
        label: "Episode 4: Pengorbanan Cinta",
        scenes: [
            {
                icon: "🌙", title: "Mimpi yang Berat",
                narasi: "Bertahun-tahun kemudian, saat Ismail putranya telah remaja, Ibrahim bermimpi mendapat perintah Allah untuk menyembelih Ismail.",
                nilai: "Ujian terberat adalah menempatkan ketaatan kepada Allah di atas cinta kepada makhluk.",
                choices: [
                    { text: "Mengabaikan mimpi itu karena terlalu berat", isCorrect: false, feedback: "Mimpi para Nabi adalah wahyu. Ibrahim sangat taat dan tidak akan mengabaikan perintah-Nya." },
                    { text: "Menyampaikan dengan jujur kepada Ismail", isCorrect: true, feedback: "Tepat. Ini menunjukkan dialog indah ayah dan anak yang sama-sama beriman kuat." }
                ]
            },
            {
                icon: "🐏", title: "Domba Pengganti",
                narasi: "Ismail ikhlas dan meminta ayahnya melaksanakan perintah itu. Namun saat pisau sudah di leher, Allah menggantinya dengan domba besar.",
                nilai: "Keikhlasan berbuah manis. Keduanya lulus ujian ketaatan tingkat tertinggi.",
                choices: [
                    { text: "Ismail diselamatkan karena ketaatan mereka berdua", isCorrect: true, feedback: "Subhanallah! Peristiwa agung ini kita peringati sebagai ibadah Kurban (Idul Adha) setiap tahun." },
                    { text: "Ibrahim membatalkan sendiri karena tidak tega", isCorrect: false, feedback: "Ibrahim sudah siap melaksanakan, namun Allah yang menghentikan sebagai bentuk Rahmat-Nya." }
                ]
            }
        ]
    }
];

let currentEpisode = 0;
let currentScene = 0;
let isAnswered = false;
let isMusicPlaying = false;

const el = {
    screenIntro: document.getElementById('screen-intro'),
    screenGame: document.getElementById('screen-game'),
    screenEnd: document.getElementById('screen-end'),
    hud: document.getElementById('hud'),
    hudEpTitle: document.querySelector('#hud-ep-title span'),
    progressDots: document.getElementById('progress-dots'),
    bgMusic: document.getElementById('bg-music'),
    musicToggle: document.getElementById('music-toggle'),

    sIcon: document.getElementById('scene-icon'),
    sTitle: document.getElementById('scene-title'),
    sNarasi: document.getElementById('scene-narasi'),
    sNilai: document.querySelector('#scene-nilai .value-text'),

    choicesContainer: document.getElementById('choices-container'),
    feedbackBox: document.getElementById('feedback-box'),
    nextAction: document.getElementById('next-action'),
    btnNext: document.getElementById('btn-next'),

    lessonsContainer: document.getElementById('lessons-container')
};

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Web Audio API untuk efek suara tanpa file eksternal
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playTone(freq, type, duration, vol, startTime) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startTime);
    
    gain.gain.setValueAtTime(vol, audioCtx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + startTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(audioCtx.currentTime + startTime);
    osc.stop(audioCtx.currentTime + startTime + duration);
}

function playCorrectSound() {
    initAudio();
    // Nada bahagia naik (C5 - E5 - G5)
    playTone(523.25, 'sine', 0.15, 0.2, 0); 
    playTone(659.25, 'sine', 0.2, 0.2, 0.1); 
    playTone(783.99, 'sine', 0.4, 0.2, 0.2); 
}

function playWrongSound() {
    initAudio();
    // Nada sedih turun
    playTone(300, 'sawtooth', 0.2, 0.05, 0);
    playTone(250, 'sawtooth', 0.4, 0.05, 0.15);
}

function startGame() {
    switchScreen('screen-game');
    el.hud.style.display = 'flex';
    loadScene();

    // Coba putar musik secara otomatis
    el.bgMusic.volume = 0.3; // Volume yang tidak mengganggu
    
    const startMusic = () => {
        el.bgMusic.currentTime = 60; // Mulai dari menit 1:00
        el.bgMusic.play().then(() => {
            isMusicPlaying = true;
            el.musicToggle.innerHTML = '<i class="ti ti-volume"></i>';
        }).catch(e => {
            // Jika browser memblokir autoplay
            isMusicPlaying = false;
            el.musicToggle.innerHTML = '<i class="ti ti-volume-3"></i>';
            console.log("Autoplay dicegah oleh browser. Pengguna harus menyalakan manual.");
        });
    };

    if (el.bgMusic.readyState >= 1) { // 1 = HAVE_METADATA
        startMusic();
    } else {
        el.bgMusic.addEventListener('loadedmetadata', startMusic, { once: true });
    }
}

function toggleMusic() {
    if (isMusicPlaying) {
        el.bgMusic.pause();
        isMusicPlaying = false;
        el.musicToggle.innerHTML = '<i class="ti ti-volume-3"></i>';
    } else {
        el.bgMusic.play().then(() => {
            isMusicPlaying = true;
            el.musicToggle.innerHTML = '<i class="ti ti-volume"></i>';
        }).catch(e => console.log("Gagal memutar audio", e));
    }
}

function updateHUD() {
    el.hudEpTitle.textContent = EPISODES[currentEpisode].label;

    el.progressDots.innerHTML = '';
    EPISODES.forEach((ep, idx) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (idx < currentEpisode) dot.classList.add('done');
        if (idx === currentEpisode) dot.classList.add('active');
        el.progressDots.appendChild(dot);
    });
}

function loadScene() {
    const ep = EPISODES[currentEpisode];
    const sc = ep.scenes[currentScene];
    isAnswered = false;

    updateHUD();

    // Reset UI states
    el.feedbackBox.className = 'feedback-box';
    el.feedbackBox.innerHTML = '';
    el.nextAction.classList.remove('show');

    // Render Content
    el.sIcon.textContent = sc.icon;
    el.sTitle.textContent = sc.title;
    el.sNarasi.textContent = sc.narasi;
    el.sNilai.innerHTML = `<strong>Pesan Moral:</strong> ${sc.nilai}`;

    // Render Choices
    el.choicesContainer.innerHTML = '';
    sc.choices.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<span>${choice.text}</span> <i class="ti ti-circle"></i>`;
        btn.onclick = () => handleChoice(idx);
        el.choicesContainer.appendChild(btn);
    });

    // Re-trigger animation
    el.screenGame.style.animation = 'none';
    el.screenGame.offsetHeight; /* trigger reflow */
    el.screenGame.style.animation = 'slideUpFade 0.5s ease forwards';
}

function handleChoice(choiceIdx) {
    if (isAnswered) return;

    const sc = EPISODES[currentEpisode].scenes[currentScene];
    const choice = sc.choices[choiceIdx];
    const buttons = el.choicesContainer.querySelectorAll('.choice-btn');

    if (choice.isCorrect) {
        isAnswered = true; // Kunci jawaban setelah menjawab benar
        if (isMusicPlaying) playCorrectSound();

        // Update tampilan tombol
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            const icon = btn.querySelector('i');
            if (idx === choiceIdx) {
                btn.classList.add('correct');
                icon.className = 'ti ti-check';
            } else {
                btn.style.opacity = '0.5'; // Redupkan pilihan yang salah
            }
        });

        // Tampilkan Feedback Benar
        el.feedbackBox.className = 'feedback-box show success';
        el.feedbackBox.innerHTML = `
            <div class="feedback-header"><i class="ti ti-circle-check-filled"></i> Tepat Sekali!</div>
            <div>${choice.feedback}</div>
        `;

        // Tampilkan tombol lanjut
        const isLastScene = currentScene === EPISODES[currentEpisode].scenes.length - 1;
        const isLastEp = currentEpisode === EPISODES.length - 1;

        if (!isLastScene) {
            el.btnNext.innerHTML = 'Adegan Selanjutnya <i class="ti ti-arrow-right"></i>';
        } else if (!isLastEp) {
            el.btnNext.innerHTML = 'Episode Selanjutnya <i class="ti ti-player-play-filled"></i>';
        } else {
            el.btnNext.innerHTML = 'Selesaikan Petualangan <i class="ti ti-award"></i>';
        }

        el.nextAction.classList.add('show');

        // Scroll otomatis ke bawah agar tombol lanjut terlihat di layar kecil
        setTimeout(() => el.nextAction.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);

    } else {
        // Jawaban Salah: Beri kesempatan mencoba lagi
        if (isMusicPlaying) playWrongSound();
        const clickedBtn = buttons[choiceIdx];
        clickedBtn.disabled = true;
        clickedBtn.classList.add('wrong');
        clickedBtn.querySelector('i').className = 'ti ti-x';

        // Tampilkan Feedback Salah
        el.feedbackBox.className = 'feedback-box show error';
        el.feedbackBox.innerHTML = `
            <div class="feedback-header"><i class="ti ti-alert-circle-filled"></i> Kurang Tepat</div>
            <div>${choice.feedback} <br><br><strong>Ayo coba pilihan yang lain!</strong></div>
        `;
    }
}

function nextStep() {
    const isLastScene = currentScene === EPISODES[currentEpisode].scenes.length - 1;
    const isLastEp = currentEpisode === EPISODES.length - 1;

    if (!isLastScene) {
        currentScene++;
        loadScene();
    } else if (!isLastEp) {
        currentEpisode++;
        currentScene = 0;
        loadScene();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    el.hud.style.display = 'none';
    switchScreen('screen-end');

    const lessons = [
        { icon: 'ti-brain', text: 'Menggunakan akal untuk mencari kebenaran, bukan sekadar ikut-ikutan.' },
        { icon: 'ti-shield-check', text: 'Berani menyuarakan kebenaran meski menghadapi risiko.' },
        { icon: 'ti-flame-off', text: 'Tawakkal total; pertolongan Allah pasti datang bagi hamba-Nya yang yakin.' },
        { icon: 'ti-heart-handshake', text: 'Mendahulukan perintah Allah di atas cinta kepada siapapun.' }
    ];

    el.lessonsContainer.innerHTML = lessons.map(l => `
        <div class="lesson-card">
            <div class="lesson-icon-wrapper"><i class="ti ${l.icon}"></i></div>
            <div class="lesson-text">${l.text}</div>
        </div>
    `).join('');
}
