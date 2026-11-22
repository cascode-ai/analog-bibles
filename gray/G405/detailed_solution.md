# Detailed solution - G405

Use the two ideal op-amp constraints in place of its gains: infinite DM gain forces the two input terminals to the same voltage, and zero CM gain forces the two outputs to be equal and opposite. KCL at the two input nodes then gives the closed-loop outputs. Let $v_{i1}$ (top) and $v_{i2}$ (bottom) be the op-amp input-node voltages.

### Step 1 — Constraints from the ideal op amp

A finite $v_{od}$ with $a_{dm}\to-\infty$ requires zero DM input, so

$$
v_{i1}=v_{i2}\equiv v_i .
$$

With $a_{cm}=0$ the output CM voltage is zero regardless of the input, so

$$
v_{oc}=\tfrac12(v_{o1}+v_{o2})=0\;\Rightarrow\;v_{o2}=-v_{o1},\quad v_{od}=2v_{o1}.
$$

Infinite input resistance means no current enters the op amp, so all of the current through $R_1$ flows on through $R_3$, and likewise for $R_2$ and $R_4$.

### Step 2 — KCL at the input nodes

$$
\frac{v_{s1}-v_i}{R_1}=\frac{v_i-v_{o1}}{R_3},\qquad
\frac{v_{s2}-v_i}{R_2}=\frac{v_i-v_{o2}}{R_4}.
$$

With $R_1=R_2$ and $R_3=R_4$, subtract the second equation from the first:

$$
\frac{v_{s1}-v_{s2}}{R_1}=\frac{-(v_{o1}-v_{o2})}{R_3}
\;\Rightarrow\;
v_{od}=-\frac{R_3}{R_1}v_{sd}=-\frac{5\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}}v_{sd}=-5v_{sd}.
$$

$v_i$ cancels, so $v_{od}$ depends only on $v_{sd}$ and not on $v_{sc}$.

### Step 3 — Where the common-mode input goes

Adding the two KCL equations and using $v_{o1}+v_{o2}=0$:

$$
\frac{v_{s1}+v_{s2}-2v_i}{R_1}=\frac{2v_i}{R_3}
\;\Rightarrow\;
v_i\left(2+\frac{2R_1}{R_3}\right)=v_{s1}+v_{s2},
$$

Hence

$$
v_i=\frac{v_{s1}+v_{s2}}{2(1+R_1/R_3)}=\frac{v_{s1}+v_{s2}}{2.4}=\tfrac{5}{12}(v_{s1}+v_{s2}).
$$

The CM input only moves the op-amp input common-mode level $v_i$; it never reaches the outputs.

### Step 4 — The four closed-loop gains

| Gain | Definition | Value |
|---|---|---|
| $A_{dm}$ | $v_{od}/v_{sd}$ | $-R_3/R_1=-5$ |
| $A_{cm}$ | $v_{oc}/v_{sc}$ | 0 |
| $A_{dm-cm}$ | $v_{oc}/v_{sd}$ | 0 |
| $A_{cm-dm}$ | $v_{od}/v_{sc}$ | 0 |

$A_{cm}$ and $A_{dm-cm}$ vanish because $v_{oc}=0$ for any input; $A_{cm-dm}$ vanishes because the matched resistor ratios make $v_{od}$ independent of $v_{sc}$.
