# Detailed solution - G180

Compare how the transconductance of one differential pair depends on its tail current in the two technologies. The circuit keeps the total tail current $I=I_p+I_n$ constant and only changes how it is split between the pnp (p-channel) pair and the npn (n-channel) pair as $V_{IC}$ moves through the transition region. The stage transconductance is the sum of the two pairs' transconductances, because the folded-cascode load adds their signal currents.

### Step 1 — Bipolar: transconductance proportional to current

A bipolar pair with tail current $I_{pair}$ has each device at $I_{pair}/2$, so $g_m=I_{pair}/(2V_T)$ and the pair's transconductance is $G_m=I_{pair}/(2V_T)$, linear in the current. Summing both pairs,

$$
G_{m,tot}=\frac{I_p}{2V_T}+\frac{I_n}{2V_T}=\frac{I_p+I_n}{2V_T}=\frac{I}{2V_T},
$$

independent of the split, and therefore independent of $V_{IC}$.

### Step 2 — MOS in strong inversion: transconductance proportional to $\sqrt I$

From the square law $I_D=\tfrac12k'(W/L)V_{ov}^2$, a device at $I_D=I_{pair}/2$ has $g_m=\sqrt{2k'(W/L)I_D}=\sqrt{k'(W/L)I_{pair}}$, so the pair's transconductance grows only as the square root of its tail current. With the two pairs sized for equal $k'(W/L)$:

$$
G_{m,tot}=\sqrt{k'(W/L)}\,\bigl(\sqrt{I_p}+\sqrt{I_n}\bigr),\qquad I_p+I_n=I .
$$

Because $\sqrt{\,\cdot\,}$ is concave (its second derivative is negative), $\sqrt{I_p}+\sqrt{I_n}$ is not constant along $I_p+I_n=I$:

| Operating condition | Split | $G_{m,tot}$ |
|---|---|---|
| $V_{IC}$ well below 0.8 V (p pair only) | $I_p=I$, $I_n=0$ | $\sqrt{k'(W/L)I}$ |
| middle of the transition | $I_p=I_n=I/2$ | $2\sqrt{k'(W/L)I/2}=\sqrt2\,\sqrt{k'(W/L)I}$ |
| $V_{IC}$ well above 0.8 V (n pair only) | $I_p=0$, $I_n=I$ | $\sqrt{k'(W/L)I}$ |

### Step 3 — Why the revised transconductance depends on $V_{IC}$

The split of the constant current between the pairs is set by $V_{IC}$, and in the MOS version the total transconductance depends on that split. $G_m$ is therefore constant only far from the transition, and it rises by up to $\sqrt2$ (about 41 %) where both pairs conduct equally. The op amp's gain and unity-gain frequency vary accordingly with the common-mode input.

If the n- and p-channel pairs do not have equal $k'(W/L)$ (for example because $\mu_n\ne\mu_p$ and the widths are not compensated), $G_m$ also differs between the two ends of the range. The bipolar circuit's constant-$G_m$ property relies on the linear $g_m$–$I$ relation, which MOS devices show only in weak inversion.
