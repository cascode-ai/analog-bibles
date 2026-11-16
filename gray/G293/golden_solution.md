# Golden Solution - G293

## Reference answer

Added dominant pole $|p_D| \approx 60$ Hz (59.4 Hz for exactly 45°); bandwidth with unity feedback ≈ 300 kHz nominally (the loop gain actually reaches unity at ≈ 235 kHz; the closed-loop −3-dB frequency is ≈ 400 kHz with ≈ 2.4 dB of peaking).

- Design rule: make the gain fall at −20 dB/dec from 5000 to unity at the first original pole, 300 kHz: $|p_D| = 300\text{ kHz}/5000 = 60$ Hz. At the crossover the added pole contributes −90° and the 300-kHz pole about −45°, so PM ≈ 45°.
- Check: with $|p_D| = 60$ Hz the loop gain is unity at ≈ 235 kHz (the real curve is 3 dB below the asymptote at 300 kHz), phase −135.2°, PM ≈ 44.8°. Exactly 45° needs $|p_D| = 59.4$ Hz (crossover 233 kHz, where the three original poles contribute 45°).
- Bandwidth with feedback ≈ frequency where the loop gain is unity: nominally $|p_1| = 300$ kHz (≈ 235 kHz exactly); the closed-loop magnitude is −3 dB at ≈ 400 kHz.

## Grading notes

+2: $|p_D|$ ≈ 60 Hz (accept 58–61 Hz) and a bandwidth stated as ≈ 300 kHz (nominal), or ≈ 230–240 kHz (unity-loop-gain frequency), or ≈ 400 kHz (closed-loop −3 dB), with the meaning made clear. +1: correct $|p_D|$ with the bandwidth missing or loosely justified. 0: right method with an arithmetic slip in $|p_D|$. −2 (asserted as fact): $|p_D|$ placed so the gain reaches unity at 2 MHz or 25 MHz (wrong pole), or the original 300-kHz pole moved (that is a different compensation method), giving ≈ 400 Hz.
