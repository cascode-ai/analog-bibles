# Detailed solution - G404

Differentiate the triode square law with respect to $V_{gs}$ at fixed $V_{ds}$. To compare with saturation at the same current, express both transconductances through $I_D$ and take their ratio. Write $V_{ov}=V_{gs}-V_t$; triode requires $0<V_{ds}<V_{ov}$.

### Step 1 — Triode transconductance

From $I_d=k'(W/L)\left[(V_{gs}-V_t)V_{ds}-V_{ds}^2/2\right]$, only the first term depends on $V_{gs}$:

$$
g_{m,\mathrm{triode}}=\frac{\partial I_d}{\partial V_{gs}}\bigg|_{V_{ds}}=k'\frac WL V_{ds}.
$$

Using the bias current $I_D=k'(W/L)(V_{ov}-V_{ds}/2)V_{ds}$, this can also be written

$$
g_{m,\mathrm{triode}}=\frac{I_D}{V_{ov}-V_{ds}/2}.
$$

The triode $g_m$ is set by $V_{ds}$, not by the overdrive: the gate controls the channel charge, and the current that charge carries is proportional to the drain–source voltage.

### Step 2 — Saturation transconductance at the same current

In the active region $I_D=\tfrac12k'(W/L)V_{ov,\mathrm{sat}}^2$ and

$$
g_{m,\mathrm{sat}}=k'\frac WL V_{ov,\mathrm{sat}}=\sqrt{2k'\frac WL I_D}.
$$

### Step 3 — Ratio at equal $I_D$

Substitute the triode $I_D$ into $g_{m,\mathrm{sat}}$ (same device, same current):

$$
\frac{g_{m,\mathrm{triode}}}{g_{m,\mathrm{sat}}}
=\frac{k'(W/L)V_{ds}}{\sqrt{2\left[k'(W/L)\right]^2(V_{ov}-V_{ds}/2)V_{ds}}}
=\sqrt{\frac{V_{ds}}{2V_{ov}-V_{ds}}}.
$$

In triode $V_{ds}<V_{ov}$, hence $V_{ds}<2V_{ov}-V_{ds}$ and the ratio is below 1. It reaches 1 only at the edge of saturation ($V_{ds}=V_{ov}$), where the two models join, and it falls toward zero as $V_{ds}\to0$ (deep triode).

### Step 4 — Conclusion

At the same dc drain current, the transistor in the active region has the larger transconductance; in triode, $g_m=k'(W/L)V_{ds}$ is smaller by the factor $\sqrt{V_{ds}/(2V_{ov}-V_{ds})}$. This is why CMFB circuits that sense the output CM level with triode transistors have lower loop gain and bandwidth for a given current.
