# Detailed solution - R667

**Approach.** The dynamic-range requirement halves the allowed rms noise, which for $kT/C$ noise means four times the capacitance. Keeping the time constant $\tau \propto C/G_m$ fixed then requires $G_m$ to grow by 4 as well.

### Step 1 — Noise requirement

With $DR = V_{sig,max}/v_{n,rms}$ and the swing halved, $V_{sig,max} \to V_{sig,max}/2$, constant DR requires

$$v_{n,rms} \to \frac{v_{n,rms}}{2}, \qquad\text{i.e.}\qquad \overline{v_n^2} \to \frac{\overline{v_n^2}}{4}.$$

### Step 2 — Capacitor scaling from $kT/C$ noise

The noise sampled on a capacitor is $\overline{v_n^2} = kT/C$, i.e. $v_{n,rms} = \sqrt{kT/C}$. With $C' = mC$:

$$
\begin{aligned}
\frac{kT}{C'} &= \frac14\cdot\frac{kT}{C}\\
C' &= 4C .
\end{aligned}
$$

All capacitors (sampling, feedback, load) are multiplied by 4, so their ratios, and hence the closed-loop gain and the feedback factor, do not change.

### Step 3 — The small-signal time constant

For a one-stage op amp in a switched-capacitor amplifier, the closed-loop time constant is

$$\tau = \frac{C_{L,eff}}{\beta\,G_m} \propto \frac{C}{G_m},$$

where $C_{L,eff}$ is the effective capacitance at the op-amp output and $\beta$ the feedback factor (a capacitor ratio such as $C_F/(C_F + C_S)$). Since all capacitors scale by the same factor, $\beta$ is unchanged and $C_{L,eff} \to 4C_{L,eff}$.

### Step 4 — Required $G_m$ scaling

$$
\begin{aligned}
\tau' &= \tau\\
\frac{4C_{L,eff}}{\beta\,G_m'} &= \frac{C_{L,eff}}{\beta\,G_m}\\
G_m' &= 4\,G_m .
\end{aligned}
$$

$G_m$ must be **scaled up by a factor of 4**.

### Step 5 — What this costs

For a MOS input pair, $G_m = g_m = 2I_D/V_{ov}$. At the same overdrive, 4× the $g_m$ needs 4× the bias current (with 4× wider devices, whose larger input capacitance is consistent with keeping $\beta$ when all capacitors scale by 4), so the power is

$$P' = V_{DD}'\,I' = \frac{V_{DD}}{2}\cdot4I = 2P:$$

halving the supply of a $kT/C$-limited circuit at the same dynamic range and speed roughly *doubles* the power. Lower supply voltages do not automatically save power in such circuits.

### Result

The capacitors must grow by a factor of 4 (from $v_{n,rms} = \sqrt{kT/C}$ and the halved noise target), so to keep the time constant $\tau \propto C/G_m$ unchanged, **$G_m$ must also be scaled up by a factor of 4**. (At a constant overdrive this means about 4× the bias current, i.e. about twice the power at half the supply.)

**Common mistake.** Scaling the capacitors by 2 (treating the noise voltage as proportional to $1/C$) and then $G_m$ by 2. The rms noise voltage goes as $1/\sqrt C$, so halving it needs $4C$, and $G_m$ must follow the capacitors.

**Common mistake.** Leaving $G_m$ unchanged (or reducing it with the supply). With four times the capacitance the time constant becomes four times longer, and the amplifier settles too slowly for the same clock rate.
