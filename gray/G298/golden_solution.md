# Golden Solution - G298

## Reference answer

$|p_1'| \approx 62$ Hz for exactly 45° (crossover 183 kHz); the quick estimate $200\text{ kHz}/3999 \approx 50$ Hz gives PM ≈ 49.6°. Bandwidth with feedback ≈ 200 kHz nominal: the unity-loop-gain frequency ≈ 157–183 kHz, or $(1+T_0)|p_1'|$ ≈ 200–250 kHz; the exact closed-loop −3 dB point is ≈ 300 kHz for the 45° design (≈ 260 kHz for 50 Hz), with ≈ 2.3 dB of peaking.

- Closed-loop gain 10: $T_0 = 40{,}000/10 - 1 = 3999$.
- Exactly 45°: $\arctan(f_0/200\text{ kHz}) + \arctan(f_0/4\text{ MHz}) = 45°$ gives $f_0 \approx 183$ kHz, and $|T(f_0)| = 1$ gives $|p_1'| \approx 61.9$ Hz.
- Quick estimate: $|p_1'| = 200\text{ kHz}/3999 = 50$ Hz; with it the crossover is 157 kHz and PM ≈ 49.6°.

## Grading notes

+2: $|p_1'|$ ≈ 62 Hz (accept 49–63 Hz, i.e. the exact 45° value or the 50-Hz estimate; $T_0 = 4000$ is fine; a notation slip such as poles defined in rad/s but substituted in Hz, with consistent numbers, is trivial) and bandwidth ≈ 200 kHz nominal (or the unity-loop-gain frequency 150–190 kHz, or $(1+T_0)|p_1'|$ ≈ 200–250 kHz, or closed-loop −3 dB ≈ 260–310 kHz), meaning stated. +1: pole right, bandwidth missing or vague. 0: right method, slip. −2 (asserted as fact): 5 Hz (unity-gain value reused), or a bandwidth of ≈ 20 kHz.
