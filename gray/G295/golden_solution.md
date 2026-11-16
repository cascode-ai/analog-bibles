# Golden Solution - G295

## Reference answer

Dominant pole moved to $|p_1'| \approx 400$ Hz (≈ 460 Hz for exactly 45°); bandwidth ≈ 2 MHz nominal (unity loop gain at ≈ 1.6–1.7 MHz; closed-loop −3 dB ≈ 2.6–2.9 MHz).

- Design rule: the gain must fall at −20 dB/dec from 5000 to unity at the second pole, 2 MHz: $|p_1'| = 2\text{ MHz}/5000 = 400$ Hz.
- Check: with 400 Hz the loop gain is unity at 1.57 MHz, PM ≈ 48°. Exactly 45° requires the 2-MHz and 25-MHz poles to contribute 45° at the crossover, which happens at 1.74 MHz; the gain condition then gives $|p_1'| = 462$ Hz.
- Compared with adding a new pole (≈ 60 Hz, bandwidth ≈ 300 kHz), moving the existing dominant pole gives about seven times the bandwidth.

## Grading notes

+2: $|p_1'|$ ≈ 400 Hz (accept 390–470 Hz, i.e. the asymptotic or the exact design) and bandwidth ≈ 2 MHz nominal (or 1.5–1.8 MHz unity-loop-gain frequency, or ≈ 2.6–2.9 MHz closed-loop −3 dB) with the meaning stated. +1: correct pole, bandwidth missing or vague. 0: right method, arithmetic slip. −2 (asserted as fact): 60 Hz (the added-pole design), crossover placed at 300 kHz or 25 MHz, or the 300-kHz pole still counted as present.
