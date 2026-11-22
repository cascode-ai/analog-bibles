# Detailed solution - grsim-04-10

The gain is $A_v=-g_{m1}(r_{o1}\parallel r_{o2})$. Both output resistances scale as $1/I$, so the gain depends on how $g_{m1}$ scales with current: as $\sqrt I$ in strong inversion (gain $\propto1/\sqrt I$) but as $I$ in weak inversion (gain independent of $I$). Evaluate both models at the four currents, apply the weak-inversion criterion, and check with ngspice.

### Step 1 — Output resistance

$T_1$ and $T_2$ both carry $I=I_{REF}$ ($T_2$ mirrors the diode $T_3$). With $r_o=1/(\lambda I)$,

$$
r_{o1}\parallel r_{o2}=\frac1{(\lambda_n+\lambda_p)I}=\frac1{(0.0244+0.0488)\ \mathrm{V^{-1}}\,I}=\frac{13.67\ \mathrm V}{I}.
$$

### Step 2 — (a) Strong inversion

With $W/L_{\mathrm{eff}}=100/0.82=122$, the square law gives $g_{m1}=\sqrt{2k'_n(W/L)I}$ and $V_{ov}=\sqrt{2I/[k'_n(W/L)]}$, so

$$
A_v=-\sqrt{2k'_n\frac WLI}\cdot\frac{13.67\ \mathrm V}{I}=-\frac{13.67\ \mathrm V\sqrt{2k'_n(W/L)}}{\sqrt I}\propto\frac1{\sqrt I}.
$$

At 1 mA: $g_{m1}=\sqrt{2(194\ \mu\mathrm{A/V^2})(122)(1\ \mathrm{mA})}=6.88\ \mathrm{mA/V}$ and $A_v=-(6.88\ \mathrm{mA/V})(13.67\ \mathrm{k\Omega})=-94$.

| $I_{REF}$ | $V_{ov}$ | $g_{m1}$ (square law) | $A_v$ (a) |
|---|---|---|---|
| 1 mA | 0.291 V | 6.88 mA/V | −94 |
| 100 μA | 0.092 V | 2.18 mA/V | −297 |
| 10 μA | 0.029 V | 0.688 mA/V | −940 |
| 1 μA | 0.0092 V | 0.218 mA/V | −2970 |

### Step 3 — (b) Including weak inversion

The device is taken to be in weak inversion when $V_{ov}<2nV_T=2(1.5)(26\ \mathrm{mV})=78$ mV. From the table, 1 mA and 100 μA (0.29 V, 0.092 V) remain in strong inversion, while 10 μA and 1 μA (29 mV, 9.2 mV) are in weak inversion. There the exponential law gives $g_{m1}=I/(nV_T)$, so

$$
A_v=-\frac{I}{nV_T}\cdot\frac{13.67\ \mathrm V}{I}=-\frac{1}{nV_T(\lambda_n+\lambda_p)}=-\frac{13.67\ \mathrm V}{(1.5)(26\ \mathrm{mV})}=-350,
$$

independent of current. The results of (b) are therefore −94, −297, −350 and −350. In weak inversion $g_m/I$ reaches its maximum, $1/(nV_T)$, so the intrinsic gain stops rising as the current falls; the square law, which predicts unlimited $g_m/I$ as $V_{ov}\to0$, overestimates the gain at 10 μA and 1 μA by factors of about 2.7 and 8.5.

### Step 4 — (c) SPICE setup

$T_3$ carries $I_{REF}$ from an ideal source; $T_1$'s gate is set by a slow dc servo (an E-source with a 1-GΩ, 1-F low-pass filter) that holds $V_{OUT}=1.5$ V, keeping all devices active. The servo is open at the 1-Hz analysis frequency, so the ac input sees the open-loop gain.

```spice
* grsim-04-10 CS amplifier with active load (IREF = 1m, 100u, 10u, 1u)
VDD  vdd 0 3
IREF g3 0 100u
M3   g3 g3 vdd vdd pch W=100u L=0.82u
M2   out g3 vdd vdd pch W=100u L=0.82u
M1   out g 0 0 nch W=100u L=0.82u
VREF ref 0 1.5
E1   x 0 out ref 1000
RF   x y 1G
CF   y 0 1
VAC  g y dc 0 ac 1
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.0244
.model pch pmos level=1 kp=64.7u vto=-0.8 lambda=0.0488
.control
op
print @m1[id] @m1[gm] @m1[gds] @m2[gds]
ac lin 1 1 1
print v(out)
.endc
.end
```

For part (b) the same circuit was run with a model that includes subthreshold conduction: BSIM3 (`level=8`) with default parameters except `tox=8n`, `vth0` and `u0` set to the process values.

### Step 5 — Simulation results and comparison

| $I_{REF}$ | Hand (a) | Level 1 | Hand (b) | BSIM3: $g_{m1}/I_D$ | BSIM3: $(g_{m1}/I_D)(13.67\ \mathrm V)$ | BSIM3: $A_v$ |
|---|---|---|---|---|---|---|
| 1 mA | −94 | −101 | −94 | 4.3 V⁻¹ | −59 | −57 |
| 100 μA | −297 | −317 | −297 | 14.4 V⁻¹ | −196 | −113 |
| 10 μA | −940 | −1000 | −350 | 23.3 V⁻¹ | −318 | −129 |
| 1 μA | −2970 | −3151 | −350 | 26.4 V⁻¹ | −361 | −132 |

The level-1 (square-law) simulation reproduces part (a): the gain grows as $1/\sqrt I$ without bound. It is about 7% larger at every current because level-1 uses $r_o=(1+\lambda V_{DS})/(\lambda I_D)$ and includes $(1+\lambda V_{DS})$ in $g_m$, which matters with $V_{DS}=1.5$ V.

The BSIM3 run confirms the physics of part (b). At 1 μA, $g_{m1}/I_D=26.4\ \mathrm{V^{-1}}$, i.e. $1/(nV_T)$ with $n=1.45$, close to the assumed 1.5. Combined with the λ-model output resistance this gives −361 at 1 μA and −318 at 10 μA, levelling off near the −350 of part (b) instead of rising to −3000. BSIM3's own output conductance is larger than the λ model, and its strong-inversion $g_m$ is reduced by mobility degradation, so its absolute gains are lower (about −130 at low current). The trend is the same: the gain saturates once the device enters weak inversion.
