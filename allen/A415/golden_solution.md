# Golden Solution - A415

## Reference answer

Enable the latch ≈ 3.16 ns after the step; minimum overall delay ≈ 4.64 ns (3.16 ns + 1.48 ns).
- Amplifier time constant $\tau_A = 1/(2\pi\cdot100\ \mathrm{MHz}) = 1.59$ ns; its output (normalized) $v_{il}(t) = 0.5(1-e^{-t/\tau_A})$.
- Total delay $T(t) = t + \tau_L\ln\dfrac{0.5}{v_{il}} = t - \tau_L\ln(1-e^{-t/\tau_A})$.
- $dT/dt = 0$: $1 = \dfrac{\tau_L}{\tau_A}\dfrac{e^{-t/\tau_A}}{1-e^{-t/\tau_A}}$ → $e^{-t/\tau_A} = \dfrac{\tau_A}{\tau_A+\tau_L} = 0.137$ → $t = \tau_A\ln(7.28) = 3.16$ ns.
- Then $v_{il} = 0.5(1-0.137) = 0.431(V_{OH}-V_{OL})$ and the latch delay is $10\ \mathrm{ns}\times\ln(0.5/0.431) = 1.48$ ns; minimum total 4.64 ns.

## Grading notes

+2: enable time ≈ 3.1–3.2 ns and minimum delay ≈ 4.6–4.7 ns, with $\tau_A = 1/(2\pi f_{-3dB})$ and an optimization of the sum. +1: correct optimization with $\tau_A$ taken as $1/f_{-3dB}$ = 10 ns (consistently), or one slip. 0: delays computed for a guessed enable time without optimizing, values within 20 %. −2 (asserted as fact): latch enabled at $t = 0$ claimed optimal, latch delay formula misapplied (e.g., growing with $v_{il}$), or the amplifier treated as an integrator.
