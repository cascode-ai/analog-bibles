# Golden Solution - G342

## Reference answer

$V_o(t)$ is a 200-Hz square wave (period 5 ms, 2.5 ms at each frequency) switching between about −26.9 mV (input at 1.95 kHz) and +26.9 mV (input at 2.05 kHz), i.e. 53.8 mV peak to peak, centered on 0 V. Each transition is a single exponential with time constant $\tau = 1/K_v \approx 34\ \mu$s (10–90% rise ≈ 74 µs, settled within ≈ 0.17 ms), so the waveform is nearly square.

- $K_O = 0.93 \times 2\pi \times 2000 = 1.169 \times 10^4$ rad/(V·s); $K_v = AK_DK_O = 2.55 \times 1.169\times10^4 = 2.98 \times 10^4\ \mathrm{s^{-1}}$.
- First-order loop: $V_o/\omega_i = (1/K_O)\,K_v/(s + K_v)$, so a step in input frequency gives an exponential step in $V_o$ with $\tau = 1/K_v = 33.6\ \mu$s.
- Steady state: $V_o = (\omega_i - \omega_o)/K_O = \pm 2\pi(50)/1.169\times10^4 = \pm 0.0269$ V (equivalently $\pm 50/(0.93 \times 2000)$ V).
- The loop stays locked: the steady phase error is only $\Delta\omega/K_v = 0.011$ rad, and the lock range $\pm(\pi/2)K_v \approx \pm 7.5$ kHz is far larger than ±50 Hz.

## Grading notes

+2: a square wave at the modulation rate with levels ±26.9 mV (±5%), the higher input frequency giving the higher (positive) output under the convention $V_o = (\omega_i - \omega_o)/K_O$ (the opposite polarity is fine if a convention making it so is stated), and exponential edges with $\tau = 1/K_v \approx 34\ \mu$s (±10%). The interpretation "each frequency held for 5 ms" (a 100-Hz output square wave) is also accepted if stated. +1: correct levels and shape but τ missing or off by a small factor, or the edges drawn as instantaneous with a remark that they are much faster than the modulation. 0: correct method with a numerical slip in the level. −2 (asserted as fact): levels off by 2π from mixing Hz and rad/s (e.g. ≈ 0.17 V or ≈ 4.3 mV), a sinusoidal or triangular output, edges with a time constant of the order of milliseconds, or a claim that the loop loses lock.
