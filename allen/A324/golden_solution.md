# Golden Solution - A324

## Reference answer

One valid design: $I_1 = I_5 = 100\ \mu$A with $W_1/L_1 = 50$; $I_2 = I_6 = 11\ \mu$A with $W_2/L_2 = 5.5$; with $I_{BIAS} = 100\ \mu$A and $W_4/L_4 = 50$: $W_5/L_5 = 50$, $W_6/L_6 = 5.5$ (all L = 1 µm).

- Input: $R_{in} = 1/(g_{m1} + g_{ds1} + g_{ds5}) \approx 1/g_{m1}$. $R_{in} < 1$ kΩ needs $g_{m1} > 1$ mS, i.e., $(W_1/L_1)I_1 \ge g_{m1}^2/(2K'_N) = 4.55\times10^{-3}$ A. Choose $I_1$ = 100 µA, $W_1/L_1$ = 50: $g_{m1} = \sqrt{2(110\ \mu)(50)(100\ \mu)} = 1.049$ mS, $R_{in} = 1/(1.049\ \mathrm{m} + 9\ \mu) = 945\ \Omega$.
- Output: $R_{out} = 1/(g_{ds2} + g_{ds6}) = 1/[(\lambda_N + \lambda_P)I_2] \ge 1$ MΩ needs $I_2 \le 1/(0.09\times10^6) = 11.1\ \mu$A. Choose $I_2$ = 11 µA: $R_{out}$ = 1.01 MΩ.
- Mirror ratio $W_2/L_2 = (W_1/L_1)(I_2/I_1) = 50\times0.11 = 5.5$.
- Current sources supply the dc currents: $I_5 = I_1$, $I_6 = I_2$, so $(W_5/L_5):(W_6/L_6):(W_4/L_4) = I_1 : I_2 : I_{BIAS}$; with $I_{BIAS}$ = 100 µA and $W_4/L_4$ = 50: 50 and 5.5.
- The design shows the trade-off: a low $R_{in}$ needs a large $g_{m1}$ (current), while a high $R_{out}$ needs a small output current, so the mirror must be scaled down about 9:1.
- On the parenthetical gain: R2 feeds the output back to M1's drain, so with mirror ratio $K = I_2/I_1$ the gain to the M2/M6 drain is $\dfrac{R_{out}(1 - Kg_{m1}R_2)}{R_1 + R_2 + R_{out} + g_{m1}R_1[R_2 + (1+K)R_{out}]}$, which tends to $-\dfrac{K}{1+K}\dfrac{R_2}{R_1}$ (≈ −10 for K ≈ 1/9) only for $R_{out} \to \infty$ and $g_{m1}R_1 \gg 1$. At the specification limits ($R_{out}$ ≈ 1 MΩ ≈ $R_2$, $g_{m1}R_1$ ≈ 10) this design gives about −4.8. The design asked for does not depend on this.

## Grading notes

Accept any design that meets both specifications with correct supporting calculations. The gain of −10 in the question's parenthesis is the book's ideal-limit figure and is not graded: choosing the mirror ratio from it (e.g. K ≈ 0.1 from $A_v \approx -KR_2/R_1$) is fine when both specifications are met, repeating it is not a false claim, and pointing out that the actual gain at these resistance values is lower (≈ −5) is correct. +2: $g_{m1}$ ≥ ≈ 1 mS (e.g., $(W_1/L_1)I_1$ ≥ 4.5 mA·(W/L units)) giving $R_{in}$ < 1 kΩ, $I_2$ ≤ 11.1 µA giving $R_{out}$ ≥ 1 MΩ with $r_{ds2}\|r_{ds6}$, consistent mirror ratio $W_2/L_2 = (W_1/L_1)I_2/I_1$, and M5/M6 sized in proportion to the currents they must supply. +1: specifications met but one ratio (e.g., M5/M6) inconsistent or missing. 0: one specification met and the other violated through a slip. −2 (asserted as fact): a design claimed to meet both specs that does not (e.g., $I_2$ = 100 µA giving $R_{out}$ ≈ 111 kΩ, or $R_{out}$ computed from $r_{ds2}$ alone and then violated), or $R_{in}$ taken as $r_{ds1}$.
