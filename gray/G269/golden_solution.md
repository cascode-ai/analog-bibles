# Golden Solution - G269

## Reference answer

$R_{out} \approx 74$ GΩ ($7.4\times10^{10}$ Ω); $v_o/v_i \approx -4.9\times10^7$.

- $g_m = 2I_D/V_{ov} = 2(100\ \mu\text{A})/0.3 = 0.667$ mS; $r_o = 1/(0.03\times100\ \mu\text{A}) = 333$ kΩ; $g_mr_o = 222$.
- Blackman with $k = a$: $R_{out}(a{=}0) = r_{o1} + r_{o2} + g_{m2}r_{o2}r_{o1} = 74.7$ MΩ.
- $\mathcal{R}$(output shorted): a test voltage at the gate of $M_2$ makes $M_2$ a source follower into $r_{o1}\|r_{o2}$: $v_s = v_t\,g_{m2}/(g_{m2} + 2/r_o)$, so $\mathcal{R} = a\,g_{m2}/(g_{m2}+2/r_o) = 991$.
- $\mathcal{R}$(output open): no current can flow in $M_2$, so the source node does not move: $\mathcal{R} = 0$.
- $R_{out} = 74.7\text{ M}\times(1+991)/1 = 74.1$ GΩ $\approx (1+a)g_{m2}r_{o2}r_{o1} + r_{o1} + r_{o2}$.
- Gain (ideal current-source load, so the output is open): $v_o/v_i = -G_mR_{out}$ with $G_m \approx g_{m1}$, or exactly $-g_{m1}r_{o1}[1 + (1+a)g_{m2}r_{o2}] = -222\times(1 + 1001\times222) = -4.94\times10^7$.

## Grading notes

+2: $R_{out}$ ≈ 7.4×10¹⁰ Ω (±5%) obtained with Blackman's formula (port-open return ratio 0, port-shorted ≈ 991 or ≈ $a$) and gain ≈ −4.9×10⁷ (±5%). +1: both right in form with one numeric slip, or $(1+a)$ replaced by $a$ (0.1% difference — fine), or both values right but $R_{out}$ obtained without Blackman's formula (e.g. a test-source nodal analysis, or the cascode formula with $g_{m2}$ replaced by $(1+a)g_{m2}$, with no port-shorted/port-open return ratios). $g_m$ must follow from the given $I_D$ and $V_{ov}$ ($g_m = 2I_D/V_{ov}$); taking $g_m = k'_nV_{ov}$ (i.e. $W/L = 1$, which contradicts $I_D = 100$ μA) is a critical error that makes both values wrong. 0: $R_{out}$ right but gain missing/wrong, or vice versa. −2 (asserted as fact): $R_{out}$ ≈ $g_mr_o^2$ only (feedback ignored), Blackman's ratio inverted, or a positive (non-inverting) voltage gain.
