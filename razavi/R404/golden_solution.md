# Golden Solution - R404

## Reference answer

It equals the input-referred noise of the op amp itself (the capacitive feedback network is noiseless and does not change it):
$\overline{V_{n,in}^2} = \dfrac{8kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m3}}{g_{m1}}\right) + \dfrac{2K_N}{C_{ox}(WL)_1f} + \dfrac{2K_P}{C_{ox}(WL)_3f}\left(\dfrac{g_{m3}}{g_{m1}}\right)^2$ (γ = 2/3 for long-channel devices), independent of $C_1$ and $C_2$.

- Op amp: $M_1$, $M_2$ contribute $2\cdot 4kT\gamma/g_{m1}$ directly; the noise currents of $M_3$, $M_4$ ($4kT\gamma g_{m3}$ each) reach the output like signal currents and are referred to the input by dividing by $g_{m1}^2$; flicker noise follows the same pattern. The tail current source's noise is common-mode and negligible.
- Closed loop: $V_{out} = A_0(V_{in} + V_n - \beta V_{out})$ → $V_{out} = (V_{in} + V_n)A_0/(1 + \beta A_0)$, so the circuit's input-referred noise is $V_n$; the output noise is $V_n$ times the closed-loop gain ≈ $1 + C_2/C_1$.
- Example: with $(W/L)_{1,2} = 50/0.5$, $(W/L)_{3,4} = 100/0.5$ and $I_{SS} = 1$ mA ($g_{m1} = 3.66$ mS, $g_{m3} = 2.77$ mS), the thermal part is ≈ $1.06\times 10^{-17}\ \mathrm{V^2/Hz}$ (3.3 nV/√Hz) at 300 K.

## Grading notes

+2: states that the capacitive feedback adds no noise and the input-referred noise equals the op amp's, with the thermal term $(8kT\gamma/g_{m1})(1 + g_{m3}/g_{m1})$ and flicker terms of the right form. +1: correct conclusion and thermal term, flicker terms missing or with a slip; or the correct op-amp expressions obtained by treating $C_1$, $C_2$ as open (dropping the feedback loop, e.g. taking the gate of $M_2$ as a quiet bias) without the closed-loop argument. 0: correct conclusion but an op-amp noise expression wrong in one term (e.g. the factor 2 for the pair missing, or the mirror noise not scaled by $g_{m3}/g_{m1}$). -2 (asserted as fact): input-referred noise claimed reduced (or multiplied) by the loop gain or by $1 + C_2/C_1$, noise attributed to the capacitors, or the mirror transistors' noise added without referral.
