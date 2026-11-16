# Golden Solution - R569

## Reference answer

$V_X$ is a 100-MHz sinusoid with a peak amplitude of ≈ 62 mV (0.0624 V), leading $V_{in}$ by ≈ 86° (nearly 90°). Node X behaves like the output of a differentiator, $V_X \approx (C_1/G_m)\,dV_{in}/dt$, because 100 MHz is far below the pole at ≈ 1.6 GHz.

- $H(j\omega) = j\omega R_{out}C_1/(1 + G_mR_{out} + j\omega R_{out}C_1)$, with $\omega R_{out}C_1 = 2\pi(10^8)(20\ \mathrm{k\Omega})(1\ \mathrm{pF}) = 12.57$ and $1 + G_mR_{out} = 201$.
- $|H| = 12.57/\sqrt{201^2 + 12.57^2} = 0.0624$; $\angle H = 90° - \arctan(12.57/201) = 86.4°$.
- For $V_{in} = 1\ \mathrm{V}\cdot\sin\omega t$: $V_X(t) = 62.4\ \mathrm{mV}\cdot\sin(\omega t + 86.4°)$, centered on the op amp's dc level (0 V).
- So the "virtual ground" carries a 62-mV ripple, and the voltage across $C_1$ ($V_{in} - V_X$) has an amplitude of 0.998 V and lags $V_{in}$ by ≈ 3.6°.

## Grading notes

+2: a 100-MHz sinusoid with an amplitude of 60–65 mV and a phase lead of ≈ 86° (a stated lead of "≈ 90°" is accepted when the amplitude is right). +1: amplitude right but phase not given, or the approximate $\omega C_1/G_m$ = 63 mV with the phase stated as exactly 90°. 0: correct transfer function with an arithmetic error in the amplitude. -2 (asserted as fact): X treated as an ideal virtual ground (no waveform), an amplitude near 1 V, or a lagging or inverted waveform.
