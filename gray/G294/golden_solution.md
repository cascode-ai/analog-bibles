# Golden Solution - G294

## Reference answer

$|p_D| \approx 600$ Hz (≈ 595 Hz for exactly 45°); bandwidth ≈ 300 kHz nominally (loop gain unity at ≈ 235 kHz; closed-loop −3 dB ≈ 400 kHz).

- Closed-loop gain 10: $f = (a_0/A_0 - 1)/a_0 = 0.0998$, low-frequency loop gain $T_0 = 499$ (≈ 500).
- The loop gain must fall at −20 dB/dec from 499 to unity at 300 kHz: $|p_D| = 300\text{ kHz}/499 = 601$ Hz.
- Check: crossover ≈ 235 kHz with PM ≈ 45°; exact 45° needs 595 Hz. The bandwidth is set by the same 300-kHz pole as for unity gain, i.e. ten times the ≈ 30 kHz that a unity-gain-compensated amplifier would give at a gain of 10.

## Grading notes

+2: $|p_D|$ ≈ 600 Hz (accept 580–610 Hz; using $T_0 = 500$ is fine) and bandwidth ≈ 300 kHz nominal (or 230–240 kHz unity-loop-gain frequency, or ≈ 400 kHz closed-loop −3 dB), meaning stated. +1: correct pole with the bandwidth missing or vague. 0: right method, arithmetic slip. −2 (asserted as fact): $|p_D|$ = 60 Hz (unity-gain value reused), a pole placed for crossover at 2 MHz, or the bandwidth claimed to be ≈ 30 kHz.
