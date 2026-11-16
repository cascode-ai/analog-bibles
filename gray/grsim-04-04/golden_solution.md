# Golden Solution - grsim-04-04

## Reference answer

Expression: let $f = R_1/(R_1 + r_d)$ be the fraction of the base-current variation of $Q_2$ that flows down through the diode stack $Q_4$–$Q_3$ (small-signal resistance $r_d \approx 1/g_{m4} + 1/g_{m3} \approx 2/g_m$) rather than into $R_1$. That current is mirrored by $Q_3$–$Q_1$ into the emitter of $Q_2$, so $i_{e2} = f\,i_t/(1+f)$ and $i_{b2} \approx -i_t/(1+f)$, giving
$R_o \approx r_{o2}\left[1 + \dfrac{\beta_0}{1 + f}\right] \approx \dfrac{\beta_0r_{o2}}{1 + f}$.
For $R_1 \to \infty$, $f \to 1$ and $R_o \to \beta_0r_o/2$; for $R_1 \to 0$, $R_o \to \beta_0r_o$.

Numbers: $I_{IN} = (5 - 2V_{BE})/10\ \mathrm{k\Omega} = 0.370$ mA ($V_{BE} \approx 0.651$ V); with finite $\beta_F$, $I_{OUT} = I_{IN}\left[1 - \dfrac{4\beta_F + 2}{\beta_F^2 + 4\beta_F + 2}\right] = 0.363$ mA; $r_{o2} = V_A/I_{OUT} = 358$ kΩ; $r_d \approx 2(26\ \mathrm{mV}/0.37\ \mathrm{mA}) = 140$ Ω, $f = 0.986$; $R_o \approx 200\times358\ \mathrm{k}/1.986 \approx 36$ MΩ (≈ $\beta_0r_o/2$).
Minimum output voltage: $V_{OUT(\min)} = V_{CE1} + V_{CE2(\text{sat})} \approx V_{BE(\text{on})} + V_{CE(\text{sat})} \approx 0.65 + 0.2 \approx 0.85$–0.9 V; below this $Q_2$ saturates and $R_o$ collapses.
$\beta_F$ sensitivity: $\beta_F$ = 200 → 100 changes the gain error from −1.97 % to −3.87 %, so $I_{OUT}$ falls from 0.363 mA to 0.356 mA (≈ −1.9 %).
$I_{OUT}$–$V_{OUT}$: near zero current at $V_{OUT} = 0$, rising steeply while $Q_2$ (and near zero also $Q_1$) is saturated, a knee near 0.85–0.9 V, then nearly flat at ≈ 0.36 mA with slope ≈ 1/36 MΩ (≈ 0.03 µA/V).

## Grading notes

A correct answer derives an $R_o$ expression that tends to $\beta_0r_o/2$ for large $R_1$ (and to ≈ $\beta_0r_o$ for $R_1 \to 0$), gives $R_o$ ≈ 33–40 MΩ for the stated bias, $V_{OUT(\min)}$ ≈ 0.8–1.0 V, and a −50 % $\beta_F$ change lowering $I_{OUT}$ by roughly 2 %. A correct simulation shows $I_{OUT}$ ≈ 0.36 mA, a flat region above ≈ 0.9 V with an incremental resistance in the tens of MΩ (within ±15 % of the hand value), and $I_{OUT}$ about 2 % lower with BF = 100. Claiming $R_o = \beta_0r_o$ for large $R_1$ or $R_o \approx r_o$ is wrong.
