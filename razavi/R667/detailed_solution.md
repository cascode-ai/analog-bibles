# Detailed solution - R667

**Approach.** First find how the capacitors must scale: the dynamic range requirement halves the allowed rms noise, and for $kT/C$ noise that means four times the capacitance. Then keep the time constant $\tau \propto C/G_m$ fixed: if $C$ is multiplied by 4, $G_m$ must be multiplied by 4 as well.

### Step 1 — Noise requirement

The dynamic range is the ratio of the maximum signal to the rms noise, $DR = V_{sig,max}/v_{n,rms}$. With the supply and the allowable swing halved, $V_{sig,max} \to V_{sig,max}/2$, so constant DR requires

$$v_{n,rms} \to \frac{v_{n,rms}}{2}, \qquad\text{i.e.}\qquad \overline{v_n^2} \to \frac{\overline{v_n^2}}{4}.$$

### Step 2 — Capacitor scaling from $kT/C$ noise

The noise sampled on a capacitor $C$ through a switch is

$$\overline{v_n^2} = \frac{kT}{C}, \qquad v_{n,rms} = \sqrt{\frac{kT}{C}},$$

where $k$ is Boltzmann's constant and $T$ the absolute temperature (the switch resistance cancels: more resistance means more noise density but proportionally less bandwidth). With the new capacitance $C' = mC$:

$$
\begin{aligned}
\frac{kT}{C'} &= \frac14\cdot\frac{kT}{C}\\
C' &= 4C .
\end{aligned}
$$

All capacitors (sampling, feedback and load) are therefore multiplied by 4. Their ratios, and hence the closed-loop gain and the feedback factor, do not change.

### Step 3 — The small-signal time constant

For a one-stage op amp (a single transconductance $G_m$ driving the capacitive load) in a switched-capacitor amplifier, the closed-loop settling time constant is

$$\tau = \frac{C_{L,eff}}{\beta\,G_m} \propto \frac{C}{G_m},$$

where $C_{L,eff}$ is the effective capacitance at the op-amp output and $\beta$ the feedback factor (a capacitor ratio such as $C_F/(C_F + C_S)$). Why $C/G_m$: the op amp delivers a current $G_m$ times its input error voltage, and that current must charge the output capacitance; a larger capacitance with the same current takes proportionally longer.

Since all capacitors scale by the same factor, $\beta$ is unchanged and $C_{L,eff} \to 4C_{L,eff}$.

### Step 4 — Required $G_m$ scaling

Require the new time constant to equal the old one:

$$
\begin{aligned}
\tau' &= \tau\\
\frac{4C_{L,eff}}{\beta\,G_m'} &= \frac{C_{L,eff}}{\beta\,G_m}\\
G_m' &= 4\,G_m .
\end{aligned}
$$

$G_m$ must be **scaled up by a factor of 4**.

### Step 5 — What this costs (intuition)

For a MOS input pair, $G_m = g_m = 2I_D/V_{ov}$, where $V_{ov}$ is the overdrive voltage. If the overdrive is kept the same, a 4× larger $g_m$ needs 4× the bias current (with 4× wider devices, whose larger input capacitance is consistent with keeping $\beta$ when all capacitors scale by 4). The power is then

$$P' = V_{DD}'\,I' = \frac{V_{DD}}{2}\cdot4I = 2P,$$

so halving the supply of a $kT/C$-limited circuit, at the same dynamic range and speed, roughly *doubles* the power. Lower supply voltages do not automatically save power in such circuits; this is one of the main arguments in the discussion of low-voltage analog design.

### Result

The capacitors must grow by a factor of 4 (from $v_{n,rms} = \sqrt{kT/C}$ and the halved noise target), so to keep the time constant $\tau \propto C/G_m$ unchanged, **$G_m$ must also be scaled up by a factor of 4**. (At a constant overdrive this means about 4× the bias current, i.e. about twice the power at half the supply.)

**Common mistake.** Scaling the capacitors by 2 (treating the noise voltage as proportional to $1/C$) and then $G_m$ by 2. The rms noise voltage goes as $1/\sqrt C$, so halving it needs $4C$, and $G_m$ must follow the capacitors.

**Common mistake.** Leaving $G_m$ unchanged (or reducing it along with the supply). With four times the capacitance and the same $G_m$, the time constant becomes four times longer, and the amplifier settles too slowly for the same clock rate.
