# Golden Solution - R634

## Reference answer

The drain currents are produced by a strongly nonlinear, limiting element (the differential pair), while the drain voltages are those currents filtered by a high-Q resonant tank, which passes essentially only the fundamental.
- As the amplitude grows, $V_X - V_Y$ becomes large enough to steer all of $I_{SS}$ to one transistor every half cycle, so $I_{D1}$ and $I_{D2}$ are clipped at 0 and $I_{SS}$ and approach square waves, which carry large odd harmonics (3rd ≈ 1/3, 5th ≈ 1/5 of the fundamental).
- Each drain voltage is $V_{DD}$ minus the drain current times the tank impedance. The tank presents $R_P$ only near resonance; at harmonics its impedance is much smaller because $C_P$ shunts the current: $Z(n\omega_0) = R_P/[1 + jQ(n - 1/n)]$, e.g., $|Z(3\omega_0)| \approx 3R_P/(8Q)$. The 3rd-harmonic voltage relative to the fundamental is then about $(1/3)\cdot 3/(8Q) = 1/(8Q)$ (≈ 2.5% for Q = 5), versus ≈ 33% in the current; higher harmonics are suppressed even more.
- Hence the voltages stay nearly sinusoidal (centered at $V_{DD}$, since the inductors carry the dc current with no dc drop) while the currents become nearly rectangular. Early in the build-up both are small sinusoids because the pair is still linear.

## Grading notes

+2: both elements: (1) the currents are distorted because the differential pair limits/switches (currents clipped between 0 and $I_{SS}$, approaching square waves), and (2) the LC tank is frequency-selective, presenting high impedance ($R_P$) only at the fundamental and low impedance at the harmonics, so the voltage harmonics are strongly attenuated. A quantitative estimate is not required. +1: the filtering argument made correctly but the cause of current distortion not explained (or the reverse, with the filtering stated only vaguely). 0: a partly correct but incomplete explanation (e.g., "the tank filters" with no reason why the currents are distorted and no mention of selectivity). -2 (asserted as fact): voltages sinusoidal "because the transistors stay linear", the tank said to amplify or pass harmonics equally, the currents claimed to be sinusoidal too, or the effect attributed to the inductor alone acting as an integrator with no resonance argument.
