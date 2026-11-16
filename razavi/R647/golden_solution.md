# Golden Solution - R647

## Reference answer

Each node swings sinusoidally about $V_{DD}$ with amplitude ≈ $(2/\pi)I_{SS}R_P \approx 80$ mV (≈ 160 mV peak-to-peak); the differential output $V_X - V_Y$ has amplitude ≈ $(4/\pi)I_{SS}R_P \approx 160$ mV (≈ 320 mV peak-to-peak).

Derivation:
- Equivalent parallel resistance of each tank: $R_P = Q\omega L_P = 4 \times 2\pi(10^9)(5\ \mathrm{nH}) \approx 126\ \Omega$ (series resistance $\omega L_P/Q = 7.85\ \Omega$; $R_P = (1 + Q^2)R_S = 134\ \Omega$ with the exact conversion).
- With the tail current fully switched, each drain current is a 0-to-1 mA square wave; its fundamental has amplitude $(2/\pi)(1\ \mathrm{mA}) = 0.64$ mA, and the tank (impedance $R_P$ at resonance, small at harmonics) converts it to $0.64\ \mathrm{mA} \times 126\ \Omega \approx 80$ mV per node; X and Y are opposite in phase, so the differential amplitude is ≈ 160 mV.
- Remarks: the swing is small because the low Q makes $R_P$ small. Start-up needs $g_mR_P \ge 1$, i.e., $g_m \ge 8$ mS at 0.5 mA per device (a large W/L, overdrive ≈ 0.13 V); complete switching then needs $|V_X - V_Y| \gtrsim \sqrt2 \times 0.13 \approx 0.18$ V, comparable to the estimate, so the real swing may be somewhat smaller, and varactor and transistor losses would reduce it further.

## Grading notes

+2: $R_P$ ≈ 126 Ω (120–135 Ω) and a swing estimate from the fundamental of the switched tail current: ≈ 80 mV single-ended amplitude or ≈ 160 mV differential amplitude (or the corresponding peak-to-peak values), clearly labeled; ±15%. +1: correct $R_P$ with a cruder estimate that drops the Fourier factor but keeps a current amplitude within the 0-to-$I_{SS}$ range: a differential amplitude (or single-ended peak-to-peak) of ≈ $I_{SS}R_P$ ≈ 126 mV, or a single-ended amplitude of ≈ $(I_{SS}/2)R_P$ ≈ 63 mV, clearly labeled; or a correct estimate whose single-ended/differential or peak/peak-to-peak meaning is unclear. 0: correct $R_P$ without a usable swing estimate. This includes a single-ended amplitude of $I_{SS}R_P$ ≈ 126 mV (≈ 250 mV differential amplitude), which takes the fundamental of a 0-to-$I_{SS}$ current as $I_{SS}$ (impossible: at most $(2/\pi)I_{SS}$), and a swing equated to an overdrive voltage without a current-times-tank-impedance argument. -2 (asserted as fact): tank resistance taken as $\omega L/Q$ (≈ 7.9 Ω) or $Q^2\omega L$, swings of a few mV or of order 1 V, or a rail-to-rail swing claimed.
