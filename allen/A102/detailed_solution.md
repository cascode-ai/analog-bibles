# Detailed solution - A102

Replace the NMOS by its small-signal model, set $V_{DD}$ to ac ground and apply a test voltage $v_{out}$ at $V_{REF}$. Because the gate draws no current, the divider fixes the gate signal directly, and the total test current is a sum of four terms.

### Step 1 — Small-signal circuit

With $V_{DD}$ at ac ground, $R$ connects $V_{REF}$ to ground. The transistor (drain at $V_{REF}$, source grounded) is saturated, since $V_{DS}=V_{REF}>V_{GS}$ for any divider ratio. Its model is a controlled current $g_mv_{gs}$ from drain to source in parallel with $g_{ds}=1/r_{ds}$; the source is at ground, so $v_{gs}=v_g$. The divider $R_1$ (drain to gate) and $R_2$ (gate to ground) is a series path of $R_1+R_2$ from $V_{REF}$ to ground.

### Step 2 — Gate voltage and test current

No current enters the gate, so the gate signal is the unloaded divider output:

$$
v_g=\frac{R_2}{R_1+R_2}\,v_{out} .
$$

The test current is the sum of the controlled current, the current in $g_{ds}$, the divider current and the current in $R$:

$$
i_t=g_m\frac{R_2}{R_1+R_2}v_{out}+g_{ds}v_{out}+\frac{v_{out}}{R_1+R_2}+\frac{v_{out}}{R} .
$$

### Step 3 — Output resistance

The first three terms belong to the transistor–divider combination. Multiplying its conductance by $R_1+R_2$,

$$
r_{out}=R\,\Big\|\,\frac{R_1+R_2}{1+g_mR_2+g_{ds}(R_1+R_2)} .
$$

### Step 4 — Usual approximation

For $g_mR_2\gg1$ and $g_{ds}\ll g_mR_2/(R_1+R_2)$ (large $r_{ds}$), the denominator reduces to $g_mR_2$:

$$
r_{out}\approx\frac{R_1+R_2}{g_mR_2}=\frac1{g_m}\left(1+\frac{R_1}{R_2}\right)=\frac1{g_m}\frac{V_{REF}}{V_{GS}} ,
$$

since the same divider sets $V_{REF}=V_{GS}(1+R_1/R_2)$. The circuit behaves as a diode-connected transistor, of resistance $1/g_m$, scaled up by the same factor as the voltage. $R$ is usually much larger than this and its parallel contribution is negligible.
