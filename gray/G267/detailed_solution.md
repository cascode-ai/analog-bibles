# Detailed solution - G267

Raising $I_{C1}$ changes only the small-signal parameters of $Q_1$, which lie inside the forward path. Find how much the open-loop gain $a$ (and hence $T$) changes, then use the desensitivity of the closed-loop gain. For the output resistance, the loop's ability to raise it is capped by the unsensed base current of $Q_2$, so the change is much smaller than that of $1+T$.

### Step 1 — Parameters of $Q_1$ before and after

With $g_m=I_C/V_T$, $r_\pi=\beta/g_m$, $r_o=V_A/I_C$, a 20% increase of $I_{C1}$ gives:

| $I_{C1}$ | $g_{m1}$ (mA/V) | $r_{\pi1}$ (kΩ) | $r_{o1}$ (kΩ) |
|---|---|---|---|
| 1 mA | 38.46 | 5.2 | 100 |
| 1.2 mA | 46.15 | 4.33 | 83.3 |

### Step 2 — Change in the open-loop gain

In the two-port analysis $a=-R_i\,g_{m1}\,R_{c1}\,\beta/R_{in2}$, with input resistance $R_i=(R_E+R_F)\parallel r_{\pi1}$ and $Q_1$ collector load $R_{c1}=R_{L1}\parallel r_{o1}\parallel R_{in2}$ ($R_{in2}=43.9\ \mathrm{k\Omega}$ is unchanged). Three factors move:

$$
g_{m1}:\ +20\%,\qquad R_i=5.2\ \mathrm{k\Omega}\parallel r_{\pi1}:\ 2.60\to2.36\ \mathrm{k\Omega}\ (-9.1\%),\qquad R_{c1}:\ 7.53\to7.42\ \mathrm{k\Omega}\ (-1.5\%).
$$

The product $g_{m1}r_{\pi1}=\beta$ is fixed, so the higher $g_{m1}$ is largely offset by the lower $r_{\pi1}$ at the input node:

$$
\frac{a'}{a}=(1.20)(0.909)(0.985)=1.075,\qquad T:\ 133\to143 .
$$

### Step 3 — Change in the overall gain

$$
\frac{\Delta A}{A}\approx\frac{1}{1+T}\,\frac{\Delta a}{a}=\frac{7.5\%}{134}=0.056\%.
$$

Recomputing $A=a/(1+T)$ gives $-25.677\to-25.691$, an increase in magnitude of about 0.05%: practically no change.

### Step 4 — Change in the output resistance

A first-order two-port estimate scales $Z_{out}=(1+T)z_{oa}$ with $1+T$ (+7.5%) and the slightly larger $z_{oa}$ (+0.8%), about +8%. This overstates the change. The loop holds the emitter current of $Q_2$, not its collector current, so $Z_{out}$ can never exceed $(\beta+1)r_{o2}=20.1$ MΩ, and at 14.3 MΩ it is already a large fraction of that ceiling, where extra loop gain helps little. An exact small-signal solution gives

$$
Z_{out}:\ 14.3\ \mathrm{M\Omega}\to14.6\ \mathrm{M\Omega}\quad(+2.3\%).
$$

So a 20% increase of $I_{C1}$ leaves the gain essentially unchanged (+0.05%) and raises the output resistance by only a few percent.
