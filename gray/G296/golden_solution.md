# Golden Solution - G296

## Reference answer

$|p_1'| \approx 4.6$ kHz for exactly 45° (crossover 1.75 MHz); the quick textbook estimate $2\text{ MHz}/499 \approx 4.0$ kHz gives PM ≈ 48°. Bandwidth with feedback ≈ 2 MHz nominal: the unity-loop-gain frequency ≈ 1.6–1.75 MHz, or $(1+T_0)|p_1'|$ ≈ 2.0–2.3 MHz; the exact closed-loop −3 dB point is ≈ 2.9 MHz for the 45° design (≈ 2.6 MHz for 4.0 kHz), with ≈ 2.3 dB of peaking.

- Closed-loop gain 10: $T_0 = a_0/10 - 1 = 499$.
- Exactly 45°: with the dominant pole contributing ≈ −90° at crossover, $\arctan(f_0/2\text{ MHz}) + \arctan(f_0/25\text{ MHz}) = 45°$ gives $f_0 \approx 1.75$ MHz, and $|T(f_0)| = 1$ gives $|p_1'| \approx 4.66$ kHz.
- Quick estimate: loop gain falls from 499 to unity at 2 MHz, $|p_1'| = 2\text{ MHz}/499 = 4.0$ kHz; check: crossover 1.57 MHz, PM ≈ 48°.

## Grading notes

+2: $|p_1'|$ ≈ 4.6 kHz (accept 3.9–4.7 kHz, i.e. the exact 45° value or the 4.0-kHz textbook estimate) and bandwidth ≈ 2 MHz nominal (or the unity-loop-gain frequency ≈ 1.6–1.8 MHz, or $(1+T_0)|p_1'|$ ≈ 2.0–2.4 MHz, or closed-loop −3 dB ≈ 2.6–3.0 MHz), meaning stated. +1: pole right, bandwidth missing or vague. 0: right method, slip. −2 (asserted as fact): 400 Hz (unity-gain value reused), 600 Hz (added-pole design), or bandwidth claimed ≈ 200 kHz.
