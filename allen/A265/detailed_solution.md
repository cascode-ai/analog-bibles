# Detailed solution - A265

Build the p-input version by complementing every device, so that the first-stage output still sits at the right dc level to drive the second stage. Then, with equal currents and aspect ratios, compare each performance measure through how it depends on $K'$ (via $g_m=\sqrt{2K'SI}$), on $\lambda$, and on the dc voltage drops. The key ratio is

$$
r=\sqrt{\frac{K'_N}{K'_P}}=\sqrt{\frac{110}{50}}=1.48 .
$$

### Step 1 — Schematic of the p-input op amp

Complement every device: a p-channel input pair M1–M2 with a p-channel tail source M5 to $V_{DD}$; an n-channel current-mirror load M3–M4 to $V_{SS}$; an n-channel common-source output transistor M6 with its source at $V_{SS}$ and its gate at the first-stage output (drain of M2 and M4); a p-channel current-source load M7 sharing M5's bias; and $C_c$ from the gate of M6 to the output.

<!-- diagram: diagram-01.cir -->

The output stage must be complemented too. The n-channel mirror holds the first-stage output near $V_{SS}+V_{GS3}$, which is the right level for an n-channel M6 with its source at $V_{SS}$ (with $V_{GS6}=V_{GS4}$ for zero systematic offset). Keeping the original p-channel M6 would require that node near $V_{DD}-V_{SG6}$, which is only reachable with a large imbalance in M3–M4 and with M2 pushed toward triode; without a level shift that is not a usable design.

### Step 2 — Small-signal speed: GB, output pole, zero, mirror pole

- **GB** $=g_{m1}/C_c$. The n-channel input pair has the larger $g_m$ at equal current and size, so the **n-input version is better by $r\approx1.48$**.
- **Output pole** $g_{m6}/C_L$ and **RHP zero** $g_{m6}/C_c$. In the p-input version M6 is n-channel, so both are **higher by $1.48$**. Relative to its own GB, the nondominant roots of the p-input version are higher by $r^2\approx2.2$, so the **p-input version has the clearly better phase margin**.
- **Mirror pole** $g_{m3}/C_3$. The mirror is n-channel in the p-input version, so for the same node capacitance it is **higher by $1.48$**.

### Step 3 — Gain and slew rate

The overall gain is

$$
A_v=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}},\qquad
g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)\frac{I_5}{2},\quad g_{ds6}+g_{ds7}=(\lambda_N+\lambda_P)I_6 .
$$

Each stage has one n- and one p-channel device, so the $g_{ds}$ sums are identical in both versions. Swapping types moves the factor $r$ from the first stage's $g_{m1}$ to the second stage's $g_{m6}$, so the product $g_{m1}g_{m6}$, and hence **the dc gain, is essentially the same**. The slew rate $I_5/C_c$ is also **the same**.

### Step 4 — Input common-mode range

| | $V_{in}(\max)$ | $V_{in}(\min)$ |
|---|---|---|
| n-input | $V_{DD}-V_{SG3}+V_{TN}$ (close to $V_{DD}$) | $V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}$ (well above $V_{SS}$) |
| p-input | $V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}$ (well below $V_{DD}$) | $V_{SS}+V_{GS3}-\lvert V_{TP}\rvert$ (close to $V_{SS}$) |

The n-input range extends to the positive rail, the p-input range to the negative rail; each is worse at the other end by roughly a threshold plus a saturation voltage.

### Step 5 — Output current drive

In the n-input version the p-channel M6 can source large currents, but sinking is limited to the bias current of M7, so the output-stage slew limit appears on falling edges. In the p-input version the n-channel M6 sinks large currents and sourcing is limited to M7's bias, so the limit appears on rising edges.

### Step 6 — Noise, body effect and PSRR

- **Thermal noise.** The input-referred noise power scales as $(1/g_{m1})(1+g_{m3}/g_{m1})$. The n-input version has the larger $g_{m1}$ and the smaller $g_{m3}$ (p-channel mirror), so it is **lower in thermal noise**. With $x=g_{m3}/g_{m1}$ of the n-input version, the power ratio is $r(1+r^2x)/(1+x)$, between 1.48 and 3.3; about 2.2 for $(W/L)_3=(W/L)_1$. The input pair alone gives 1.48 in power, or 1.22 in noise voltage.
- **1/f noise.** p-channel devices usually have a much smaller flicker coefficient, so the p-input version is usually better at low frequency. However, the mirror's 1/f noise is referred to the input with weight $(g_{m3}/g_{m1})^2$, which grows by about 2.2 in the p-input version, so without flicker data the net ranking depends on the p-channel advantage outweighing this.
- **Body effect (n-well process).** The p-channel pair can sit in its own well with the bulk tied to the common source, removing the body effect (slightly better ICMR and CMRR). The n-channel pair has its bulk at $V_{SS}$.
- **High-frequency PSRR.** The supply at the source of the output driver ($V_{DD}$ for the n-input version, $V_{SS}$ for the p-input version) couples to the output through $C_c$ at high frequency, so the poorer high-frequency PSRR is on opposite supplies.

### Step 7 — Summary

| Characteristic | Better version | Amount |
|---|---|---|
| GB | n-input | ×1.48 |
| Output pole, RHP zero, mirror pole | p-input | ×1.48 |
| Phase margin (roots relative to GB) | p-input | ×2.2 |
| dc gain, slew rate $I_5/C_c$ | equal | — |
| ICMR | n-input toward $V_{DD}$, p-input toward $V_{SS}$ | about $V_T+V_{sat}$ at the weak end |
| Large output current | n-input sources, p-input sinks | — |
| Thermal noise | n-input | ×1.48–3.3 in power |
| 1/f noise | usually p-input | process dependent |
