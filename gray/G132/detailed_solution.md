# Detailed solution - G132

Each output limit is set by whichever device runs out of headroom or drive first. At the negative extreme $Q_3$ saturates and pulls the bases down as far as it can; at the positive extreme $Q_3$ is off and $Q_1$'s base current must flow through $R_1$, whose drop limits the swing before $Q_1$ saturates.

### Step 1 — Negative limit

Driving $V_i$ up turns $Q_3$ on harder and lowers $V_1$; $Q_2$, a pnp emitter follower, then sinks the load current with $V_o=V_1+|V_{BE2}|$, and $Q_1$ is reverse-biased. The lowest $V_1$ is reached when $Q_3$ saturates:

$$
V_1=-V_{CC}+V_{CE3(\text{sat})}=-15\ \mathrm V+0.2\ \mathrm V=-14.8\ \mathrm V,\qquad V_o^-=V_1+V_{BE(\text{on})}=-14.1\ \mathrm V.
$$

$Q_2$ is not saturated there, since its collector is at $-15$ V and $|V_{CE2}|=0.9\ \mathrm V>V_{CE(\text{sat})}$. The limit does not depend on $R_L$ (the base current of $Q_2$, at most $7.05\ \mathrm{mA}/50=0.14$ mA for 2 kΩ, is simply sunk by the saturated $Q_3$), so $V_o^-=-14.1$ V for both loads.

### Step 2 — Positive limit

Driving $V_i$ down cuts $Q_3$ off. The base of $Q_1$ is then fed only through $R_1$, and $Q_1$ supplies the load as an npn emitter follower ($Q_2$ is reverse-biased). KVL from $V_{CC}$ through $R_1$ and the base-emitter junction of $Q_1$, with $I_{b1}=I_{c1}/\beta_F\approx V_o/(\beta_FR_L)$:

$$
V_{CC}=I_{b1}R_1+V_{BE(\text{on})}+V_o=\frac{V_oR_1}{\beta_FR_L}+V_{BE(\text{on})}+V_o
\ \Rightarrow\ V_o^+=\frac{V_{CC}-V_{BE(\text{on})}}{1+R_1/(\beta_FR_L)}.
$$

For $R_L=10\ \mathrm{k\Omega}$:

$$
V_o^+=\frac{14.3\ \mathrm V}{1+\dfrac{20\ \mathrm{k\Omega}}{(50)(10\ \mathrm{k\Omega})}}=\frac{14.3\ \mathrm V}{1.04}=13.75\ \mathrm V.
$$

For $R_L=2\ \mathrm{k\Omega}$ the ratio $R_1/(\beta_FR_L)$ is 0.2, so $V_o^+=14.3\ \mathrm V/1.2=11.92$ V.

In both cases $Q_1$ stays out of saturation ($V_{CE1}=15-13.75=1.25$ V and $15-11.92=3.08$ V, both above 0.2 V), so the drop across $R_1$ is indeed what limits the swing. Using $I_{b1}=I_{e1}/(\beta_F+1)$ instead gives 13.76 V and 11.96 V.

### Step 3 — Summary

| $R_L$ | $V_o^+$ (drive-limited by $R_1$) | $V_o^-$ ($Q_3$ saturated) |
|---|---|---|
| 10 kΩ | +13.75 V | −14.1 V |
| 2 kΩ | +11.92 V | −14.1 V |

The negative limit is fixed by saturation; the positive limit falls with heavier loads because $Q_1$ needs more base current through $R_1$.
