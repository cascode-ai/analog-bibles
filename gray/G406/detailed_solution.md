# Detailed solution - G406

Replace the ideal op amp by its two constraints, $v_{i1}=v_{i2}=v_i$ (from $a_{dm}\to-\infty$) and $v_{o1}+v_{o2}=0$ (from $a_{cm}=0$), write KCL at each input node, and solve for $v_i$ and $v_{od}$. With mismatched input resistors the common-mode input level $v_i$ no longer cancels out of $v_{od}$, which produces CM-to-DM conversion.

### Step 1 — Each output in terms of $v_i$

No current enters the op amp, so the current through $R_1$ continues through $R_3$:

$$
\frac{v_{s1}-v_i}{R_1}=\frac{v_i-v_{o1}}{R_3}
\;\Rightarrow\;
v_{o1}=v_i\left(1+\frac{R_3}{R_1}\right)-\frac{R_3}{R_1}v_{s1},
$$

and likewise on the bottom side,

$$
v_{o2}=v_i\left(1+\frac{R_3}{R_2}\right)-\frac{R_3}{R_2}v_{s2}.
$$

With the given values $R_3/R_1=4.9505$ and $R_3/R_2=5.0505$.

### Step 2 — Op-amp input level from $v_{oc}=0$

Setting $v_{o1}+v_{o2}=0$:

$$
v_i=\frac{R_3\left(v_{s1}/R_1+v_{s2}/R_2\right)}{2+R_3/R_1+R_3/R_2}
=\frac{4.9505v_{s1}+5.0505v_{s2}}{12.001}.
$$

Because $v_{oc}=0$ for every input, $A_{cm}=A_{dm-cm}=0$ exactly, mismatch or not.

### Step 3 — Differential output

Subtracting the two expressions of Step 1:

$$
v_{od}=v_i\left(\frac{R_3}{R_1}-\frac{R_3}{R_2}\right)-R_3\left(\frac{v_{s1}}{R_1}-\frac{v_{s2}}{R_2}\right),
\qquad \frac{R_3}{R_1}-\frac{R_3}{R_2}=-0.1000.
$$

The first term is the mismatch path: any $v_i$, and $v_i$ is mainly set by the source common mode, now reaches $v_{od}$.

### Step 4 — Gains for CM and DM inputs

CM input, $v_{s1}=v_{s2}=v_{sc}$:

$$
v_i=\frac{10.001}{12.001}v_{sc}=0.8333v_{sc},\qquad
v_{od}=(-0.1000)(0.8333)v_{sc}-(4.9505-5.0505)v_{sc}=+0.0167v_{sc}.
$$

Exactly, $A_{cm-dm}=1000/59999=0.0167$. To first order this is $(R_3/R)\,\Delta R/(R+R_3)=5(0.02\ \mathrm{k\Omega})/(6\ \mathrm{k\Omega})=0.0167$, with $R=1$ kΩ and $\Delta R=R_1-R_2=0.02$ kΩ.

DM input, $v_{s1}=v_{sd}/2$, $v_{s2}=-v_{sd}/2$: here $v_i=-0.0042v_{sd}$ is tiny and

$$
v_{od}=-\frac{R_3}{2}\left(\frac1{R_1}+\frac1{R_2}\right)v_{sd}+(-0.1000)(-0.0042)v_{sd}=-5.0001v_{sd}.
$$

### Step 5 — Summary

| Gain | Value |
|---|---|
| $A_{dm}=v_{od}/v_{sd}$ | $-5.0001\approx-5.000$ |
| $A_{cm}=v_{oc}/v_{sc}$ | 0 |
| $A_{dm-cm}=v_{oc}/v_{sd}$ | 0 |
| $A_{cm-dm}=v_{od}/v_{sc}$ | $+0.0167$ |

A ±1% resistor mismatch leaves $A_{dm}$ essentially at $-5$ and the CM-output gains at zero (the op amp holds $v_{oc}=0$), but it converts the input common mode into a differential output with gain 0.0167.
