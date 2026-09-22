// js/timer.js
class TestTimer {
    constructor(durationMinutes, onTick, onComplete) {
        this.durationSeconds = durationMinutes * 60;
        this.remainingSeconds = this.durationSeconds;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.interval = null;
    }

    start(resumeSeconds = null) {
        if (resumeSeconds !== null && resumeSeconds > 0) {
            this.remainingSeconds = resumeSeconds;
        }
        
        if (this.interval) clearInterval(this.interval);
        
        // Immediate first tick
        this.tick();
        
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        if (this.remainingSeconds <= 0) {
            this.stop();
            if (this.onComplete) this.onComplete();
            return;
        }

        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (this.onTick) this.onTick(this.remainingSeconds, display);
        
        this.remainingSeconds--;
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    getRemainingSeconds() {
        return this.remainingSeconds;
    }
}
