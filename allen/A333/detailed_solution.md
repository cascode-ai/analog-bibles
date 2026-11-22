# Detailed solution - A333

For differential signals the two outputs move by equal and opposite amounts, so the midpoint of any symmetric floating load stays at a fixed potential. Split the load into two equal halves in series, ground the midpoint, and read off the load each output sees.

### Step 1 — Midpoint of the floating load is an ac ground

A purely differential output has

$$
v_{o1}=+\frac{v_{od}}2,\qquad v_{o2}=-\frac{v_{od}}2 .
$$

Write $C_L$ as two equal capacitors $2C_L$ in series; the series combination is $\bigl[(2C_L)^{-1}+(2C_L)^{-1}\bigr]^{-1}=C_L$, so the circuit is unchanged. By symmetry the voltage at their common node is the average of the two outputs,

$$
v_{mid}=\frac{v_{o1}+v_{o2}}2=0,
$$

so connecting this node to ground draws no current and changes nothing.

### Step 2 — Capacitive load

After grounding the midpoint, each output drives one half, $2C_L$, to ground. The current check confirms it: the current in the floating capacitor is

$$
i=sC_L(v_{o1}-v_{o2})=sC_Lv_{od}=s(2C_L)\frac{v_{od}}2=s(2C_L)v_{o1},
$$

which is exactly the current of $2C_L$ from $v_{o1}$ to ground. Each single-ended equivalent load is therefore

$$
C_{eq}=2C_L .
$$

A single-ended output pole thus becomes $1/(R_{out}\cdot2C_L)$, where $R_{out}$ is the output resistance of one side.

### Step 3 — Resistive load

The same split applies to $R_L$: two resistors $R_L/2$ in series equal $R_L$, and their midpoint is at ac ground. The current is

$$
i=\frac{v_{o1}-v_{o2}}{R_L}=\frac{v_{od}}{R_L}=\frac{v_{o1}}{R_L/2},
$$

so each output sees

$$
R_{eq}=\frac{R_L}2 .
$$

### Step 4 — Validity

The equivalence holds only for differential signals. For a common-mode change ($v_{o1}=v_{o2}$) no current flows in the floating load, so it presents no common-mode load at all, whereas the grounded equivalents would load the common-mode output. This matters, for example, when analysing a common-mode feedback loop.

| Floating load between outputs | Equivalent load from each output to ground (differential signals) |
|---|---|
| $C_L$ | $2C_L$ |
| $R_L$ | $R_L/2$ |
