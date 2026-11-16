# Golden Solution - grsim-07-36

## Reference answer

Bias: $I_{\text{REF}} = 5.4\ \mathrm{V}/11\ \mathrm{k\Omega} = 0.491$ mA; $I_{C4} = 0.491\ \mathrm{V}/2.5\ \mathrm{k\Omega} = 0.196$ mA → $I_{C1} = I_{C2} = 98\ \mu$A; $V_{C2} = 6 - 1.23 = 4.77$ V; $Q_3$: $I_{E3} = (6 - 5.37)/1\ \mathrm{k\Omega} = 0.627$ mA, $I_{C3} = 0.621$ mA, $V_O \approx 0.2$ V dc.

Small signal: $g_{m2} = 3.78$ mA/V, $r_{\pi2} = 53\ \mathrm{k\Omega}$, $C_{\pi2} = 4.18$ pF; $g_{m3} = 23.9$ mA/V, $r_{\pi3} = 4.19\ \mathrm{k\Omega}$, $\tau_{F,pnp} = 26.4$ ns → $C_{\pi3} = 633$ pF.

Gain: $Q_3$ input resistance $R_{i3} = r_{\pi3} + (\beta+1)(1\ \mathrm{k}) = 105\ \mathrm{k\Omega}$; first stage (half-circuit, $Q_2$ side): $g_{m2}(12.5\ \mathrm{k}\|R_{i3})\,r_{\pi2}/(r_{\pi2} + 10\ \mathrm{k}) = 35.4$; second stage $-\beta(10\ \mathrm{k})/R_{i3} = -9.53$; with $\pm v_i/2$ on the two sides, $v_o/v_i = -35.4\times9.53/2 \approx -169$.

Zero-value time constants (half-circuit on the $Q_2$/$Q_3$ side): $C_{\pi2}$: 8.41 kΩ → 35 ns; $C_{\mu2}$: 374 kΩ → 112 ns; $C_{cs2}$ and $C_{bs3}$: $12.5\ \mathrm{k}\|R_{i3} = 11.2\ \mathrm{k\Omega}$ → 16.8 ns each; $C_{\pi3}$: $r_{\pi3}\|$(emitter-side resistance) ≈ 480 Ω → 304 ns; $C_{\mu3}$: 127 kΩ → 38 ns. $T_0 = 523$ ns → $f_{-3\text{dB}} \approx 0.30$ MHz; the slow lateral $pnp$ ($C_{\pi3}$) is the largest contributor.

Expected simulation (full circuit with these linear parameters): gain ≈ −169 (44.5 dB), first pole ≈ 0.36 MHz, second ≈ 1.6 MHz (followed by poles near 19 and 56 MHz), −3 dB ≈ 0.35 MHz. (Because only one side of the first pair drives the second stage, the half-circuit is approximate; it gives 0.33 MHz and 4.6 MHz for the first two poles.)

## Grading notes

Hand part: +2 needs gain ≈ −170 (±10%) and a zero-value estimate ≈ 0.3 MHz (0.27–0.34) with $C_{\pi3}$ and $C_{\mu2}$ as the main terms. A correct simulation reports a first pole ≈ 0.35 MHz and a second pole in the low-MHz range (≈ 1.5–5 MHz depending on whether the full circuit or a half-circuit is simulated); the student must note that the zero-value estimate approximates the first pole only. −2 (asserted as fact): the pnp treated with the npn transit time (gigahertz-range bandwidth), the second stage taken as non-inverting, or the first two poles claimed to coincide.
