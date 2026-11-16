# Golden Solution - G066

## Reference answer

$r_o^c \approx 65$ kΩ for $I_{\text{BIAS}} = 1$ mA ($\approx r_{o1}\|r_{o2} = r_{o2}/2$) and $r_o^c \approx 87$ kΩ for $I_{\text{BIAS}} = 0$ ($\approx \tfrac{2}{3} r_{o2}$), with $r_{o2} = V_A/I_{C2} = 130$ kΩ.

General result (base of $Q_1$ at ac ground, test voltage $v_x$ at the collectors, node $b_2$ = emitter of $Q_1$ = base of $Q_2$):
$$\frac{1}{r_o^c} = \frac{1}{r_{o2}} + \frac{r_{\pi1} + r_{\pi2} + g_{m2} r_{\pi1} r_{\pi2}}{r_{o1}\left(r_{\pi1} + r_{\pi2} + g_{m1} r_{\pi1} r_{\pi2}\right) + r_{\pi1} r_{\pi2}} \approx \frac{1}{r_{o2}} + \frac{(\beta_0+1) r_{\pi1} + r_{\pi2}}{r_{o1}\left[r_{\pi1} + (\beta_0+1) r_{\pi2}\right]}.$$
Dependence on $I_{\text{BIAS}}$: $I_{C1} = \frac{\beta_0}{\beta_0+1}\left(I_{\text{BIAS}} + I_{C2}/\beta_F\right)$, and with $n = I_{C2}/I_{C1} = r_{\pi1}/r_{\pi2} = r_{o1}/r_{o2}$,
$$r_o^c \approx r_{o2} \,\Big\|\, r_{o2}\,\frac{n\,(n + \beta_0 + 1)}{(\beta_0+1)\,n + 1}.$$

Derivation: KCL at $b_2$: the emitter current of $Q_1$, $-g_{m1}v_{b2} - v_{b2}/r_{\pi1} + (v_x - v_{b2})/r_{o1}$, equals $v_{b2}/r_{\pi2}$, giving $v_{b2}$; then $i_x = [-g_{m1}v_{b2} + (v_x - v_{b2})/r_{o1}] + g_{m2}v_{b2} + v_x/r_{o2}$. The current through $r_{o1}$ reaches the base of $Q_2$ and is amplified, so $r_{o1}$ does not simply appear in parallel.

- $I_{\text{BIAS}} = 1$ mA: $I_{C1} \approx 1.0$ mA ($n \approx 1$): $g_{m1} = g_{m2} = 38.5$ mA/V, $r_{\pi1} = r_{\pi2} = 5.2$ kΩ, $r_{o1} = r_{o2} = 130$ kΩ. The second term is ≈ $1/r_{o1}$ (the $g_m$ terms cancel), so $r_o^c \approx 130\|130 = 65.0$ kΩ.
- $I_{\text{BIAS}} = 0$: $I_{C1} = 4.98\ \mu$A, $r_{\pi1} = 1.045$ MΩ $= (\beta_0+1) r_{\pi2}$, $r_{o1} = 26.1$ MΩ $\approx \beta_0 r_{o2}$; the second branch is $\approx 2 r_{o1}/(\beta_0+1) \approx 2 r_{o2}$ = 260 kΩ, so $r_o^c \approx 130\|260 = 86.7$ kΩ. (Half of the $r_{o1}$ current enters the base of $Q_2$ and is multiplied by $\beta_0$.)

## Grading notes

+2: both numerical values within ±4% (65 kΩ and 87 kΩ) and a correct general expression or a correct description of how $r_o^c$ depends on $I_{\text{BIAS}}$ (from $\tfrac{2}{3}r_{o2}$ at $I_{\text{BIAS}} = 0$ toward $r_{o1}\|r_{o2}$ as $I_{\text{BIAS}}$ grows, $r_{o1}$ itself falling as $I_{C1}$ rises). +1: both values right but the general dependence only sketched, or one value with a small slip. 0: one of the two values correct. −2 (asserted as fact): $r_o^c = r_{o2} = 130$ kΩ for both cases (feedback through $r_{o1}$ ignored), $r_o^c = r_{o1}\|r_{o2}$ with $r_{o1} = 26$ MΩ for $I_{\text{BIAS}} = 0$ (≈ 129 kΩ), or values from treating the base of $Q_1$ as open.
