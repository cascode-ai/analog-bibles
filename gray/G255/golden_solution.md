# Golden Solution - G255

## Reference answer

$v_o/i_i \approx -10.0$ kΩ (−9999.97 Ω), $T \approx 3.58\times10^5$, $Z_{in} \approx 9.6$ mΩ, $Z_{out} \approx 8.7$ mΩ.

- $g_m = 1\text{ mA}/26\text{ mV} = 38.46$ mS, $r_\pi = 200/g_m = 5.2$ kΩ, $r_o = 50$ kΩ.
- Basic amplifier with $R_F$ loading: input node $R_F\|r_{\pi1} = 10\text{k}\|5.2\text{k} = 3421$ Ω; loads of $Q_1$, $Q_2$: $5\text{k}\|50\text{k}\|r_\pi = 2425$ Ω (gain $-g_m\cdot2425 = -93.3$ each); load of $Q_3$: $5\text{k}\|50\text{k}\|10\text{k} = 3125$ Ω (gain $-120.2$).
- $a = -3421\times93.3^2\times120.2 = -3.58\times10^9$ Ω; $T = a(-1/R_F) = 3.58\times10^5$.
- $A = a/(1+T) = -9999.97$ Ω; $Z_{in} = 3421/(1+T) = 9.56$ mΩ; $Z_{out} = 3125/(1+T) = 8.73$ mΩ.

## Grading notes

+2: all four within ±5% with $r_\pi$ loading of each following stage and $r_o$ included. +1: one value off by a slip, or $r_o$ neglected (T ≈ 4.2×10⁵, $Z_{in}$ ≈ 8.1 mΩ, $Z_{out}$ ≈ 7.9 mΩ) with an otherwise correct method. 0: two of four correct, e.g. $r_\pi$ loading of the next stages omitted. −2 (asserted as fact): positive gain, impedances multiplied by $(1+T)$, or $T$ off by more than an order of magnitude.
