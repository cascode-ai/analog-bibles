# Golden Solution - G299

## Reference answer

$R_2 = 100$ Ω, $R_1 = 0.1$ Ω, $L = 3.18$ mH. $|z_o|$ ≈ 0.1 Ω up to 5 Hz, rises at +20 dB/dec between 5 Hz and ≈ 5 kHz, and levels off at 100 Ω above ≈ 5 kHz.

Derivation:
- Loop gain $T(s) = \dfrac{T_0}{1 + s/\omega_p}$ with $T_0 = a_0 f = 1000$, $\omega_p = 2\pi \times 5$ Hz = 31.4 rad/s.
- Shunt sampling at the output: $z_o = \dfrac{r_o}{1 + T(s)}$, so the output admittance is
$Y_o = \dfrac{1 + T(s)}{r_o} = \dfrac{1}{r_o} + \dfrac{T_0}{r_o(1 + s/\omega_p)} = \dfrac{1}{R_2} + \dfrac{1}{R_1 + sL}$,
which is exactly $R_2$ in parallel with ($R_1$ in series with $L$), with
$R_2 = r_o = 100$ Ω, $R_1 = r_o/T_0 = 0.1$ Ω, $L = r_o/(T_0\,\omega_p) = 100/(1000 \times 31.4) = 3.18$ mH.
- Equivalently $z_o = r_o\dfrac{1 + s/\omega_p}{(1+T_0) + s/\omega_p}$: a zero at 5 Hz and a pole at $(1+T_0) \times 5$ Hz ≈ 5.0 kHz.
- Values of $|z_o|$: 1 Hz 0.102 Ω; 5 Hz 0.141 Ω; 50 Hz 1.0 Ω; 500 Hz 9.9 Ω; 1 kHz 19.6 Ω; 5 kHz 70.7 Ω; 10 kHz 89 Ω; 100 kHz 99.9 Ω. The output looks inductive between 5 Hz and 5 kHz because the loop gain falls with frequency.

## Grading notes

+2: the admittance (or impedance) derivation showing the R2 ∥ (R1 + sL) form, element values $R_2 = 100$ Ω, $R_1 ≈ 0.1$ Ω (0.0999 also fine), $L ≈ 3.2$ mH (±5%), and a sketch with the 0.1-Ω floor, the rise starting at 5 Hz, the 20 dB/dec slope and the 100-Ω plateau above ≈ 5 kHz. +1: values right but the "show that" step missing or hand-waved, or the sketch break points slightly off. 0: correct $z_o = r_o/(1+T)$ but element values wrong by a slip. −2 (asserted as fact): output impedance multiplied by $(1+T)$, an inductance that is not proportional to $1/(T_0\omega_p)$ (e.g. $L = r_o/\omega_p$ = 3.2 H), or a capacitive output impedance.
