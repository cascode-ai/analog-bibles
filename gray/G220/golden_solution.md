# Golden Solution - G220

## Reference answer

$v_o/i_i \approx +5.7$ MΩ ($i_i$ drawn out of the base raises $v_o$); $T_0 \approx 3.46\ \mu$s → $f_{-3\text{dB}} \approx 46$ kHz.

Bias: $I_C = (10 - 0.7)\ \mathrm{V}/30\ \mathrm{k\Omega} = 0.31$ mA in all three transistors; $g_m = 11.9$ mA/V; $r_{\pi1} = 4.19\ \mathrm{k\Omega}$ ($pnp$), $r_{\pi2} = r_{\pi3} = 8.39\ \mathrm{k\Omega}$; $r_{o1} = 50/0.31\ \mathrm{mA} = 161\ \mathrm{k\Omega}$, $r_{o2} = 387\ \mathrm{k\Omega}$; $R_{\text{out}} = r_{o1}\|r_{o2} = 114\ \mathrm{k\Omega}$.

Capacitances: $npn$ $\tau_F = (12.24 - 0.7 - 3)\ \mathrm{pF}/38.5\ \mathrm{mA/V} = 222$ ps → $C_{\pi2} = C_{\pi3} = 5.65$ pF; $pnp$ $\tau_F = (765.2 - 1 - 3)\ \mathrm{pF}/19.2\ \mathrm{mA/V} = 39.6$ ns → $C_{\pi1} = 475$ pF. Reverse voltages: $C_{\mu1}$ (9.3 V) = 0.236 pF, $C_{bs1}$ (19.3 V) = 0.333 pF, $C_{\mu2}$ (9.3 V) = 0.165 pF, $C_{cs2}$ (10 V) = 0.457 pF, $C_{cs3}$ (0.7 V) = 1.33 pF; $C_{\mu3}$ is shorted.

Transresistance: all of $i_i$ flows through $r_{\pi1}$, so $i_{c1} = \beta_1 i_i$ into the output: $v_o/i_i = \beta_1R_{\text{out}} = 50\times113.9\ \mathrm{k\Omega} = 5.69$ MΩ.

Zero-value time constants:
- $C_{\pi1}$: $r_{\pi1} = 4.19\ \mathrm{k\Omega}$ → 1.99 µs; $C_{bs1}$: 4.19 kΩ → 1.4 ns.
- $C_{\mu1}$: $r_{\pi1} + R_{\text{out}} + g_mR_{\text{out}}r_{\pi1} = 5.81$ MΩ → 1.37 µs.
- $C_{cs2}$: $R_{\text{out}}$ → 52 ns.
- $C_{\mu2}$: the $Q_2$/$Q_3$ base node sees $1/g_{m3}\|r_{\pi2}\|r_{\pi3}\|30\ \mathrm{k\Omega} \approx 82\ \Omega$, so $R = 82 + R_{\text{out}} + g_mR_{\text{out}}(82) = 225\ \mathrm{k\Omega}$ → 37 ns.
- $C_{\pi2}$, $C_{\pi3}$, $C_{cs3}$ at that node: 82 Ω → ≈ 1 ns total.
- $T_0 = 3.46\ \mu$s → $f_{-3\text{dB}} = 46$ kHz (exact analysis: 47 kHz). The slow lateral $pnp$ ($C_{\pi1}$) and the Miller effect on $C_{\mu1}$ dominate.

## Grading notes

+2: transresistance ≈ +5.7 MΩ (±10%) for $i_i$ in the direction shown (drawn out of the base; a negative value is right only if the answer defines $i_i$ into the base) and $f_{-3\text{dB}}$ ≈ 40–52 kHz with $C_{\pi1}$ and $C_{\mu1}$ identified as the dominant contributors. Small differences from a different $V_{BE(\text{on})}$ or from including base currents are fine. +1: one dominant term off by < 30% or the output resistance taken as $r_{o1}$ only. 0: transresistance right but the bandwidth wrong by > 2× (e.g., $C_{\pi1}$ taken as 3 pF), or the reverse. −2 (asserted as fact): transresistance computed with $r_o = \infty$ as infinite or as $\beta \times 30$ kΩ, $C_{\mu1}$ not Miller-multiplied together with $C_{\pi1}$ wrong by orders of magnitude, $Q_2$ treated as a diode load, or the $Q_1$ stage treated as non-inverting (so that $C_{\mu1}$ gets a negative, subtractive Miller resistance and the bandwidth comes out several times too high). A negative transresistance for the direction shown (a claim that $v_o$ falls when $Q_1$ conducts more) is a polarity error: critical.
