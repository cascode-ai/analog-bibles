# Detailed solution - R532

**Approach.** Work out how linear scaling by α changes every small-signal quantity: transconductances, resistances and capacitances. That tells us which poles move: internal-node poles stay put, while the output pole (which sees the fixed $C_L$) moves up by α. Then show that the compensation can follow, so the loop gain keeps its shape but slides up in frequency by α. The bandwidth therefore improves by up to a factor of α. We end with the limits of this ideal result.

### Step 1 — What scaling up by α does to each device parameter

Multiply every width $W$ and every bias current $I_D$ by α, keeping $L$ fixed.

- **Current density and voltages.** $I_D/W$ is unchanged, so every $V_{GS}$, overdrive, $V_{DS}$ and bias voltage stays the same. Headroom and output swing are unchanged.
- **Transconductance.** In the square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, where $\mu C_{ox}$ is the process transconductance parameter:
$$g_m' = \sqrt{2\mu C_{ox}\frac{\alpha W}{L}\,\alpha I_D} = \alpha\,g_m .$$
More generally, α identical devices in parallel have α times the transconductance.
- **Output resistance.** $r_O = 1/(\lambda I_D)$, with $\lambda$ the channel-length modulation coefficient, becomes $r_O/\alpha$ (α devices in parallel).
- **Device capacitances.** Gate, overlap and junction capacitances are proportional to $W$, so they all scale by α.
- **Gains.** Every intrinsic gain $g_mr_O$, and hence the DC gain $A_0$, is unchanged.

### Step 2 — Internal poles do not move; the output pole does

**An internal node** has resistance $R$ (made of $1/g_m$'s and $r_O$'s) and capacitance $C$ (made of device capacitances):

$$\omega_{int}' = \frac{1}{(R/\alpha)(\alpha C)} = \frac{1}{RC} = \omega_{int}.$$

**The output node** has resistance $R_{out}/\alpha$, but its capacitance is the fixed load $C_L$ plus the output devices' own capacitance $C_p$, which does scale:

$$\omega_{p2} = \frac{1}{R_{out}(C_L + C_p)}\quad\longrightarrow\quad \omega_{p2}' = \frac{\alpha}{R_{out}(C_L + \alpha C_p)} .$$

If the load dominates ($C_L \gg \alpha C_p$),

$$\omega_{p2}' \approx \alpha\,\omega_{p2}.$$

This is the opposite of panel (b): scaling *down* lowered the output pole to $\omega_{p2}/\alpha$, and scaling *up* raises it to $\alpha\omega_{p2}$.

### Step 3 — The compensation can follow

In panel (a) the compensation places the dominant pole at $\omega'_{p1}$ so that $|\beta H|$ falls to unity at $\omega_{p2}$. With the asymptotic rule:

$$\beta A_0\,\omega'_{p1} \approx \omega_{p2}.$$

After scaling up, $\beta$ and $A_0$ are unchanged, so the same phase margin requires

$$\beta A_0\,\omega''_{p1} \approx \alpha\,\omega_{p2}\quad\Longrightarrow\quad \omega''_{p1} = \alpha\,\omega'_{p1} .$$

The compensated dominant pole can be moved **up** by α. The new loop gain is then the old one with every frequency multiplied by α:

$$\beta H_{new}(s) = \beta H_{old}\!\left(\frac{s}{\alpha}\right).$$

Its magnitude and phase curves keep their shapes and simply shift right by $\log\alpha$ on the frequency axis. The crossover moves from $\omega_{p2}$ to $\alpha\omega_{p2}$, and the phase margin is unchanged.

