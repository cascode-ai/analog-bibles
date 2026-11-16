# Golden Solution - A399

## Reference answer

≈ 0.44 ns for $\Delta V_i = 0.01(V_{OH}-V_{OL})$ and ≈ 0.18 ns for $\Delta V_i = 0.1(V_{OH}-V_{OL})$ (these are the latch propagation delays).
- $g_m = \sqrt{2\cdot110\cdot10\cdot10}\ \mu\mathrm{S} = 148\ \mu$S; $R = 1/(\lambda I) = 2.5$ MΩ, $g_mR = 370 \gg 1$.
- $C \approx \tfrac23(10\ \mu\mathrm{m})(1\ \mu\mathrm{m})(2.47\ \mathrm{fF/\mu m^2}) = 16.5$ fF; $\tau_L = C/g_m \approx 0.112$ ns.
- $\Delta V_{out}(t) = \Delta V_i\,e^{t/\tau_L}$ → $t = \tau_L\ln\dfrac{0.5(V_{OH}-V_{OL})}{\Delta V_i}$: $\tau_L\ln 50 = 3.91\tau_L = 0.44$ ns; $\tau_L\ln 5 = 1.61\tau_L = 0.18$ ns.

## Grading notes

+2: $\tau_L$ ≈ 0.11 ns and times ≈ 0.42–0.45 ns and ≈ 0.17–0.19 ns. +1: correct method with $\tau_L$ off by a modelling slip used consistently (e.g., the 2/3 factor omitted, $\tau_L$ ≈ 0.17 ns, giving ≈ 0.65 ns and 0.27 ns). 0: right formula $t = \tau_L\ln(\cdot)$ but times to the full swing (0.51 and 0.26 ns) given instead. −2 (asserted as fact): a decaying exponential used for the latch, $\tau_L = RC$ (≈ 41 ns), or another wrong model giving times in the hundreds of ns. A correct derivation ($C$ ≈ 16.5 fF, $g_m$ ≈ 148 µS, $t = \tau_L\ln(\cdot)$) whose only error is a unit-conversion slip in $\tau_L$ (e.g., 111 ns instead of 0.111 ns, giving 434 ns and 179 ns) is a computational slip: score 0.
