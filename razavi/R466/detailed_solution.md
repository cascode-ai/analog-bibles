# Detailed solution - R466

**Approach.** Find the output noise of each half (the channel-noise currents of $M_1$ and $M_3$ into the drain node), add the two uncorrelated halves, and divide by the squared differential gain. The signal enters through the *bulk*, with $g_{mb1} = \eta g_{m1}$, while the channel noise of $M_1$ is the full $4kT\gamma_ng_{m1}$. Then repeat for a gate-driven pair and compare. To keep the two "gammas" apart, write $\gamma_n = 2/3$ for the noise coefficient and $\gamma_B = 0.4\ \mathrm{V^{1/2}}$ for the body-effect coefficient.

### Step 1 — Signal gain of the bulk-driven pair

With gate and source at ac ground, a well voltage $v_w$ produces a drain current $g_{mb1}v_w$, where

$$g_{mb1} = \eta\,g_{m1}, \qquad \eta = \frac{\gamma_B}{2\sqrt{2|\phi_F| + V_{BS}}},$$

and $V_{BS}$ is the well-to-source voltage (positive for reverse bias). Each drain sees $R = r_{O1}\parallel r_{O3}$, so $v_{d1} = -g_{mb1}Rv_{w1}$, $v_{d2} = -g_{mb1}Rv_{w2}$, and

$$|A_v| = g_{mb1}R = g_{mb1}(r_{O1}\parallel r_{O3}).$$

### Step 2 — Noise of one half

The drain node $d_1$ carries the signal current $g_{mb1}v_{w1}$, the channel-noise currents $I_{n1}$ of $M_1$ (from $V_{DD}$, an ac ground) and $I_{n3}$ of $M_3$ (to ground), and $r_{O1}$, $r_{O3}$ to ac ground.

<!-- diagram: diagram-01.cir -->

The uncorrelated noise powers add,

$$\overline{I_{n1}^2} + \overline{I_{n3}^2} = 4kT\gamma_n(g_{m1} + g_{m3}),$$

and both flow through $R$:

$$\overline{V_{n,d1}^2} = 4kT\gamma_n(g_{m1} + g_{m3})\,R^2 .$$

$M_1$'s noise is not reduced by driving the bulk: the channel noise $4kT\gamma_ng_{m1}$ depends on the channel's inversion, not on which terminal carries the signal; only the signal's efficiency drops to $\eta g_{m1}$.

### Step 3 — Both halves and the input-referred noise

The right half ($M_2$, $M_4$) adds identical, independent noise at $d_2$, so

$$\overline{V_{n,out}^2} = 2\times4kT\gamma_n(g_{m1} + g_{m3})\,R^2 .$$

Dividing by $(g_{mb1}R)^2$, $R$ cancels:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{8kT\gamma_n(g_{m1} + g_{m3})R^2}{g_{mb1}^2R^2}\\
&= 8kT\gamma_n\,\frac{g_{m1} + g_{m3}}{g_{mb1}^2}\\
&= \frac{8kT\gamma_n\,(g_{m1} + g_{m3})}{\eta^2g_{m1}^2} .
\end{aligned}
$$

### Step 4 — The regular (gate-driven) PMOS pair

Driving the gates, with a tail source (its noise is common-mode and cancels), the same devices and the same currents, each half has signal transconductance $g_{m1}$ and the same noise currents reach the drains, so

$$\overline{V_{n,in}^2}\Big|_{gate} = 8kT\gamma_n\,\frac{g_{m1} + g_{m3}}{g_{m1}^2} = 8kT\gamma_n\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

### Step 5 — Comparison

$$\frac{\overline{V_{n,in}^2}\Big|_{bulk}}{\overline{V_{n,in}^2}\Big|_{gate}} = \frac{g_{m1}^2}{g_{mb1}^2} = \frac{1}{\eta^2} .$$

The well bias is not specified; with the wells at $V_{DD}$ ($V_{BS} = 0$):

$$
\begin{aligned}
\eta &= \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V}}} = \frac{0.4}{2\times0.894} = 0.224,\\
\frac{1}{\eta^2} &= \frac{1}{0.05} = 20 .
\end{aligned}
$$

The input-referred noise power is about **20 times** larger: $\sqrt{20} \approx 4.5$ times in rms voltage, or $10\log_{10}20 \approx 13$ dB. The bulk is a weak control terminal ($\eta \approx 0.2$): the input must swing about five times more than at the gate for the same signal current, while the noise currents are unchanged.

Biasing the wells slightly below $V_{DD}$ (e.g. $V_{BS} = -0.3$ V, a small forward bias) raises $\eta$ to $0.4/(2\sqrt{0.5}) = 0.283$ and cuts the penalty to $1/\eta^2 = 12.5$ (about 11 dB), as long as the junction current stays negligible; wells above the supply ($V_{BS} > 0$) would make it worse.

### Result

$$\overline{V_{n,in}^2}\Big|_{bulk} = 8kT\gamma_n\,\frac{g_{m1} + g_{m3}}{g_{mb1}^2} = \frac{8kT\gamma_n\,(g_{m1} + g_{m3})}{\eta^2g_{m1}^2},$$

which is $1/\eta^2$ times the gate-driven pair's $8kT\gamma_n(g_{m1} + g_{m3})/g_{m1}^2$. With the wells at $V_{DD}$, $\eta \approx 0.22$, so the bulk-driven pair is about **20 times** noisier in power (≈ 4.5× in rms voltage, ≈ 13 dB), assuming the same device sizes and currents.

**Common mistake.** Referring the noise with $g_{m1}$ instead of $g_{mb1}$, which makes the bulk-driven pair look as quiet as a gate-driven one; the signal enters through $g_{mb1} = \eta g_{m1}$.

**Common mistake.** Calling $1/\eta \approx 4.5$ the power ratio. It is the ratio of rms *voltages*; powers scale with $1/\eta^2 \approx 20$.

**Common mistake.** Dropping the factor 2 ($4kT$ instead of $8kT$) or the load term $g_{m3}$. Both halves contribute, and the loads inject their noise into the same drain nodes.
