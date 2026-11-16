# Detailed solution - R625

**Approach.** After input offset storage, the residual input-referred offset is the amplifier's own offset divided by $1 + A_v$. So find how the amplifier's offset $V_{OS}$ and its gain $A_v$ change when the input-pair width is doubled at constant bias current, channel length and load; both change by $\sqrt2$, in the favourable direction.

### Step 1 — Residual offset after input offset storage

Model the amplifier as $V_{out} = -A_v(V_{XY} - V_{OS})$, with $V_{OS}$ in series with input X and $V_{XY} = V_X - V_Y$. In the cancellation phase $V_{XY} = V_{out}$, so

$$
\begin{aligned}
V_{XY} &= -A_v(V_{XY} - V_{OS}),\\
V_{XY}(1 + A_v) &= A_vV_{OS},\\
V_{XY,0} &= \frac{A_v}{1 + A_v}V_{OS},
\end{aligned}
$$

which $C_1$, $C_2$ store with their left plates at $V_{CM}$. In the amplification phase X and Y float and, with $C_{in}$ neglected, $V_{XY} = V_{XY,0} + V_{in}$:

$$
\begin{aligned}
V_{out} &= -A_v\left(\frac{A_v}{1 + A_v}V_{OS} + V_{in} - V_{OS}\right)\\
&= -A_v\left(V_{in} - \frac{V_{OS}}{1 + A_v}\right).
\end{aligned}
$$

The output is zero for

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v} \approx \frac{V_{OS}}{A_v}\quad(A_v \gg 1),$$

so the result depends on both $V_{OS}$ and $A_v$, and both depend on the input-pair width.

### Step 2 — Effect of doubling $W$ on the overdrive and transconductance

At constant $I_D$ and $L$ (primes denote the new design):

$$V_{ov} = \sqrt{\frac{2I_D}{\mu_nC_{ox}W/L}} \propto \frac{1}{\sqrt W} \quad\Longrightarrow\quad V_{ov}' = \frac{V_{ov}}{\sqrt2},$$

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} \propto \sqrt W \quad\Longrightarrow\quad g_m' = \sqrt2\,g_m .$$

### Step 3 — Effect on the amplifier's own offset $V_{OS}$

For a differential pair with load resistance $R_D$ (or matched load devices), the main offset terms are

$$V_{OS} = \Delta V_{TH} + \frac{V_{ov}}{2}\left[\frac{\Delta(W/L)}{W/L} + \frac{\Delta R_D}{R_D}\right],$$

with the uncorrelated terms in practice adding in power. Each scales as follows:

- **Threshold mismatch.** $\Delta V_{TH} \propto 1/\sqrt{WL}$, and doubling $W$ at fixed $L$ doubles the area, so $\Delta V_{TH}' = \Delta V_{TH}/\sqrt2$.
- **Size and load mismatch.** These are multiplied by $V_{ov}/2$, which falls by $\sqrt2$ (Step 2); the loads are unchanged, and the fractional size mismatch is no worse in a larger device, so these terms also fall by (at least) $\sqrt2$.

(With current-source loads the load terms are referred to the input through $g_{mP}/g_{mN}$, which also falls by $\sqrt2$ because $g_{mN}$ rises by $\sqrt2$.) Every term falls by $\sqrt2$:

$$V_{OS}' = \frac{V_{OS}}{\sqrt2}.$$

### Step 4 — Effect on the gain $A_v$

$A_v = g_m(R_D \parallel r_O)$ with $r_O = 1/(\lambda I_D)$. The bias current, channel length (hence $\lambda$) and loads are unchanged, so the output resistance is unchanged and

$$A_v' = \sqrt2\,A_v .$$

### Step 5 — The new overall offset

For $A_v \gg 1$:

$$V_{OS,tot}' \approx \frac{V_{OS}'}{A_v'} = \frac{V_{OS}/\sqrt2}{\sqrt2\,A_v} = \frac12\cdot\frac{V_{OS}}{A_v} = \frac12V_{OS,tot}.$$

With the original design at $V_{OS,tot} = 1$ mV:

$$V_{OS,tot}' \approx \frac{1\ \mathrm{mV}}{2} = 0.5\ \mathrm{mV}.$$

**Finite-gain check.** Keeping the "1 +", the ratio of the new offset to the old one is

$$\frac{V_{OS}'/(1 + \sqrt2A_v)}{V_{OS}/(1 + A_v)} = \frac{1 + A_v}{\sqrt2 + 2A_v}.$$

| Original $A_v$ | 10 | 30 | 100 | $\to\infty$ |
|---|---|---|---|---|
| New overall offset | 0.51 mV | 0.50 mV | 0.50 mV | 0.50 mV |

For any reasonable gain the answer is 0.5 mV.

### Step 6 — Remarks on what was neglected

- **Input capacitance.** Doubling $W$ also doubles the input-pair capacitance $C_{in}$. If it were not neglected, the residual would be multiplied by $1 + 2C_{in}/C$ (the capacitive divider attenuates the input signal), losing part of the improvement unless $C$ is large.
- **Charge injection.** The mismatch in charge injected by $S_3$ and $S_4$ often limits the residual offset in practice. It does not scale with the amplifier's $V_{OS}$ and is neglected here, as instructed.

### Result

$$V_{OS,tot}' = \frac{V_{OS}/\sqrt2}{1 + \sqrt2\,A_v} \approx \frac{1\ \mathrm{mV}}{\sqrt2\cdot\sqrt2} \approx 0.5\ \mathrm{mV}.$$

Doubling the input-pair width at constant current lowers the amplifier's own offset by $\sqrt2$ (larger area, so less $\Delta V_{TH}$; lower overdrive, so smaller $W/L$ and load terms) and raises its gain by $\sqrt2$ ($g_m \propto \sqrt W$). The residual offset after storage, $V_{OS}/(1 + A_v)$, therefore halves, to about 0.5 mV.

**Common mistake.** Assuming the offset stays at 1 mV because offset cancellation makes the result independent of the amplifier. The storage loop only divides the amplifier's offset by $1 + A_v$.

**Common mistake.** Considering only one of the two effects, which gives $1\ \mathrm{mV}/\sqrt2 \approx 0.71$ mV. Doubling $W$ both reduces the offset and increases the gain.

**Common mistake.** Taking the gain as proportional to $W$ and concluding 0.25 mV. For square-law devices at constant current, $g_m$ grows only as $\sqrt W$.
