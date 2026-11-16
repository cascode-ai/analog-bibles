# Golden Solution - A404

## Reference answer

$\Delta V_{out}(t) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}\left(e^{t/\tau_L}-1\right)$ with $\tau_L = C/g_{m3}$; $t_p = \tau_L\ln 6 \approx 17.9$ ns.
- KCL on the differential half circuit (output conductances neglected): $sC\,\Delta V_{out} = g_{m3}\Delta V_{out} + g_{m1}\Delta V_{in}$, so $\Delta V_{out}(s) = \dfrac{g_{m1}\Delta V_{in}(s)}{sC-g_{m3}}$.
- Step input $\Delta V_{in}/s$: $\Delta V_{out}(s) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}\left[\dfrac{1}{s-g_{m3}/C}-\dfrac1s\right]$ → $\Delta V_{out}(t) = \dfrac{g_{m1}}{g_{m3}}\Delta V_{in}(e^{g_{m3}t/C}-1)$.
- Numbers: $\tau_L = 1\ \mathrm{pF}/100\ \mu\mathrm{S} = 10$ ns, $g_{m1}/g_{m3} = 10$. Setting $10\times0.01(V_{OH}-V_{OL})(e^{t/\tau_L}-1) = 0.5(V_{OH}-V_{OL})$: $e^{t/\tau_L} = 6$, $t_p = 10\ \mathrm{ns}\times\ln 6 = 17.9$ ns.

## Grading notes

+2: the expression $(g_{m1}/g_{m3})\Delta V_{in}(e^{t/\tau}-1)$, $\tau$ = 10 ns, and $t_p$ ≈ 17.9 ns (±5 %). +1: correct expression with a slip in $t_p$, or $t_p$ right with the expression missing the "−1" term but stated as an approximation ($\tau\ln 5$ = 16.1 ns). 0: right method with the input treated as an initial voltage across the capacitors ($t = \tau\ln 50$ = 39 ns) explicitly. −2 (asserted as fact): time constant taken as $C/g_{m1}$ (1 ns), decaying exponential, or a delay obtained from an amplifier (non-regenerative) model.
