# Golden Solution - G344

## Reference answer

$S_o(f) = (r_d\parallel R)^2\left[2qI_D\left(1+\dfrac{f_c}{f}\right) + \dfrac{4kT}{R}\right] \approx 4.65\times10^{-19}\left(1+\dfrac{938\text{ Hz}}{f}\right)$ V²/Hz.

- Bias: $I_D = 0.465$ mA, $r_d = 55.9\ \Omega$, $r_d\parallel 20\text{ k} = 55.8\ \Omega$.
- Flicker/shot corner: $K_1I_D/f = 2qI_D$ at $f_c = K_1/2q = 937.5$ Hz (independent of $I_D$ because $a = 1$).
- Values: 1 Hz: $4.3\times10^{-16}$; 10 Hz: $4.4\times10^{-17}$; 100 Hz: $4.8\times10^{-18}$; 1 kHz: $9.0\times10^{-19}$; 10 kHz: $5.1\times10^{-19}$; 100 kHz–10 MHz: ≈ $4.65\times10^{-19}$ V²/Hz.
- Plot (log–log): a straight line of slope −1 (−10 dB/decade in power) from $4.3\times10^{-16}$ V²/Hz at 1 Hz down to the corner near 940 Hz (where the density is 2× the white level), then flat at $4.65\times10^{-19}$ V²/Hz out to 10 MHz (no capacitance, so no high-frequency roll-off).

## Grading notes

+2: white level ≈ $4.65\times10^{-19}$ V²/Hz (±10%), corner ≈ 940 Hz (±10%), 1/f slope below it with ≈ $4.3\times10^{-16}$ V²/Hz at 1 Hz, flat to 10 MHz. +1: correct shape and corner but one level off by a slip, or the corner right but the white level computed without the $r_d$ shunting detail (within 10%). 0: correct white level but the flicker term mishandled (e.g., corner wrong by a factor > 2 through an arithmetic slip) with otherwise sound method. −2 (asserted as fact): a 1/f² flicker slope, a high-frequency roll-off invented without capacitance, flicker noise scaled as $I_D^2$, or the diode treated as a noisy resistor $4kTr_d$.