**With Miller compensation this happens almost automatically** (keep the same $C_C$):
- Dominant pole $\omega_{p1} \approx 1/(R_1g_{m2}R_LC_C)$: $R_1 \to R_1/\alpha$, $g_{m2} \to \alpha g_{m2}$, $R_L \to R_L/\alpha$, so $R_1g_{m2}R_L \to R_1g_{m2}R_L/\alpha$ and $\omega_{p1} \to \alpha\omega_{p1}$. (Here $R_1$ and $R_L$ are the stage output resistances and $g_{m2}$ the second-stage transconductance.)
- Unity-gain frequency $\omega_T = \beta g_{m1}/C_C \to \alpha\,\omega_T$, since the input-pair transconductance $g_{m1}$ grows by α.
- Right-half-plane zero $g_{m2}/C_C \to \alpha\,g_{m2}/C_C$: it moves up together with everything else.
- A nulling resistor should be divided by α ($R_z \to R_z/\alpha$), so that its zero $1/[C_C(R_z - 1/g_{m2})]$ also moves up by α and stays on the output pole.

### Step 4 — The bandwidth improvement

The closed-loop bandwidth (and the inverse of the settling time constant) is set by the loop crossover frequency, which has moved from $\omega_{p2}$ to $\alpha\omega_{p2}$:

$$\boxed{\frac{BW_{new}}{BW_{old}} \approx \alpha}$$

The power consumption also rises by α (all bias currents are multiplied by α at the same supply), so the bandwidth per unit power stays the same. Scaling up is a way of buying speed with power, linearly.

### Step 5 — Why the improvement is less than α in practice

1. **Self-loading at the output.** The output devices' capacitance grows with α. Including it, the improvement is
$$\frac{\omega'_{p2}}{\omega_{p2}} = \frac{\alpha(C_L + C_p)}{C_L + \alpha C_p},$$
which tends to $(C_L + C_p)/C_p$ as $\alpha \to \infty$. For example, with $C_p = 0.1\,C_L$ and $\alpha = 4$:
$$\frac{4\times1.1}{1 + 0.4} = 3.14\ \text{instead of } 4 .$$
In a Miller-compensated stage the growing first-stage capacitance $C_E$ similarly enters $\omega_{p2} \approx g_{m2}C_C/(C_EC_C + C_EC_L + C_CC_L)$.
2. **Fixed internal poles.** The internal nondominant poles (mirror and cascode nodes, first-stage output parasitics) do not move. Once $\alpha\omega_{p2}$ approaches them, they become the limiting nondominant poles and cap the achievable bandwidth.
3. **Feedback network.** If the feedback network is capacitive, the op amp's input capacitance grows by α and lowers $\beta$, which reduces the loop gain and the closed-loop bandwidth.

### Result

Scaling all widths and bias currents up by α multiplies every $g_m$ (and device capacitance) by α and divides every $r_O$ by α. Gains and internal poles are unchanged, but the output pole rises to $\alpha\omega_{p2}$ because the output resistance falls by α while $C_L$ is fixed. The compensation can follow (the dominant pole and $\omega_T \propto g_{m1}/C_C$ rise by α with the same $C_C$; $R_z$ is divided by α), so $|\beta H|$ crosses unity at $\alpha\omega_{p2}$ with the same phase margin.

**The bandwidth can improve by up to a factor of α, at α times the power**, provided the fixed load capacitance dominates the output node. In practice the improvement is somewhat less, $\alpha(C_L + C_p)/(C_L + \alpha C_p)$, and it saturates as α grows because device capacitances scale up and the internal poles stay fixed.

**Common mistake.** Answering "no improvement" by analogy with scaling of a self-loaded circuit, where all poles stay fixed. Here the load capacitance is *fixed*, so the output node, and only the output node, speeds up by α.

**Common mistake.** Claiming an improvement of α² (because "$g_m$ grows by α and $r_O$ falls by α") or $\sqrt\alpha$ (because "$g_m \propto \sqrt{I_D}$"). At constant current density both $W$ and $I_D$ scale, so $g_m$ scales exactly by α. The output pole $1/(R_{out}C_L)$ depends only on $R_{out} \propto 1/\alpha$.

**Common mistake.** Scaling the compensation capacitor up by α together with the transistors ("all capacitances scale"). Then $\omega_T = \beta g_{m1}/C_C$ and the dominant pole stay where they were, the loop gain still crosses unity at the old frequency, and the faster output pole is wasted. To gain bandwidth the dominant pole must move up by α as well, which Miller compensation with an *unchanged* $C_C$ does automatically.
