# Detailed solution - R411

**Approach.** KCL shows how the 0.5-mA currents distribute in $R_1$ and $R_2$, which fixes $V_{out}$ and the source voltage of $M_1$ as functions of $R_1$. Each transistor's saturation condition then becomes an inequality on $R_1$; the tightest bounds give the range. Finally $V_{in} = V_B + V_{GS1}$, with the body effect, gives the matching input range.

### Step 1 — The current distribution

Call the drain of $M_1$ (the gate of $M_2$) node A, and the junction of $R_2$ and $R_1$ node B. At $V_{out}$, $M_4$ supplies 0.5 mA and $M_2$ sinks 0.5 mA, so

$$I_{R2} = |I_{D4}| - I_{D2} = 0.5 - 0.5 = 0 ,$$

and with no drop across $R_2$, $V_{out} = V_B$. At B, $M_1$ delivers $I_{D1} = 0.5$ mA and $R_2$ nothing, so all of it flows in $R_1$:

$$V_B = V_{out} = I_{D1}R_1 = (0.5\ \mathrm{mA})\,R_1 .$$

### Step 2 — Gate–source voltages and overdrives

Every NMOS has $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$ and carries 0.5 mA, so each (including $M_1$, whose threshold is raised by the body effect) has

$$V_{ov,N} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

$M_2$ has its source and bulk grounded, so

$$V_{GS2} = V_{TH0} + V_{ov,N} = 0.7 + 0.273 = 0.973\ \mathrm{V}\ \Longrightarrow\ V_A = 0.973\ \mathrm{V},$$

fixed, independent of $R_1$. For the PMOS sources $M_3$, $M_4$:

$$|V_{ov,P}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.260\ \mathrm{V^2}} = 0.510\ \mathrm{V}.$$

### Step 3 — Saturation conditions, one transistor at a time

**$M_2$** (drain at $V_{out}$, source at ground):

$$V_{out} \ge V_{ov,N}\ \Longrightarrow\ (0.5\ \mathrm{mA})\,R_1 \ge 0.273\ \mathrm{V}\ \Longrightarrow\ R_1 \ge 546\ \Omega .$$

**$M_1$** (drain at A, source at B):

$$
\begin{aligned}
V_A - V_B &\ge V_{ov,N}\\
V_B &\le 0.973 - 0.273 = 0.700\ \mathrm{V}\\
(0.5\ \mathrm{mA})\,R_1 &\le 0.700\ \mathrm{V}\ \Longrightarrow\ R_1 \le 1.40\ \mathrm{k\Omega}.
\end{aligned}
$$

($V_A - V_{ov,N} = V_{TH0}$ exactly, so the limit is $V_B \le V_{TH0} = 0.7$ V.)

**$M_3$:** $|V_{DS3}| = 3 - 0.973 = 2.03\ \mathrm{V} \ge 0.510$ V for every $R_1$, so it is always saturated.

**$M_4$:** $3 - V_{out} \ge 0.510\ \Longrightarrow\ V_{out} \le 2.49\ \mathrm{V}\ \Longrightarrow\ R_1 \le 4.98\ \mathrm{k\Omega}$, much looser than $M_1$'s limit.

**Combined:**

$$546\ \Omega \le R_1 \le 1.40\ \mathrm{k\Omega},$$

with $M_2$ setting the lower bound and $M_1$ the upper bound: a small $R_1$ leaves $V_{out}$ too low for $M_2$, a large one lifts B toward A and squeezes $M_1$'s $V_{DS}$. (With $M_1$ allowed into triode, the currents could flow as long as $V_B < V_A$, i.e. up to $R_1 \approx 1.95\ \mathrm{k\Omega}$, but that violates the saturation requirement.)

### Step 4 — Input voltage at the two ends of the range

$V_{in} = V_B + V_{GS1}$, where the source of $M_1$ sits at $V_B$ above its grounded bulk:

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right), \qquad V_{GS1} = V_{TH1} + 0.273\ \mathrm{V}.$$

**Lower end, $R_1 = 546\ \Omega$, $V_B = 0.273$ V:**

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.273} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.0831 - 0.9487) = 0.7 + 0.060 = 0.760\ \mathrm{V},\\
V_{in} &= 0.273 + 0.760 + 0.273 = 1.31\ \mathrm{V}.
\end{aligned}
$$

**Upper end, $R_1 = 1.40\ \mathrm{k\Omega}$, $V_B = 0.700$ V:**

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.7} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.2649 - 0.9487) = 0.7 + 0.142 = 0.842\ \mathrm{V},\\
V_{in} &= 0.700 + 0.842 + 0.273 = 1.82\ \mathrm{V}.
\end{aligned}
$$

$V_{in}$ rises monotonically with $R_1$ (both $V_B$ and $V_{TH1}$ increase), so the input range is about 1.31 V to 1.82 V. Without the body effect it would be $V_B + 0.973$ V, i.e. 1.25 V to 1.67 V.

| | $R_1$ | $V_B = V_{out}$ | $V_{TH1}$ | $V_{in}$ | limiting device |
|---|---|---|---|---|---|
| lower end | 546 Ω | 0.273 V | 0.760 V | 1.31 V | $M_2$ at edge of saturation |
| upper end | 1.40 kΩ | 0.700 V | 0.842 V | 1.82 V | $M_1$ at edge of saturation |

### Result

$$546\ \Omega \lesssim R_1 \lesssim 1.4\ \mathrm{k\Omega}, \qquad 1.31\ \mathrm{V} \lesssim V_{in} \lesssim 1.82\ \mathrm{V}$$

(with the body effect of $M_1$; 1.25–1.67 V without it). No current flows in $R_2$, so $V_{out} = V_B = (0.5\ \mathrm{mA})R_1$. $M_2$ needs $V_{out} \ge 0.273$ V (lower bound), and $M_1$ needs $V_B \le V_A - 0.273\ \mathrm{V} = 0.70$ V (upper bound).

**Common mistake.** Assuming a current flows through $R_2$. Since $|I_{D4}| = I_{D2}$, KCL at the output leaves nothing for $R_2$, so $V_{out} = V_B$.

**Common mistake.** Taking the upper bound from $M_4$ ($R_1 \approx 5$ kΩ) and overlooking $M_1$. Node A is pinned at 0.973 V, so $M_1$'s $V_{DS} = 0.973 - V_B$ runs out long before $M_4$ leaves saturation.

**Common mistake.** Ignoring the body effect in $V_{in}$. The source of $M_1$ sits 0.27–0.70 V above its bulk, which raises $V_{TH1}$ by 0.06–0.14 V and shifts the whole input range upward.
