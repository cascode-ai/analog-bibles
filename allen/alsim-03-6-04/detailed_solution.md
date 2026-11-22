# Detailed solution - alsim-03-6-04

A family of output characteristics is one dc analysis with two sweep variables: SPICE runs the inner sweep ($v_{DS}$) completely for each value of the outer one ($v_{GS}$), and all the resulting curves are plotted together. The level-1 equations then give the knees and current levels to check against.

### Step 1 — Nested dc sweep

```spice
NMOS output characteristics
M1 2 1 0 0 MN W=1U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MN NMOS LEVEL=1 VTO=1 KP=110U LAMBDA=0.04
.DC VDS 0 5 0.1 VGS 1 5 1
.PRINT DC I(VDS)
.END
```

`.DC VDS 0 5 0.1 VGS 1 5 1` sweeps $v_{DS}$ from 0 to 5 V (inner) and steps $v_{GS}$ through 1, 2, 3, 4, 5 V (outer), so the five curves come out of one run. SPICE reports the current flowing into the positive node of VDS, so the drain current is $i_D=-I(\mathrm{VDS})$. With W = L = 1 µm the currents are per unit W/L. (In ngspice, `.DC` with `plot -i(vds)` in a `.control` block draws the family directly; the figure below used a 10-mV step.)

### Step 2 — Level-1 equations

With $\beta=K'(W/L)=110\ \mu\mathrm{A/V^2}$ and $V_{ov}=v_{GS}-V_T$, the level-1 model applies $(1+\lambda v_{DS})$ in both regions:

$$
i_D=
\begin{cases}
\beta\left(V_{ov}v_{DS}-\tfrac12v_{DS}^2\right)(1+\lambda v_{DS}), & v_{DS}<V_{ov}\ \text{(nonsaturation)}\\[4pt]
\tfrac12\beta V_{ov}^2(1+\lambda v_{DS}), & v_{DS}\ge V_{ov}\ \text{(saturation)}.
\end{cases}
$$

The two pieces meet at $v_{DS}=V_{ov}$, so the knees lie on the parabola $i_D=\tfrac12\beta v_{DS}^2(1+\lambda v_{DS})$ (dashed in the figure).

### Step 3 — Expected values

For $v_{GS}=1$ V, $V_{ov}=0$ and the device is at threshold: $i_D=0$ everywhere. For $v_{GS}=5$ V at $v_{DS}=5$ V (saturation, $V_{ov}=4$ V):

$$
i_D=\tfrac12(110\ \mu\mathrm{A/V^2})(4\ \mathrm V)^2(1+0.04\cdot5)=(880\ \mu\mathrm A)(1.2)=1056\ \mu\mathrm A .
$$

The other curves follow in the same way:

| $v_{GS}$ | Knee $v_{DS}=V_{ov}$ | $\tfrac12\beta V_{ov}^2$ | $i_D$ at $v_{DS}=1$ V | $i_D$ at $v_{DS}=5$ V |
|---|---|---|---|---|
| 1 V | 0 | 0 | 0 | 0 |
| 2 V | 1 V | 55 µA | 57.2 µA | 66 µA |
| 3 V | 2 V | 220 µA | 171.6 µA | 264 µA |
| 4 V | 3 V | 495 µA | 286 µA | 594 µA |
| 5 V | 4 V | 880 µA | 400.4 µA | 1056 µA |

Below each knee the curve starts from the origin with slope $\beta V_{ov}=110$, 220, 330, 440 µA/V.

### Step 4 — Simulated family

![Simulated drain current versus drain-source voltage for vGS = 1 to 5 V, with the saturation boundary vDS = vGS − VT dashed and the knees marked](/q/alsim-03-6-04/solution-curves.svg)

The ngspice values coincide with the table: zero current at $v_{GS}=1$ V, knees at $v_{DS}=1$, 2, 3, 4 V, and 66, 264, 594 and 1056 µA at $v_{DS}=5$ V. In saturation each curve rises with slope $\lambda\cdot\tfrac12\beta V_{ov}^2$, e.g. 35 µA/V for $v_{GS}=5$ V. The knees are at $v_{DS}=v_{GS}-V_T$, not at $v_{GS}$, and the saturated current uses $\beta/2$.
