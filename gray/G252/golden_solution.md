# Golden Solution - G252

## Reference answer

$\mathcal{R} \approx 6.17\times10^4$, $v_o/i_i \approx -99.998$ kΩ, $R_{in} \approx 1.35$ Ω, $R_{out} \approx 3.2$ mΩ.

- $\mathcal{R}$: with $i_i = 0$ (open), a test voltage $v_t$ in place of $a_v(\cdot)$ drives $R_o$ into $R_L \| (R_F + R_i)$: the output is $v_t \cdot \frac{14.634}{14.834} = 0.9865 v_t$, and $v_- = v_o\,R_i/(R_i+R_F) = 0.8333 v_o$. So $\mathcal{R} = a_v \times 0.9865 \times 0.8333 = 61{,}657$.
- $A_\infty = -R_F = -100$ kΩ (with $a_v \to \infty$ the inverting input is a virtual ground and $i_i$ flows through $R_F$).
- $d$ ($a_v = 0$): $i_i$ develops $v_- = i_i[R_i\|(R_F + R_o\|R_L)] = 83.47\text{k}\,i_i$, and $v_o = v_-\,\frac{R_o\|R_L}{R_F + R_o\|R_L} = 164.4\ \Omega \cdot i_i$; $d = +164$ Ω.
- $A = -100\text{k}\times\frac{61{,}657}{61{,}658} + \frac{164}{61{,}658} = -99{,}998$ Ω.
- $R_{in}$: $R_{in}(a_v{=}0) = R_i\|(R_F + R_o\|R_L) = 83.47$ kΩ; $\mathcal{R}$(input shorted) = 0; $\mathcal{R}$(input open) = 61,657; $R_{in} = 83.47\text{k}/61{,}658 = 1.354$ Ω.
- $R_{out}$: $R_{out}(a_v{=}0) = R_o\|R_L\|(R_F+R_i) = 197.3$ Ω; $\mathcal{R}$(output shorted) = 0; $\mathcal{R}$(output open, $R_L$ kept) = 61,657; $R_{out} = 3.20$ mΩ.
These agree with exact nodal analysis.

## Grading notes

+2: $\mathcal{R}$ ≈ 61,660 (±2%), gain ≈ −100 kΩ, $R_{in}$ ≈ 1.35 Ω, $R_{out}$ ≈ 3.2 mΩ, with $A_\infty$, $d$ and Blackman's formula used correctly (stating that $d/(1+\mathcal R)$ is negligible is fine). +1: one quantity off by a slip, or $d$ omitted with a correct statement that it is negligible but not computed. 0: two of four quantities right. −2 (asserted as fact): $A_\infty$ with the wrong sign, Blackman's ratio inverted, or $\mathcal{R}$ off by an order of magnitude.
