# Detailed solution - R625

**Approach.** After input offset storage, the residual input-referred offset is the amplifier's own offset divided by $1 + A_v$. We therefore need to know how two quantities change when the input-pair width is doubled at constant bias current, channel length and load: the amplifier's offset $V_{OS}$ and its gain $A_v$. Both change by a factor of $\sqrt2$, in the favourable direction.

### Step 1 — Residual offset after input offset storage

Model the amplifier as an ideal amplifier of gain $A_v$ with its offset $V_{OS}$ in series with input X, so that $V_{out} = -A_v(V_{XY} - V_{OS})$, with $V_{XY} = V_X - V_Y$.

**Cancellation phase.** $S_3$ and $S_4$ connect the outputs back to X and Y (unity-gain negative feedback), so $V_{XY} = V_{out}$:

$$
\begin{aligned}
V_{XY} &= -A_v(V_{XY} - V_{OS}),\\
V_{XY}(1 + A_v) &= A_vV_{OS},\\
V_{XY,0} &= \frac{A_v}{1 + A_v}V_{OS}.
\end{aligned}
$$

Meanwhile the left plates of $C_1$ and $C_2$ sit at $V_{CM}$, so the capacitors store $V_{XY,0}$.

**Amplification phase.** X and Y float. With the amplifier's input capacitance neglected, the differential input passes through the capacitors unattenuated, so $V_{XY} = V_{XY,0} + V_{in}$. Then

$$
\begin{aligned}
V_{out} &= -A_v\left(\frac{A_v}{1 + A_v}V_{OS} + V_{in} - V_{OS}\right)\\
&= -A_v\left(V_{in} - \frac{V_{OS}}{1 + A_v}\right).
\end{aligned}
$$

The output is zero for $V_{in} = V_{OS}/(1 + A_v)$, so the overall input-referred offset is

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v} \approx \frac{V_{OS}}{A_v}\quad(A_v \gg 1).$$

The storage scheme does not remove the amplifier's offset completely: it divides it by the loop gain. Hence the result depends on both $V_{OS}$ and $A_v$, and both depend on the input-pair width.

### Step 2 — Effect of doubling $W$ on the overdrive and transconductance

From the **square-law saturation current**, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage. At constant $I_D$ and $L$:

$$V_{ov} = \sqrt{\frac{2I_D}{\mu_nC_{ox}W/L}} \propto \frac{1}{\sqrt W} \quad\Longrightarrow\quad V_{ov}' = \frac{V_{ov}}{\sqrt2}.$$

The transconductance is

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} \propto \sqrt W \quad\Longrightarrow\quad g_m' = \sqrt2\,g_m .$$

(Primes denote the new design.) Doubling $W$ at the same current makes the device "stronger" per volt of overdrive, so it needs less overdrive and has more transconductance.

### Step 3 — Effect on the amplifier's own offset $V_{OS}$

For a differential pair with load resistance $R_D$ (or matched load devices), the main offset terms are

$$V_{OS} = \Delta V_{TH} + \frac{V_{ov}}{2}\left[\frac{\Delta(W/L)}{W/L} + \frac{\Delta R_D}{R_D}\right],$$

where the terms are uncorrelated and in practice add in power. Here $\Delta(W/L)/(W/L)$ and $\Delta R_D/R_D$ are the fractional mismatches. Each term scales as follows:

- **Threshold mismatch.** $\Delta V_{TH} \propto 1/\sqrt{WL}$. Doubling $W$ at fixed $L$ doubles the area, so $\Delta V_{TH}' = \Delta V_{TH}/\sqrt2$.
- **Size and load mismatch.** These are multiplied by $V_{ov}/2$, which falls by $\sqrt2$ (Step 2). The loads are unchanged, and the fractional size mismatch is at least no worse in a larger device, so these terms also fall by (at least) $\sqrt2$.

(With current-source loads the load terms are referred to the input through $g_{mP}/g_{mN}$, which also falls by $\sqrt2$ because $g_{mN}$ rises by $\sqrt2$.)

Every term falls by $\sqrt2$, so

$$V_{OS}' = \frac{V_{OS}}{\sqrt2}.$$

### Step 4 — Effect on the gain $A_v$

The gain is the transconductance times the output resistance, $A_v = g_m(R_D \parallel r_O)$, where $r_O = 1/(\lambda I_D)$. The bias current, the channel length (hence $\lambda$) and the loads are unchanged, so the output resistance is unchanged and

$$A_v' = \sqrt2\,A_v .$$

### Step 5 — The new overall offset

Combine Steps 1, 3 and 4 for $A_v \gg 1$:

$$V_{OS,tot}' \approx \frac{V_{OS}'}{A_v'} = \frac{V_{OS}/\sqrt2}{\sqrt2\,A_v} = \frac12\cdot\frac{V_{OS}}{A_v} = \frac12V_{OS,tot}.$$

With the original design at $V_{OS,tot} = 1$ mV:

$$V_{OS,tot}' \approx \frac{1\ \mathrm{mV}}{2} = 0.5\ \mathrm{mV}.$$

**Finite-gain check.** Keeping the "1 +" in $1 + A_v$, the ratio of the new offset to the old one is

$$\frac{V_{OS}'/(1 + \sqrt2A_v)}{V_{OS}/(1 + A_v)} = \frac{1 + A_v}{\sqrt2 + 2A_v}.$$

| Original $A_v$ | 10 | 30 | 100 | $\to\infty$ |
|---|---|---|---|---|
| New overall offset | 0.51 mV | 0.50 mV | 0.50 mV | 0.50 mV |

For any reasonable gain the answer is 0.5 mV.

### Step 6 — Remarks on what was neglected

- **Input capacitance.** Doubling $W$ also doubles the input-pair capacitance $C_{in}$. If $C_{in}$ were not neglected, the residual would be multiplied by $1 + 2C_{in}/C$ (the input signal is attenuated by the capacitive divider between the storage capacitors and $C_{in}$), and part of the improvement would be lost unless $C$ is large.
- **Charge injection.** In a real circuit the mismatch in charge injected by $S_3$ and $S_4$ often limits the residual offset. It does not scale with the amplifier's $V_{OS}$, so it is neglected here, as instructed.

### Result

$$V_{OS,tot}' = \frac{V_{OS}/\sqrt2}{1 + \sqrt2\,A_v} \approx \frac{1\ \mathrm{mV}}{\sqrt2\cdot\sqrt2} \approx 0.5\ \mathrm{mV}.$$

Doubling the input-pair width at constant current lowers the amplifier's own offset by $\sqrt2$ (larger area, so less $\Delta V_{TH}$; lower overdrive, so smaller $W/L$ and load terms) and raises its gain by $\sqrt2$ ($g_m \propto \sqrt W$). The residual offset after storage, $V_{OS}/(1 + A_v)$, therefore halves, to about 0.5 mV.

**Common mistake.** Assuming that the offset stays at 1 mV because offset cancellation makes the result independent of the amplifier. The storage loop only divides the amplifier's offset by $1 + A_v$, so both $V_{OS}$ and $A_v$ still matter.

**Common mistake.** Considering only one of the two effects, which gives $1\ \mathrm{mV}/\sqrt2 \approx 0.71$ mV. Doubling $W$ both reduces the amplifier's offset and increases its gain.

**Common mistake.** Taking the gain as proportional to $W$ and concluding 0.25 mV. For square-law devices at constant current, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ grows only as $\sqrt W$.
