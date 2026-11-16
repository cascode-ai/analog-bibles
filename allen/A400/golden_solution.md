# Golden Solution - A400

## Reference answer

$\tau_L \approx 0.050$ ns. For $\Delta V_i = 0.01(V_{OH}-V_{OL})$: 0.23 ns to full swing, $t_p \approx 0.195$ ns. For $\Delta V_i = 0.1(V_{OH}-V_{OL})$: 0.115 ns to full swing, $t_p \approx 0.080$ ns.
- $g_m = \sqrt{2\cdot110\cdot10\cdot50}\ \mu\mathrm{S} = 332\ \mu$S; $g_mR = 332\ \mu\mathrm{S}/(0.04\cdot50\ \mu\mathrm{A}) = 166 \gg 1$.
- $\tau_L = C/g_m = 16.5\ \mathrm{fF}/332\ \mu\mathrm{S} = 0.0499$ ns (smaller than at 10 µA by $\sqrt5$).
- Full swing: $t = \tau_L\ln(1/x)$: $4.61\tau_L = 0.23$ ns, $2.30\tau_L = 0.115$ ns.
- Propagation delay: $t_p = \tau_L\ln(0.5/x)$: $3.91\tau_L = 0.195$ ns, $1.61\tau_L = 0.080$ ns.

## Grading notes

+2: $\tau_L$ ≈ 0.048–0.050 ns and the four times within ±5 % (0.23, 0.195, 0.115, 0.080 ns). +1: the propagation delays right but the full-swing times missing (or vice versa), or one slip. 0: correct method with $\tau_L$ not rescaled for the new current (using the 10 µA value). −2 (asserted as fact): $\tau_L$ claimed to scale as $1/I$ (giving ≈ 0.022 ns) or to increase with current, times in the hundreds of ns, or a decaying exponential.
