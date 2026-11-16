# Detailed solution - R532

**Approach.** Linear scaling by α changes every $g_m$, $r_O$ and device capacitance in a known way, so internal-node poles stay put while the output pole (which sees the fixed $C_L$) moves up by α. The compensation can follow, so the loop gain keeps its shape and slides up in frequency by α: the bandwidth improves by up to α, with limits discussed at the end.

### Step 1 — What scaling up by α does to each device parameter

Multiplying every $W$ and $I_D$ by α ($L$ fixed) is the same as putting α identical devices in parallel. The current density, and hence every $V_{GS}$, overdrive and bias voltage, is unchanged, and

$$g_m' = \sqrt{2\mu C_{ox}\frac{\alpha W}{L}\,\alpha I_D} = \alpha\,g_m ,\qquad r_O' = \frac{r_O}{\alpha},\qquad C' = \alpha C\ \ (\text{all device capacitances}).$$

Every intrinsic gain $g_mr_O$, and hence $A_0$, is unchanged, and so are headroom and swing.

### Step 2 — Internal poles do not move; the output pole does

An internal node has a resistance made of $1/g_m$'s and $r_O$'s and a capacitance made of device capacitances:

$$\omega_{int}' = \frac{1}{(R/\alpha)(\alpha C)} = \frac{1}{RC} = \omega_{int}.$$

The output node has resistance $R_{out}/\alpha$, but its capacitance is the fixed $C_L$ plus the output devices' own $C_p$, which scales:

$$\omega_{p2} = \frac{1}{R_{out}(C_L + C_p)}\quad\longrightarrow\quad \omega_{p2}' = \frac{\alpha}{R_{out}(C_L + \alpha C_p)} .$$

If the load dominates ($C_L \gg \alpha C_p$),

$$\omega_{p2}' \approx \alpha\,\omega_{p2},$$

the opposite of panel (b), where scaling *down* lowered it to $\omega_{p2}/\alpha$.

### Step 3 — The compensation can follow

In panel (a), $|\beta H|$ falls to unity at $\omega_{p2}$; with the asymptotic rule, $\beta A_0\,\omega'_{p1} \approx \omega_{p2}$. With $\beta$ and $A_0$ unchanged, the same phase margin after scaling requires

$$\beta A_0\,\omega''_{p1} \approx \alpha\,\omega_{p2}\quad\Longrightarrow\quad \omega''_{p1} = \alpha\,\omega'_{p1} .$$

The new loop gain is then the old one with every frequency multiplied by α,

$$\beta H_{new}(s) = \beta H_{old}\!\left(\frac{s}{\alpha}\right),$$

so the crossover moves from $\omega_{p2}$ to $\alpha\omega_{p2}$ with the same phase margin.

**With Miller compensation this happens almost automatically** (same $C_C$):
- $\omega_{p1} \approx 1/(R_1g_{m2}R_LC_C)$: $R_1 \to R_1/\alpha$, $g_{m2} \to \alpha g_{m2}$, $R_L \to R_L/\alpha$, so $R_1g_{m2}R_L \to R_1g_{m2}R_L/\alpha$ and $\omega_{p1} \to \alpha\omega_{p1}$.
- $\omega_T = \beta g_{m1}/C_C \to \alpha\,\omega_T$.
- The right-half-plane zero $g_{m2}/C_C \to \alpha\,g_{m2}/C_C$ moves up with everything else.
- A nulling resistor should be divided by α ($R_z \to R_z/\alpha$), so that its zero $1/[C_C(R_z - 1/g_{m2})]$ also moves up by α and stays on the output pole.

### Step 4 — The bandwidth improvement

The closed-loop bandwidth (and the inverse settling time constant) follows the loop crossover, which has moved from $\omega_{p2}$ to $\alpha\omega_{p2}$:

$$\boxed{\frac{BW_{new}}{BW_{old}} \approx \alpha}$$

The power also rises by α, so the bandwidth per unit power stays the same: speed is bought linearly with power.

### Step 5 — Why the improvement is less than α in practice

1. **Self-loading at the output.** Including $C_p$, the improvement is
$$\frac{\omega'_{p2}}{\omega_{p2}} = \frac{\alpha(C_L + C_p)}{C_L + \alpha C_p},$$
which tends to $(C_L + C_p)/C_p$ as $\alpha \to \infty$. For example, with $C_p = 0.1\,C_L$ and $\alpha = 4$:
$$\frac{4\times1.1}{1 + 0.4} = 3.14\ \text{instead of } 4 .$$
In a Miller-compensated stage the growing first-stage capacitance $C_E$ similarly enters $\omega_{p2} \approx g_{m2}C_C/(C_EC_C + C_EC_L + C_CC_L)$.
2. **Fixed internal poles.** Mirror, cascode and first-stage parasitic poles do not move; once $\alpha\omega_{p2}$ approaches them, they become the limiting nondominant poles and cap the bandwidth.
3. **Feedback network.** With capacitive feedback, the op amp's input capacitance grows by α and lowers $\beta$, reducing the loop gain and the closed-loop bandwidth.

### Result

Scaling all widths and bias currents up by α multiplies every $g_m$ (and device capacitance) by α and divides every $r_O$ by α. Gains and internal poles are unchanged, but the output pole rises to $\alpha\omega_{p2}$ because the output resistance falls by α while $C_L$ is fixed. The compensation can follow (the dominant pole and $\omega_T \propto g_{m1}/C_C$ rise by α with the same $C_C$; $R_z$ is divided by α), so $|\beta H|$ crosses unity at $\alpha\omega_{p2}$ with the same phase margin.

**The bandwidth can improve by up to a factor of α, at α times the power**, provided the fixed load capacitance dominates the output node. In practice the improvement is somewhat less, $\alpha(C_L + C_p)/(C_L + \alpha C_p)$, and it saturates as α grows because device capacitances scale up and the internal poles stay fixed.

**Common mistake.** Answering "no improvement" by analogy with a self-loaded circuit, where all poles stay fixed. Here $C_L$ is fixed, so the output node, and only the output node, speeds up by α.

**Common mistake.** Claiming an improvement of α² ("$g_m$ grows by α and $r_O$ falls by α") or $\sqrt\alpha$ ("$g_m \propto \sqrt{I_D}$"). At constant current density $g_m$ scales exactly by α, and the output pole $1/(R_{out}C_L)$ depends only on $R_{out} \propto 1/\alpha$.

**Common mistake.** Scaling the compensation capacitor up by α with the transistors. Then $\omega_T = \beta g_{m1}/C_C$ and the dominant pole stay put, the crossover does not move, and the faster output pole is wasted.
